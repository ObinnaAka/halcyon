import React, { useState, useLayoutEffect } from "react";
import { Request } from "../../../components";
import { API, graphqlOperation } from "aws-amplify";
import { getOutstandingTransactions, listTransactions } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTransaction } from "../../../graphql/subscriptions";

const StudentRequests = () => {
	const [requests, setRequests] = useState(["loading"]);

	useLayoutEffect(() => {
		fetchOutstandingTransactions();
		subscribeToTransactions();
	}, []);

	const fetchOutstandingTransactions = async () => {
		let results = await API.graphql({
			query: listTransactions,
			variables: { filter: { status: { eq: "Processing" } } },
		});
		console.log(results);
		setRequests(results.data.listTransactions.items);
	};

	const subscribeToTransactions = async () => {
		console.log(requests);
		let results = API.graphql(graphqlOperation(onCreateTransaction)).subscribe({
			next: (request) => {
				setRequests(requests.unshift(request.value.data.onCreateTransaction));
				// console.log(requests);
			},
		});
	};

	return (
		<div className="left-view">
			{requests.length
				? requests[0] != "loading"
					? requests.map((request, index) => (
							<Request
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
