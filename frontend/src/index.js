import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import AuthContext from "./context/auth-context";

import gql from "graphql-tag";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, withApollo } from "react-apollo";

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const httpLink = createHttpLink({
	uri: "http://localhost:8000/graphql",
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	credentials: "same-origin",
	cache: new InMemoryCache(),
});

const AppWithClient = withApollo(App);

ReactDOM.render(
	<ApolloProvider client={client}>
		<React.StrictMode>
			<AppWithClient />
		</React.StrictMode>
	</ApolloProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
