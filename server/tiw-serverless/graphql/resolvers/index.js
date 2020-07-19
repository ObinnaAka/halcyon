/* -----------------------------------------------
This document contains all of the resolvers 
(functions) needed for the GraphQl server to put 
and retrieve data from the database.

IMPORTANT: This document will need to be changed
when using a different database
-----------------------------------------------*/

const { withFilter } = require("graphql-subscriptions");

const Member = require("../../models/member");
const Transaction = require("../../models/transaction");
const Tool = require("../../models/tool");
const Training = require("../../models/training");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticated, validateRole } = require("../../middleware/is-auth");

// const express = require("express");
// const mongoose = require("mongoose");

const connectToDatabase = require("../../database");

const TRANSACTION_SUBSCRIPTION = "newTransaction";
const STUDENT_SUBSCRIPTION = "newStudent";

// -----------------------------------------------
// We use this to store the events for the subscriptions
// on our GraphQL Lambda Server
// -----------------------------------------------

// -----------------------------------------------
// These convert the objects (Members, Transactions,
// Tools, Trainings) gotten from the database and
// converts the various fields to make readable by
// the website
// ------------------------------------------------

const transformMember = (member) => {
	return {
		...member._doc,
		_id: member.id,
		password: null,
	};
};
const transformTransaction = (transaction) => {
	return {
		...transaction._doc,
		_id: transaction.id,
		tools: transaction.tools,
	};
};
const transformTool = (tool) => {
	return {
		...tool._doc,
		_id: tool.id,
	};
};

// -----------------------------------------------
// Resolvers
// The functions that interact with the database
// Grouped into "Query", "Mutation" and "Subscription"
// -----------------------------------------------

