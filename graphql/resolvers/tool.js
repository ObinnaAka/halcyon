const Member = require("../../models/member");
const Tool = require("../../models/tool");
const Transaction = require("../../models/transaction");
const Training = require("../../models/training");
const { createTransaction } = require("./transaction");

const transformTool = (tool) => {
	return {
		...tool._doc,
		_id: member.id,
		currentWorkstation: currentWorkstation._doc.name,
	};
};

module.exports = {
	Query: {
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
		createTool: async (args) => {
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
		toolCheckout: async (args, req) => {
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
};
