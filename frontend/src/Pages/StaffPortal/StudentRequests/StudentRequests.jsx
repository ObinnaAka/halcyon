//--------------------------------------------
// STUDENT REQUESTS
//--------------------------------------------

import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Request } from "../../../components";
import { AuthContext } from "../../../context/auth-context";
import { API, graphqlOperation } from "aws-amplify";
import { getOutstandingTransactions, listTransactions } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTransaction } from "../../../graphql/subscriptions";

const StudentRequests = () => {
	//--------------------------------------------
	// STATE MANAGEMENT
	//--------------------------------------------
	const [requests, setRequests] = useState(["loading"]);
	const [subscribe, setSubscribe] = useState(null);

	const { auth } = useContext(AuthContext);

	useLayoutEffect(() => {
		fetchOutstandingTransactions().then(() => setSubscribe(true));
	}, []);

	useEffect(() => {
		if (subscribe) {
			let subscription = subscribeToTransactions();
		}
		// return () => {
		// 	if (subscribe) {
		// 		subscription.unsubscribe();
		// 	}
		// };
	}, [subscribe]);

	//--------------------------------------------
	// TALKING TO SERVERS
	//--------------------------------------------

	//--------------------------------------------
	// Get initial requests that are "Processing"
	//--------------------------------------------

	const fetchOutstandingTransactions = async () => {
		//--------------------------------------------
		// Pull information from the database
		//--------------------------------------------
		let results = await API.graphql({
			query: listTransactions,
			variables: { filter: { transactionStatus: { eq: "Processing" } } },
		});

		//--------------------------------------------
		// Takes the information and uses it for the state
		// TODO Requests should be sorted in the opposite direction
		// TODO oldest first
		//--------------------------------------------
		setRequests(
			results.data.listTransactions.items.sort((a, b) => {
				return new Date(b.updatedAt) - new Date(a.updatedAt);
			})
		);
		console.log(results);
		// return results.data.listTransactions.items;
	};

	//--------------------------------------------
	// Subscriptions!! Automatically refreshes when
	// something changes in the database.
	//--------------------------------------------

	const subscribeToTransactions = async () => {
		let subscription = API.graphql(graphqlOperation(onCreateTransaction));

		subscription.subscribe({
			next: (request) => {
				let results = [request.value.data.onCreateTransaction, ...requests];
				setRequests(results);
			},
			error: (error) => {
				console.warn(error);
			},
		});
		return subscription;
	};
	const stateTester = () => {
		return;
	};

	return (
		<div className="left-view">
			<input type="button" onClick={stateTester} value="Add Request" />
			{requests.length
				? requests[0] != "loading"
					? requests.map((request, index) => (
							<Request
								id={request.id}
								items={request.tools}
								requestType={request.transactionType}
								member={request.member}
								staffMember={auth}
								date={request.updatedAt}
								key={index}
								workstation={request.member.workstation}
								comment={request.comment}
							/>
					  ))
					: "Loading..."
				: "No New Requests"}

			{/* { condition ?  ifConditionIsTrue : ifConditionIsFalse} */}
		</div>
	);
};

export default StudentRequests;
