const mongoose = require("mongoose");
const { tradeTokenForMember, authenticated } = require("./middleware/is-auth");
const {
	DynamoDBConnectionManager,
	DynamoDBEventProcessor,
	DynamoDBEventStore,
	DynamoDBSubscriptionManager,
	PubSub,
	Server,
} = require("aws-lambda-graphql");

const typeDefs = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers/index");

/*
   By default event stores uses TTL of 2 hours on every event. 
   This can be changed by `ttl` option in DynamoDBEventStore.
   ttl accepts a number in seconds (default is 7200 seconds) or
   false to turn it off.
  
   It's your responsibility to set up TTL on your events table.
  */

const eventStore = new DynamoDBEventStore();
const eventProcessor = new DynamoDBEventProcessor();
const subscriptionManager = new DynamoDBSubscriptionManager();
const connectionManager = new DynamoDBConnectionManager({
	subscriptionManager,
});
const pubSub = new PubSub({ eventStore });

const server = new Server({
	// accepts all the apollo-server-lambda options and adds few extra options
	// provided by this package
	connectionManager,
	eventProcessor,
	resolvers,
	subscriptionManager,
	typeDefs,
	playground: {
		endpoint: "/graphiql",
	},
	context: async ({ req }) => {
		let token = null;
		let currentMember = null;
		console.log("Set token for context");
		try {
			token = req.headers.authorization;

			if (token) {
				// I'm not sure but according to the tutorial I think
				// we pass in the token to authenticated helper module
				// https://medium.com/the-guild/authentication-and-authorization-in-graphql-and-how-graphql-modules-can-help-fadc1ee5b0c2
				currentMember = await tradeTokenForMember(token);
			}
		} catch (err) {
			// console.log(err);
			console.warn(`Unable to authenticate using auth token: ${token}`);
		}
		return {
			token,
			currentMember,
			pubSub,
		};
	},
});

mongoose.Promise = global.Promise;
mongoose
	.connect(`${process.env.AZURE}`, { useNewUrlParser: true })
	.then(() => {
		console.log("DB connected");
	})
	.catch((error) => {
		console.log("Database Connection Error");
		console.log(process.env.AZURE);
		console.log(error);
	});

module.exports.handleWebSocket = server.createWebSocketHandler();
module.exports.handleHTTP = server.createHttpHandler();
// this creates dynamodb event handler so we can send messages to subscribed clients
module.exports.handleEvents = server.createEventHandler();

// const server = new ApolloServer({
// 	typeDefs,
// 	resolvers,
// playground: {
// 	endpoint: "/graphiql",
// },
// context: async ({ req }) => {
// 	let token = null;
// 	let currentMember = null;
// 	console.log("here");
// 	try {
// 		token = req.headers.authorization;

// 		if (token) {
// 			// I'm not sure but according to the tutorial I think
// 			// we pass in the token to authenticated helper module
// 			// https://medium.com/the-guild/authentication-and-authorization-in-graphql-and-how-graphql-modules-can-help-fadc1ee5b0c2
// 			currentMember = await tradeTokenForMember(token);
// 		}
// 	} catch (err) {
// 		// console.log(err);
// 		console.warn(`Unable to authenticate using auth token: ${token}`);
// 	}
// 	return {
// 		token,
// 		currentMember,
// 	};
// },
// });

// exports.graphqlHandler = server.createHandler({
// 	cors: {
// 		origin: "*",
// 		credentials: false,
// 	},
// });
