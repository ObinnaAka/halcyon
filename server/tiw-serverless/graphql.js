const express = require("express");
const mongoose = require("mongoose");
const { tradeTokenForMember, authenticated } = require("./middleware/is-auth");
const { ApolloServer } = require("apollo-server-lambda");

const http = require("http");

const typeDefs = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers/index");

const server = new ApolloServer({
	typeDefs,
	resolvers,
	playground: {
		endpoint: "/graphiql",
	},
	context: async ({ req }) => {
		let token = null;
		let currentMember = null;
		console.log("here");
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

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: "*",
		credentials: false,
	},
});

mongoose.Promise = global.Promise;
mongoose
	.connect(`${process.env.AZURE}`, { useNewUrlParser: true })
	.then(() => {
		console.log("DB connected");
	})
	.catch((error) => {
		console.log("here");
		console.log(process.env.AZURE);
		console.log(error);
	});
