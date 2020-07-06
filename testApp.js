const express = require("express");
const mongoose = require("mongoose");
const { tradeTokenForMember, authenticated } = require("./middleware/is-auth");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

const http = require("http");

// const GRAPHQL_ENDPOINT = "http://localhost:8000/graphql";

const typeDefs = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers/index");

const server = new ApolloServer({
	typeDefs,
	resolvers,
	// subscriptions: {
	// 	path: "/graphql",
	// },
	context: async ({ req }) => {
		let token = null;
		let currentMember = null;

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
		};
	},
});

const app = express();

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);
server.applyMiddleware({ app });

mongoose.Promise = global.Promise;
mongoose
	.connect(`${process.env.AZURE}`)
	.then(() => {
		console.log("DB connected");
	})
	.catch((error) => {
		console.log(`${process.env.AZURE}`);
		console.log(error);
	});

const PORT = 8000;
httpServer.listen(PORT, () => {
	console.log(
		`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
	);
	console.log(
		`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
	);
});
