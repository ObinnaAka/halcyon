import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../../context/auth-context";
import { Request } from "../../../components";
import { API } from "aws-amplify";
import { getOutstandingTransactions, listTransactions } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTransaction } from "../../../graphql/subscriptions";

const StudentRequests = () => {
	const auth = useContext(AuthContext);
	const [requests, setRequests] = useState(["loading"]);

	useEffect(() => {
		fetchOutstandingTransactions();
	}, []);

	const fetchOutstandingTransactions = async () => {
		let results = await API.graphql({
			query: listTransactions,
			variables: { filter: { status: { eq: "Processing" } } },
		});
		console.log(results[0].id);
		setRequests(results.data.listTransactions.items);
	};

	console.log(auth);
	return (
		<div className="left-view">
			{requests.length
				? requests[0] != "loading"
					? requests.map((request, index) => (
							<Request
								id={request.id}
								items={request.tools}
								requestType={request.transactionType}
								member={request.member}
								staffMemberId={auth}
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
