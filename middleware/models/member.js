const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const Schema = mongoose.Schema;

const memberSchema = new Schema(
	{
		eid: {
			type: String,
			required: true,
		},
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		password: {
			type: String,
		},
		phone: {
			type: String,
			default: null,
		},
		signinStatus: {
			type: Boolean,
			default: false,
		},
		email: {
			type: String,
			required: true,
		},
		trainingRecord: [
			{
				type: Schema.Types.ObjectId,
				ref: "Tool",
				autopopulate: true,
			},
		],
		itemRecord: [
			{
				type: Schema.Types.ObjectId,
				ref: "Tool",
				autopopulate: true,
				// default: [],
			},
		],
		conductRecord: [
			{
				type: String,
				// default: [],
			},
		],
		// either 0, 1, 2, 3
		// default value is 1.
		// 0 : Member is outstanding (has been a positive member of the community)
		// 1 : Normal
		// 2 : Probation (Member has strikes on their account)
		// 3 : Member is banned
		conductStatus: {
			type: Number,
			default: 1,
		},
		transactionRecord: [
			{
				type: Schema.Types.ObjectId,
				ref: "Transaction",
				autopopulate: true,
				//default: null,
			},
		],
		bevoCard: {
			type: String,
			default: null,
		},
		memberType: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
memberSchema.plugin(autopopulate);

module.exports = mongoose.model("Member", memberSchema);
