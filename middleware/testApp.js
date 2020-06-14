const express = require("express");
const bodyParser = require("body-parser");
const graphQlHttp = require("express-graphql");
const mongoose = require("mongoose");
const isAuth = require('./middleware/is-auth')

const graphQlSchema = require("./graphql/schema/index");
const grapgQlResolvers = require("./graphql/resolvers/index");

const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
	"/graphql",
	graphQlHttp({
		schema: graphQlSchema,
		rootValue: grapgQlResolvers,
		graphiql: true,
	})
);

mongoose
	.connect(
		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-k13rp.azure.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
		{ useNewUrlParser: true }
	)
	.then(app.listen(3000))
	.catch((err) => {
		console.log(err);
	});
