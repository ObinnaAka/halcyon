const mongoose = require("mongoose");
const autopopulate = require('mongoose-autopopulate')

const Schema = mongoose.Schema;

const toolSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    barcode: {
        type: String,
    },
    // either 0, 1, 2
    // default value is .
    // 0 : Cleaned and checked in
    // 1 : Not cleaned but checked in
    // 2 : Checked out
	
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
    }
})
toolSchema.plugin(autopopulate)
module.exports = mongoose.model('Tool', toolSchema);