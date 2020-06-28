import React, { useState, useEffect, useContext } from "react";
import { Member } from "../../../Classes/Member";
import { Request } from "../../../components";
import AuthContext from "../../../context/auth-context";
import RequestContext from "../../../context/request-context";
import gql from "graphql-tag";

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
								status
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
					const resArray = Object.values(res);
					console.log(resArray[1].tools);
					// results = resArray.map();
					setRequests(resArray);
				})
				.catch((err) => {
					throw err;
				});
		}
	});

	// These are for testing
	let items = ["Chicken Salad", "Lemon Greens", "Chicken Fetters"];
	let member = new Member("Obinna", "Akahara");

	return (
		<div className="left-view">
			{requests.map((request, index) => (
				<Request
					items={
						["Test 1", "Test 2", "Test 3"]
						// request.tools.map((tool) => {
						// return tool.name;})
					}
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
