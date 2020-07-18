const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const Schema = mongoose.Schema;

const trainingSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
});
trainingSchema.plugin(autopopulate);
module.exports = mongoose.model("Training", trainingSchema);
