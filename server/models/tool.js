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
	// This will replaced with the object ID
	// barcode: {
	//     type: String,
	// },

	// Tool Status: either 0, 1, 2
	// default value is .
	// 0 : Cleaned and checked in
	// 1 : Not cleaned but checked in
	// 2 : Checked out
	// 3 : In Repair
	status: {
		type: Number,
		default: 0,
	},
	currentUser: {
		type: Schema.Types.ObjectId,
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
});

toolSchema.plugin(autopopulate);
module.exports = mongoose.model("Tool", toolSchema);
