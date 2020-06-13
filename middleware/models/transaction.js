const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
	{
		transactionType: {
			type: String,
			required: true,
		},
		staffMember: {
			type: Schema.Types.ObjectId,
			ref: "Member",
		},
		member: {
			type: Schema.Types.ObjectId,
			ref: "Member",
			autopopulate: true,
			required: true,
		},
		tool: {
			type: Schema.Types.ObjectId,
			ref: "Tool",
			autopopulate: true,
		},
		training: {
			type: Schema.Types.ObjectId,
			ref: "Training",
			autopopulate: true,
		},

		// Status of process (e.g. 3-D Print (Started, Processing, Done))
		status: {
			type: Boolean,
			default: true,
		},
		comment: {
			type: String,
		},
	},
	{ timestamps: true }
);
transactionSchema.plugin(autopopulate);
module.exports = mongoose.model("Transaction", transactionSchema);
