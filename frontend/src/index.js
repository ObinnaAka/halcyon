import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider, withApollo } from "react-apollo";

const client = new ApolloClient({
	link: createHttpLink({ uri: "http://localhost:8000/graphql" }),
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
