const bcrypt = require("bcryptjs");
const Member = require("../../models/member");
const Transaction = require("../../models/transaction");
const Tool = require("../../models/tool");
const Training = require("../../models/training");

// Might want to write as async await funnctions
// But it works
module.exports = {
	members: () => {
		return Member.find()
			.then((members) => {
				return members.map((member) => {
					return {
						...member._doc,
                        _id: member._doc._id.toString(),
						createdAt: new Date(member._doc.createdAt).toISOString(),
						updatedAt: new Date(member._doc.updatedAt).toISOString(),
					};
				});
			})
			.catch((err) => {
				throw err;
			});
	},
	transactions: () => {
		return Transaction.find()
			.then((transactions) => {
				return transactions.map((transaction) => {
					return {
						...transaction._doc,
						_id: transaction.id,
						createdAt: new Date(transaction._doc.createdAt).toISOString(),
						updatedAt: new Date(transaction._doc.updatedAt).toISOString(),
					};
				});
			})
			.catch((err) => {
				throw err;
			});
	},
	createMember: (args) => {
		return Member.findOne({ eid: args.memberInput.eid })
			.then((member) => {
				if (member) {
					throw new Error("User already registered");
				}

				return bcrypt.hash(args.memberInput.password, 12);
			})
			.then((hashedPassword) => {
				const member = new Member({
					eid: args.memberInput.eid,
					firstName: args.memberInput.firstName,
					lastName: args.memberInput.lastName,
					password: hashedPassword,
					email: args.memberInput.email,
					phone: args.memberInput.phone,
					memberType: args.memberInput.memberType,
				});
				return member.save();
			})
			.then((result) => {
				return { ...result._doc, _id: result.id, password: null };
			})
			.catch((err) => {
				throw err;
			});
	},
	createTransaction: (args) => {
		const transaction = new Transaction({
			transactionType: args.transactionInput.transactionType,
			staffMember: args.transactionInput.staffMember,
			member: args.transactionInput.member,
			tool: args.transactionInput.tool,
			training: args.transactionInput.training,
			status: args.transactionInput.status,
			comment: args.transactionInput.comment,
		});
		
		// Here is where I build out the logic/routing for the transactions
		if (transaction.transactionType === "Sign-in") {
			
		}
		else if (transaction.transactionType === "Sign-out") {
			
		}
		else if (transaction.transactionType === "Check-in") {
			
		}
		else if (transaction.transactionType === "Check-out") {
			
		}
		else if (transaction.transactionType === "Advanced-3D-Print") {
			
		}
		else if (transaction.transactionType === "Training") {
			
		}
		else if (transaction.transactionType === "Conduct-Update") {
			
		}
		// Not sure of this last one
		else if (transaction.transactionType === "Cleaning") {
			
		}


		

		// Needs to be asrynchronous to deal with multiple inputs
		let createdTransaction;
		return transaction
			.save()
			.then((result) => {
				createdTransaction = {
					...result._doc,
				};
				return Member.findById(createdTransaction.member);
			})
			.then((member) => {
				if (!member) {
					throw new Error("User not found");
				}
				member.transactionRecord.push(createdTransaction);
				return member.save();
			})
			.then((result) => {
				return createdTransaction;
			})
			.catch();
	},
};
