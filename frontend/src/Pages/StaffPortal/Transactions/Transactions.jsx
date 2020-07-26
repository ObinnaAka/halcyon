import React, { useState, useEffect } from "react";
import { Request } from "../../../components";
import { API } from "aws-amplify";
import { getOutstandingTransactions, listTransactions } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTransaction } from "../../../graphql/subscriptions";

const Transactions = () => {
	const [transactions, setTransactions] = useState(["loading"]);

	useEffect(() => {
		fetchTransactions();
		// return () => {
		// 	cleanup
		// }
	}, []);

	const fetchTransactions = async () => {
		let results = await API.graphql({
			query: listTransactions,
			variables: { limit: 20 },
		});
		console.log(results);
		setTransactions(results.data.listTransactions.items);
	};

	return (
		<div className="left-view">
			{transactions.length
				? transactions[0] != "loading"
					? transactions.map((request, index) => (
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
				: "No New transactions"}
		</div>
	);
};

export default Transactions;
