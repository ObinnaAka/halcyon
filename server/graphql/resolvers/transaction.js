const Member = require("../../models/member");
const Transaction = require("../../models/transaction");
const Tool = require("../../models/tool");
const Training = require("../../models/training");
const { subscribe } = require("graphql");

const transfromTransaction = (transaction) => {
	return {
		...transaction._doc,
		_id: transaction.id,
		createdAt: new Date(transaction._doc.createdAt).toISOString(),
		updatedAt: new Date(transaction._doc.updatedAt).toISOString(),
	};
};

module.exports = {
	//_____ Queries _______
	// Fetch all transaction in transaction collection
	Query: {
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
	},
	//_____ Mutations _______
	// Create a new transaction and add it to the transaction collection
	Mutation: {
		createTransaction: async (args, req) => {
			// Authenticate user from is-auth
			if (!req.isAuth) {
				throw new Error("Not Authenticated");
			}
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
							console.log(doc);
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
							console.log(doc);
						}
					);
					await Member.update(
						{ _id: { $in: transaction.member } },
						{ $push: { itemRecord: { $each: transaction.tools } } },
						{ upsert: false },
						(err, doc) => {
							if (err) console.log(err);
							console.log(doc);
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
		},
	},
	Subscription: {},
};
