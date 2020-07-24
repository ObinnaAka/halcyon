import React, { useState, useEffect } from "react";
import { Request } from "../../../components";
import { API } from "aws-amplify";
import { getOutstandingTransactions, listTransactions } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTransaction } from "../../../graphql/subscriptions";

const StudentRequests = () => {
	const [requests, setRequests] = useState(["loading"]);

	useEffect(() => {
		fetchOutstandingTransactions();
		// return () => {
		// 	cleanup
		// }
	}, []);

	const fetchOutstandingTransactions = async () => {
		let results = await API.graphql({
			query: listTransactions,
			variables: { filter: { status: { eq: "Processing" } } },
		});

		setRequests(results.data.listTransactions.items);
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
