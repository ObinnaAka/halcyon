import React, { useState, useEffect, useContext } from "react";
import { Member } from "../../../Classes/Member";
import { Request } from "../../../components";
import AuthContext from "../../../context/auth-context";
import gql from "graphql-tag";

import { useSubscription } from "@apollo/react-hooks";
// import style from "./StudentRequests.module.css";

const StudentRequests = (Apollo) => {
	const [requests, setRequests] = useState([]);
	//____ Context____
	const { auth, setAuth } = useContext(AuthContext);

	//____ Apollo____
	const client = Apollo.client;

	// TODO This should be replaced with "useQuery" to fetch data once the page loads
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
							comment
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
		subscription onNewRequest {
			newTransaction {
				_id
				transactionType
				comment
			}
		}
	`;

	// client.subscribeToMore({});

	const { data, loading } = useSubscription(REQUESTS_SUBSCRIPTION);

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
					comment={request.comment}
				/>
			))}
		</div>
	);
};

export default StudentRequests;
