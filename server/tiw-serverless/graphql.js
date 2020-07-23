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

const eventStore = new DynamoDBEventStore();
const eventProcessor = new DynamoDBEventProcessor();
const subscriptionManager = new DynamoDBSubscriptionManager();
const connectionManager = new DynamoDBConnectionManager({
	subscriptions: subscriptionManager,
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
		endpoint: "https://s6rbb7i554.execute-api.us-east-1.amazonaws.com/dev/graphiql",
		subscriptionEndpoint: "wss://skaq2dxiil.execute-api.us-east-1.amazonaws.com/dev",
	},
	context: async ({ event, lambdaContext }) => {
		let token = null;
		let currentMember = null;
		console.log("Set token for context");
		try {
			token = event.headers.Authorization;
			if (token) {
				// I'm not sure but according to the tutorial I think
				// we pass in the token to authenticated helper module
				// https://medium.com/the-guild/authentication-and-authorization-in-graphql-and-how-graphql-modules-can-help-fadc1ee5b0c2
				currentMember = await tradeTokenForMember(token);
			}
		} catch (err) {
			console.warn(`Unable to authenticate using auth token: ${token}`);
		}
		return {
			token,
			currentMember,
			pubSub,
			headers: event.headers,
			event,
			connectionManager,
			eventProcessor,
			subscriptionManager,
		};
	},
});

module.exports.handleWebSocket = server.createWebSocketHandler();
module.exports.handleHTTP = server.createHttpHandler({
	cors: {
		origin: "*",
		credentials: false,
	},
});
// this creates dynamodb event handler so we can send messages to subscribed clients
module.exports.handleEvents = server.createEventHandler();
