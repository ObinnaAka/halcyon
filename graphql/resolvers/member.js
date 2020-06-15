const bcrypt = require("bcryptjs");
const Member = require("../../models/member");
const Transaction = require("../../models/transaction");
const jwt = require("jsonwebtoken");

const transformMember = (member) => {
	return {
		...member._doc,
		_id: member.id,
		password: null,
		createdAt: new Date(member._doc.createdAt).toISOString(),
		updatedAt: new Date(member._doc.updatedAt).toISOString(),
	};
};

module.exports = {
	//_____ Queries _______
	// Fetch all members in members collection
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

	//_____ Mutations _______
	// Create new member and add it to the member collection
	createMember: async (args) => {
		try {
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
			throw err;
		}
	},
	login: async ({ eid, password }) => {
		const member = await Member.findOne({ eid: eid });
		if (!member) {
			throw new Error("User not regsistered");
		}
		const isEqual = await bcrypt.compare(password, member.password);
		if (!isEqual) {
			throw new Error("Password is incorrect");
		}
		const token = jwt.sign(
			{ memberId: ( member).id, eid: member.eid },
			"supercalifragilisticexpialidocious",
			{ expiresIn: "1h" }
		);
		return {
			memberID: member.id, token: token, tokenExpiration: 1
		}
	},
};
