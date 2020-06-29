import React, { useState, useEffect, useContext } from "react";
import { Member } from "../../../Classes/Member";
import { Request } from "../../../components";
import AuthContext from "../../../context/auth-context";
import RequestContext from "../../../context/request-context";
import gql from "graphql-tag";

import { ApolloConsumer } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
// import style from "./StudentRequests.module.css";

const StudentRequests = () => {
	const requestContext = useContext(RequestContext);
	const [requests, setRequests] = useState([]);
	//____ Context____
	const context = useContext(AuthContext);

	//____ Apollo____
	const SERVER_URL = "http://localhost:8000/graphql";

	const httpLink = new HttpLink({
		uri: SERVER_URL,
		headers: { authorization: `Token ${context.token}` },
	});

	const cache = new InMemoryCache();

	const client = new ApolloClient({
		link: httpLink,
		cache,
	});

	// ____ useEffect____
	useEffect(() => {
		if (requests.length === 0) {
			async function fetchOutstandingTransactions() {
				const OUTSTANDING_TRANSACTION = gql`
					query {
						outstandingTransactions {
							_id
							transactionType
							member {
								firstName
								lastName
							}
							tools {
								name
							}
							updatedAt
						}
					}
				`;

				const results = await client
					.query({
						query: OUTSTANDING_TRANSACTION,
					})
					.then((res) => {
						return res.data.outstandingTransactions;
					})
					.catch((err) => {
						console.log(err);
					});
				return results;
			}
			fetchOutstandingTransactions()
				.then((res) => {
					// ------------------------------------------------------------
					// "res" is an object containing a list of transactions
					// We need to convert the object into an array for processing
					// in react. Each object in the array also contains an array of
					// "Tool" objects
					// ------------------------------------------------------------
					const resArray = Object.values(res);
					setRequests(resArray);
				})
				.catch((err) => {
					throw err;
				});
		}
	});

	const REQUESTS_SUBSCRIPTION = gql`
		subscription onCommentAdded($repoFullName: String!) {
			commentAdded(repoFullName: $repoFullName) {
				id
				content
			}
		}
	`;

	// const {
	// 	data: { commentAdded },
	// 	loading,
	// } = useSubscription(REQUESTS_SUBSCRIPTION, { variables: { repoFullName } });

	// return <h4>New comment: {!loading && commentAdded.content}</h4>;

	// These are for testing
	let items = ["Chicken Salad", "Lemon Greens", "Chicken Fetters"];
	let member = new Member("Obinna", "Akahara");

	return (
		<div className="left-view">
			{requests.map((request, index) => (
				<Request
					items={request.tools}
					type={request.transactionType}
					member={request.member}
					date={request.updatedAt}
					key={index}
					workstation="DB-12"
				/>
			))}
		</div>
	);
};

export default StudentRequests;
