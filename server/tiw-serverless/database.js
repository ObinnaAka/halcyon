// ---------------------------------------------------
// This function is for connecting to the database with
// the lambda functions. It initiates a connection to
// to the database and maintains it. It checks if there
// is already an active connection, and if not it tries
// to establish a new one.
// ---------------------------------------------------

// --------------------------------------------------------------------------------------------------
// Reference
// https://hackernoon.com/building-a-serverless-rest-api-with-node-js-and-mongodb-2e0ed0638f47
//
// https://blog.cloudboost.io/i-wish-i-knew-how-to-use-mongodb-connection-in-aws-lambda-f91cd2694ae5
// https://www.mongodb.com/blog/post/optimizing-aws-lambda-performance-with-mongodb-atlas-and-nodejs
// --------------------------------------------------------------------------------------------------

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
	if (isConnected) {
		console.log("=> using existing database connection");
		return Promise.resolve();
	}

	console.log("=> using new database connection");
	return mongoose
		.connect(`${process.env.AZURE}`, { useNewUrlParser: true })
		.then(() => {
			console.log("DB connected");
			return true;
		})
		.catch((error) => {
			console.log("Database Connection Error");
			console.log(process.env.AZURE);
			console.log(error);
			return false;
		});
};
