import React, { useContext } from "react";
import AuthContext from "./auth-context";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default React.createContext({
	token: null,
	client: () => {
		const SERVER_URL = "http://localhost:8000/graphql";

		const httpLink = new HttpLink({
			uri: SERVER_URL,
			headers: { authorization: `Token ${this.token}` },
		});

		const cache = new InMemoryCache();

		const client = new ApolloClient({
			link: httpLink,
			cache,
		});
	},
});
