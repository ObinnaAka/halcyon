import React, { useState, useEffect, useLayoutEffect } from "react";
import { Request } from "../../../components";
import { API, graphqlOperation } from "aws-amplify";
import { getOutstandingTransactions, listTransactions } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTransaction } from "../../../graphql/subscriptions";

const StudentRequests = () => {
	const [requests, setRequests] = useState(["loading"]);
	const [subscribe, setSubscribe] = useState(null);

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

	const fetchOutstandingTransactions = async () => {
		let results = await API.graphql({
			query: listTransactions,
			variables: { filter: { status: { eq: "Processing" } } },
		});
		setRequests(
			results.data.listTransactions.items.sort((a, b) => {
				return new Date(b.updatedAt) - new Date(a.updatedAt);
			})
		);
		return results.data.listTransactions.items;
	};

	const subscribeToTransactions = async () => {
		let subscription = API.graphql(graphqlOperation(onCreateTransaction));
		subscription.subscribe({
			next: (request) => {
				console.log(requests);
				let results = [request.value.data.onCreateTransaction, ...requests];
				setRequests(results);
				console.log(requests);
				console.log(results);
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
								date={request.updatedAt}
								key={index}
								workstation={request.member.workstation}
								comment={request.comment}
							/>
					  ))
					: "Loading..."
				: "No New Requests"}
		</div>
	);
};

export default StudentRequests;
