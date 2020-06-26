const express = require("express");
const bodyParser = require("body-parser");
const graphQlHttp = require("express-graphql");
const mongoose = require("mongoose");
const { tradeTokenForMember, authenticated } = require("./middleware/is-auth");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./graphql/schema/index");
const resolvers = require("./graphql/resolvers/index");

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async ({ req }) => {
		let authToken = null;
		let currentMember = null;

		try {
			authToken = req.headers.authorization;

			if (authToken) {
				// I'm not sure but according to the tutorial I think
				// we pass in the token to authenticated helper module
				// https://medium.com/the-guild/authentication-and-authorization-in-graphql-and-how-graphql-modules-can-help-fadc1ee5b0c2
				currentMember = await tradeTokenForMember(authToken);
			}
		} catch (err) {
			console.warn(`Unable to authenticate using auth token: ${authToken}`);
		}
		return {
			authToken,
			currentMember,
		};
	},
});

const app = express();

// app.use(authenticated);

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
	if (req.method === "OPTIONS") {
		return res.sendStatus(200);
	}
	next();
});

server.applyMiddleware({ app });

mongoose.Promise = global.Promise;
mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-k13rp.azure.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => console.log("DB connected"))
	.catch((error) => console.log(error));

const port = 8000;
app.listen(port, () => {
	console.log(
		`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
	);
});
