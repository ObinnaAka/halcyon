const Member = require("../../models/member");
const Transaction = require("../../models/transaction");
const Tool = require("../../models/tool");
const Training = require("../../models/training");
const { subscribe } = require("graphql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { authenticated, validateRole } = require("../../middleware/is-auth");

const transformMember = (member) => {
	return {
		...member._doc,
		_id: member.id,
		password: null,
		createdAt: new Date(member._doc.createdAt).toISOString(),
		updatedAt: new Date(member._doc.updatedAt).toISOString(),
	};
};
const transfromTransaction = (transaction) => {
	return {
		...transaction._doc,
		_id: transaction.id,
		createdAt: new Date(transaction._doc.createdAt).toISOString(),
		updatedAt: new Date(transaction._doc.updatedAt).toISOString(),
	};
};
const transformTool = (tool) => {
	return {
		...tool._doc,
		_id: member.id,
		currentWorkstation: currentWorkstation._doc.name,
	};
};
module.exports = {
	Query: {
		me: authenticated((root, args, context) => context.currentMember),
		members: async () => {
			try {
				const members = await Member.find();
				return members.map((member) => {
					return transformMember(member);
				});
			} catch (err) {
				throw err;
			}
		},
		// Fetch a single member from the collection
		singleMember: async (memberID) => {
			try {
				const member = await Member.findById(memberID);
				return transformMember(member);
			} catch (err) {
				throw err;
			}
		},
		login: async (_, { eid, password }, context) => {
			const member = await Member.findOne({ eid: eid });
			if (!member) {
				throw new Error("User not regsistered");
			}

			const isEqual = await bcrypt.compare(password, member.password);
			if (!isEqual) {
				throw new Error("Password is incorrect");
			}
			const token = jwt.sign(
				{ member: member },
				"supercalifragilisticexpialidocious",
				{ expiresIn: "1h" }
			);

			return {
				member: transformMember(member),
				token: token,
				tokenExpiration: 1,
			};
		},
		transactions: async () => {
			try {
				const transactions = await Transaction.find();
				return transactions.map((transaction) => {
					return transfromTransaction(transaction);
				});
			} catch (err) {
				throw err;
			}
		},
		// Fetch a single transaction from the collection
		singleTransaction: async (transactionID) => {
			try {
				const transaction = await Transaction.findById(transactionID);
				return transfromTransaction(transaction);
			} catch (err) {
				throw err;
			}
		},
		tools: async () => {
			try {
				const tools = await Tool.find();
				return tools.map((tool) => {
					return transformTool(tool);
				});
			} catch (err) {
				throw err;
			}
		},
		singleTool: async (toolID) => {
			// For coworking session
		},
	},
	Mutation: {
		authTest: authenticated(
			validateRole("Staff")(async (root, args, context) => {
				try {
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
						await Member.update(
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
					createdTransaction = transfromTransaction(result);

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
		createMember: async (root, args) => {
			try {
				console.log(args);
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
		createTransaction: authenticated(
			validateRole("Staff")(async (root, args, context) => {
				console.log(args);
				try {
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
						await Member.update(
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
					createdTransaction = transfromTransaction(result);

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
		createTool: async (root, args) => {
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
		},

		// toolRequest: async ({ group }, req) => {
		// 	if (!req.isAuth) {
		// 		throw new Error("Not authenticated. Please log in");
		// 	}
		// },

		//___ Mutations ____
		toolCheckout: async (root, args, req) => {
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
	Subscription: {},
};