module.exports = {
	// ------------------------------------------
	// Query
	// ------------------------------------------

	Query: {
		test: async () => {
			let connected = await connectToDatabase();
			return "We made it || " + connected + " || " + process.env.AZURE;
		},
		me: authenticated((root, args, context) =>
			console.log(context.currentMember)
		),

		// ------------------------------------------
		// Retrieve all members from database
		// ------------------------------------------
		// TODO Require authentication to retrieve all members in the database
		members: async () => {
			try {
				await connectToDatabase();
				const members = await Member.find();
				return members.map((member) => {
					return transformMember(member);
				});
			} catch (err) {
				throw err;
			}
		},

		// ------------------------------------------
		// Retrieve a single member from database
		// by ID
		// ------------------------------------------

		singleMember: async (memberID) => {
			try {
				await connectToDatabase();
				const member = await Member.findById(memberID);
				return transformMember(member);
			} catch (err) {
				throw err;
			}
		},

		// ------------------------------------------
		// Retrieve all transactions from database
		// ------------------------------------------

		transactions: async () => {
			try {
				await connectToDatabase();
				const transactions = await Transaction.find();
				return transactions.map((transaction) => {
					return transformTransaction(transaction);
				});
			} catch (err) {
				throw err;
			}
		},

		// ------------------------------------------
		// Retrieve a single transaction from database
		// ------------------------------------------

		singleTransaction: async (transactionID) => {
			try {
				await connectToDatabase();
				const transaction = await Transaction.findById(transactionID);
				return transformTransaction(transaction);
			} catch (err) {
				throw err;
			}
		},

		// ------------------------------------------
		// Retrieve all tools from database
		// ------------------------------------------

		tools: async () => {
			try {
				await connectToDatabase();
				const tools = await Tool.find();
				return tools.map((tool) => {
					return transformTool(tool);
				});
			} catch (err) {
				throw err;
			}
		},

		// ------------------------------------------
		// Retrieve a single tool from database
		// ------------------------------------------

		singleTool: async (toolID) => {
			// For coworking session
		},

		// ------------------------------------------
		// Verify a user's password, authenticate their
		// token and log them in
		// ------------------------------------------

		login: async (_, { eid, password }, { cache }) => {
			await connectToDatabase();
			const member = await Member.findOne({ eid: eid });
			if (!member) {
				throw new Error("User not registered");
			}
			const isEqual = await bcrypt.compare(password, member.password);
			if (!isEqual) {
				throw new Error("Password is incorrect");
			}

			const token = jwt.sign(
				{ member: { _id: member.id, memberType: member.memberType } },
				"supercalifragilisticexpialidocious",
				{ expiresIn: "1h" }
			);
			// TODO Change member encoding for only critical information
			return {
				member: { _id: member.id, memberType: member.memberType },
				token: token,
				tokenExpiration: 1,
			};
		},

		// ------------------------------------------
		// Retrieve all outstanding transactions from
		// the database
		// ------------------------------------------

		outstandingTransactions: async () => {
			try {
				await connectToDatabase();
				const transactions = await Transaction.find({
					status: "Processing",
				});
				// !------------------------------------------
				// ! The Sort function at the end is a temporary solution for Cosmos DB\
				// ! THe native sort function from Mongoose/MongoDB didn't work. It returned GraphQLError
				// ! .sort("createdAt desc");
				// ! ------------------------------------------
				if (transactions) {
					console.log("oof");
					return transactions
						.map((transaction) => {
							return transformTransaction(transaction);
						})
						.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
				}
				// console.log("oof");
			} catch (err) {
				console.log(err);
				throw err;
			}
		},

		signedInStudents: async () => {
			try {
				await connectToDatabase();
				const signedInStudents = await Member.find({
					signinStatus: true,
				});
				// !------------------------------------------
				// ! The Sort function at the end is a temporary solution for Cosmos DB\
				// ! THe native sort function from Mongoose/MongoDB didn't work. It returned GraphQLError
				// ! .sort("workstation desc");
				// ! ------------------------------------------
				if (signedInStudents) {
					return signedInStudents.map((transaction) => {
						return transformTransaction(transaction);
					});
					// .sort((a, b) =>
					// 	a.member.workstation > b.member.workstation ? -1 : 1
					// );
				} else {
					console.log("No Signed In Students");
					return null;
				}
			} catch (err) {
				console.log(err);
				throw err;
			}
		},
	},
	// ------------------------------------------
	// Mutations
	// ------------------------------------------

	Mutation: {
		// ------------------------------------------
		// Just a transaction testing function. Can
		// create transactions without being authenticated
		// with a token
		// ------------------------------------------

		noAuthTest: async (root, args, context) => {
			try {
				await connectToDatabase();
				const transaction = new Transaction({
					transactionType: args.transactionInput.transactionType,
					staffMember: args.transactionInput.staffMember,
					member: args.transactionInput.member,
					tools: args.transactionInput.tools,
					training: args.transactionInput.training,
					status: args.transactionInput.status,
					comment: args.transactionInput.comment,
				});
				const member = await Member.findById(transaction.member);
				// Make sure member is registered in the database
				if (!member) {
					throw new Error("User not found");
				}

				// Here is where we build out the logic/routing for the transactions
				if (transaction.transactionType === "Sign-in") {
					await Member.updateOne(
						{ _id: transaction.member },
						{ $set: { signinStatus: true } }
					);
				} else if (transaction.transactionType === "Sign-out") {
					await Member.updateOne(
						{ _id: transaction.member },
						{ $set: { signinStatus: false } }
					);
				} else if (transaction.transactionType === "Tool Check-in") {
					let tools = JSON.stringify(transaction.tools);
					await Tool.updateMany(
						{ _id: { $in: transaction.tools } },
						{
							$set: {
								// currentWorkspace: null,
								currentUser: null,
								status: 0,
							},
						},
						{ upsert: true },
						(err, doc) => {
							if (err) console.log(err);
						}
					);
					await Member.updateOne(
						{ _id: { $in: transaction.member } },
						{ $pull: { itemRecord: { $in: transaction.tools } } },
						{ upsert: false },
						(err, doc) => {
							if (err) console.log(err);
						}
					);
				} else if (transaction.transactionType === "Tool Checkout") {
					let tools = JSON.stringify(transaction.tools);
					await Tool.updateMany(
						{ _id: { $in: transaction.tools } },
						{
							$set: {
								// currentWorkspace: null,
								currentUser: transaction.member,
								status: 2,
							},
						},
						{ upsert: true },
						(err, doc) => {
							if (err) console.log(err);
						}
					);
					await Member.updateOne(
						{ _id: { $in: transaction.member } },
						{ $push: { itemRecord: { $each: transaction.tools } } },
						{ upsert: false },
						(err, doc) => {
							if (err) console.log(err);
						}
					);
				} else if (transaction.transactionType === "Advanced 3D-Print") {
				} else if (transaction.transactionType === "Training") {
				} else if (transaction.transactionType === "Conduct-Update") {
				} else if (transaction.transactionType === "Cleaning") {
				} else {
					console.log("test");
				}

				// We create "createdTransaction" so that we can simultaneously access the
				// Transaction and its args (member, staffMember, tools)
				let createdTransaction;
				const result = await transaction.save();
				createdTransaction = transformTransaction(result);

				// publish(createdTransaction);

				await context.pubSub.publish(TRANSACTION_SUBSCRIPTION, transaction);

				// Add transaction to member transactionRecord
				member.transactionRecord.push(createdTransaction);
				//At the end of this, save the member to the database
				await member.save();
				return createdTransaction;
			} catch (err) {
				throw err;
			}
		},
		// ------------------------------------------
		// Create a new Member in the database
		// ------------------------------------------

		createMember: async (root, args) => {
			try {
				await connectToDatabase();
				console.log(args);

				// Check to see if the user is already registered
				const existingMember = await Member.findOne({
					eid: args.memberInput.eid,
				});

				if (existingMember) {
					throw new Error("User already registered");
				}

				const hashedPassword = await bcrypt.hash(args.memberInput.password, 12);

				const member = new Member({
					eid: args.memberInput.eid,
					firstName: args.memberInput.firstName,
					lastName: args.memberInput.lastName,
					password: hashedPassword,
					email: args.memberInput.email,
					phone: args.memberInput.phone,
					memberType: args.memberInput.memberType,
				});
				let result = await member.save();

				const transaction = new Transaction({
					transactionType: "User Registration",
					member: result.id,
				});

				//  It feels sloppy but it works
				const savedTransaction = await transaction.save();
				result = await Member.findById(result.id);
				result.transactionRecord.push(savedTransaction);
				await result.save();
				return transformMember(result);
			} catch (err) {
				console.log(err);
				throw err;
			}
		},

		// ------------------------------------------
		// Create a new Transaction in the database
		// This resolver has a lot of logic in it to
		// sort each transaction and execute the appropriate
		// action on the server.
		// ------------------------------------------
		//! Validating Staff might lead to a bug when trying to create a transaction as a student
		createTransaction: authenticated(
			validateRole("Staff")(async (root, args, context) => {
				try {
					await connectToDatabase();
					const transaction = new Transaction({
						transactionType: args.transactionInput.transactionType,
						staffMember: args.transactionInput.staffMember,
						member: args.transactionInput.member,
						tools: args.transactionInput.tools,
						training: args.transactionInput.training,
						status: args.transactionInput.status,
						comment: args.transactionInput.comment,
					});
					const member = await Member.findById(transaction.member);
					// Make sure member is registered in the database
					if (!member) {
						throw new Error("User not found");
					}

					// Here is where we build out the logic/routing for the transactions
					if (transaction.transactionType === "Sign-in") {
						await Member.updateOne(
							{ _id: transaction.member },
							{ $set: { signinStatus: true } }
						);
					} else if (transaction.transactionType === "Sign-out") {
						await Member.updateOne(
							{ _id: transaction.member },
							{ $set: { signinStatus: false } }
						);
					} else if (transaction.transactionType === "Tool Check-in") {
						let tools = JSON.stringify(transaction.tools);
						await Tool.updateMany(
							{ _id: { $in: transaction.tools } },
							{
								$set: {
									// currentWorkspace: null,
									currentUser: null,
									status: 0,
								},
							},
							{ upsert: true },
							(err, doc) => {
								if (err) console.log(err);
							}
						);
						await Member.updateOne(
							{ _id: { $in: transaction.member } },
							{ $pull: { itemRecord: { $in: transaction.tools } } },
							{ upsert: false },
							(err, doc) => {
								if (err) console.log(err);
							}
						);
					} else if (transaction.transactionType === "Tool Checkout") {
						let tools = JSON.stringify(transaction.tools);
						await Tool.updateMany(
							{ _id: { $in: transaction.tools } },
							{
								$set: {
									// currentWorkspace: null,
									currentUser: transaction.member,
									status: 2,
								},
							},
							{ upsert: true },
							(err, doc) => {
								if (err) console.log(err);
							}
						);
						await Member.updateOne(
							{ _id: { $in: transaction.member } },
							{ $push: { itemRecord: { $each: transaction.tools } } },
							{ upsert: false },
							(err, doc) => {
								if (err) console.log(err);
							}
						);
					} else if (transaction.transactionType === "Advanced 3D-Print") {
					} else if (transaction.transactionType === "Training") {
					} else if (transaction.transactionType === "Conduct-Update") {
					}
					// Not sure of this last one
					else if (transaction.transactionType === "Cleaning") {
					} else {
						console.log("test");
					}

					// We create "createdTransaction" so that we can simultaneously access the
					// Transaction and its args (member, staffmember, tools)
					let createdTransaction;
					const result = await transaction.save();
					createdTransaction = transformTransaction(result);

					// publish(createdTransaction);

					await context.pubSub.publish(TRANSACTION_SUBSCRIPTION, transaction);

					// Add transaction to member transactionRecord
					member.transactionRecord.push(createdTransaction);
					//At the end of this, save the member to the database
					await member.save();
					return createdTransaction;
				} catch (err) {
					throw err;
				}
			})
		),

		// ------------------------------------------
		// Create a new Tool in the database
		// ------------------------------------------

		createTool: authenticated(
			validateRole("Staff")(async (root, args) => {
				try {
					const tool = new Tool({
						name: args.toolInput.name,
						location: args.toolInput.location,
						status: args.toolInput.status,
						toolType: args.toolInput.toolType,
						group: args.toolInput.name,
						inService: args.toolInput.inService,
					});

					return await tool.save();
					// At some point we might want to track when new tools are created
					// by staff. We can add that in here --->
				} catch (err) {
					throw err;
				}
			})
		),

		// toolRequest: async ({ group }, req) => {
		// 	if (!req.isAuth) {
		// 		throw new Error("Not authenticated. Please log in");
		// 	}
		// },

		// ------------------------------------------
		// WIP: Meant to be a tool checkout resolver
		// ------------------------------------------
		toolCheckout: async (root, args, req) => {
			await connectToDatabase();
			if (!req.isAuth) {
				throw new Error("Not authenticated. Please log in");
			}
			try {
				let tool = await Tool.findOneAndUpdate(
					{ _id: args.toolID },
					{ currentUser: args.memberID },
					{
						new: true,
					}
				);
				let member = await Member.findById(args.memberID);

				let transactionInput = {
					transactionType: "Tool Checkout",
					staffMember: req.memberID,
					member: args.memberID,
					tool: args.toolID,
					status: "Processing",
					comment: args.comment,
				};
				let transaction = await Transaction.create(transactionInput);
				await member.itemRecord.push(args.toolID).save();
				return tool;
			} catch (err) {
				throw err;
			}
		},
	},

	// ------------------------------------------
	// Subscriptions
	// ------------------------------------------

	Subscription: {
		onNewRequest: {
			//! Will need WithFilter here to filter for only "Processing transactions"
			// subscribe: () => pubsub.asyncIterator([TRANSACTION_SUBSCRIPTION]),
			subscribe: () => pubsub.subscribe(TRANSACTION_SUBSCRIPTION),
			resolve: (transaction) => {
				return transaction;
			},

			// subscribe: withFilter(
			// 	() => pubsub.asyncIterator([TRANSACTION_SUBSCRIPTION]),
			// 	(payload, args) => {
			// 		return payload;
			// 	}
			// ),
			// resolve: (payload) => {
			// 	console.log(payload);
			// 	return transformTransaction(payload);
			// },
		},
		onNewStudent: {
			//! Will need WithFilter here to filter for only "Processing transactions"
			subscribe: () => pubsub.subscribe(TRANSACTION_SUBSCRIPTION),
			resolve: (transaction) => {
				return transaction.member;
			},
		},
	},
};
