const Member = require("../../models/member");
const Transaction = require("../../models/transaction");
const Tool = require("../../models/tool");
const Training = require("../../models/training");

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

	//_____ Mutations _______
	// Create a new transaction and add it to the transaction collection
	createTransaction: async (args, req) => {
		
		// Authenticate user from is-auth
		if (!req.isAuth) {
			throw new Error("Not Authenticated");
		}
		try {
			const transaction = new Transaction({
				transactionType: args.transactionInput.transactionType,
				staffMember: args.transactionInput.staffMember,
				member: req.memberId,
				tool: args.transactionInput.tool,
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
				// console.log("success")
				member.signinStatus = true;

				//await Member.findByIdAndUpdate(transaction.member, {signinStatus:true}, {new:true});

				// The transaction fetches the member object attached to it before it has
				// been updated. This is there to make sure the changes are reflected in the
				// member query. It is not necessary since it is already changed in the database
				// await member.save();
			} else if (transaction.transactionType === "Sign-out") {
				member.signinStatus = false;
				// await member.save();
			} else if (transaction.transactionType === "Tool Check-in") {
				const tool = await Tool.findById(transaction.tool);
				tool.currentHolder = null;
				tool.status = 1;
				await tool.save();
			} else if (transaction.transactionType === "Tool Check-out") {
				const tool = await Tool.findById(transaction.tool);
				tool.currentHolder = member;
				tool.status = 2;
				await tool.save();
			} else if (transaction.transactionType === "Advanced-3D-Print") {
			} else if (transaction.transactionType === "Training") {
			} else if (transaction.transactionType === "Conduct-Update") {
			}
			// Not sure of this last one
			else if (transaction.transactionType === "Cleaning") {
			} else {
				console.log("test");
			}

			// We create "createdTransaction" so that we can simultaneously access the
			// Transaction and its args (member, staffmember, tool)
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
};
