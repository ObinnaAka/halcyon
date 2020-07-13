const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const Schema = mongoose.Schema;

const toolSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
	},
	// Tool Status: either 0, 1, 2
	// default value is .
	// 0 : Cleaned and checked in
	// 1 : Not cleaned but checked in
	// 2 : Checked out
	// 3 : In Repair
	status: {
		type: String,
		default: "Cleaned and checked in",
	},
	currentUser: {
		type: Schema.Types.ObjectId,
		default: null,
		autopopulate: true,
	},
	currentWorkstation: {
		type: Schema.Types.ObjectId,
		autopopulate: true,
	},
	requiredTraining: [
		{
			type: Schema.Types.ObjectId,
			autopopulate: true,
		},
	],
	transactionRecord: [
		{
			type: Schema.Types.ObjectId,
			ref: "Transaction",
		},
	],
	toolType: {
		type: String,
		default: "Handheld",
	},
	inService: {
		type: Boolean,
		default: true,
	},
	isWorkstation: {
		type: Boolean,
		default: false,
	},
});

toolSchema.plugin(autopopulate);
module.exports = mongoose.model("Tool", toolSchema);
