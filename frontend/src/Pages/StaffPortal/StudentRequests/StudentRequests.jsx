import React, { useState, useEffect } from "react";
import { Request } from "../../../components";
import { API } from "aws-amplify";
import { getOutstandingTransactions } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTransaction } from "../../../graphql/subscriptions";

const StudentRequests = (Apollo) => {
	const [requests, setRequests] = useState([]);

	useEffect(() => {
		fetchOutstandingTransactions();
		// return () => {
		// 	cleanup
		// }
	}, []);

	const fetchOutstandingTransactions = async () => {
		let newRequests = await API.graphql({
			query: getOutstandingTransactions,
			variables: { input: "Processing" },
		});
		setRequests([newRequests]);
	};

	return (
		<div className="left-view">
			{requests.map((request, index) => (
				<Request
					items={request.tools}
					requestType={request.transactionType}
					member={request.member}
					date={request.updatedAt}
					key={index}
					workstation={request.member.workstation}
					comment={request.comment}
				/>
			))}
		</div>
	);
};

export default StudentRequests;
