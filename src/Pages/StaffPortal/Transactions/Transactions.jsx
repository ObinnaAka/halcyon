import React, { useState, useEffect, useContext } from "react";
import { MemberContext } from "../../../context/member-context";

import { Transaction } from "../../../components";
import { API, graphqlOperation } from "aws-amplify";
import { getTransactionByDate } from "../../../graphql-optimized/queries";

const Transactions = () => {
	//--------------------------------------------
	// STATE MANAGEMENT
	//--------------------------------------------

	const [transactions, setTransactions] = useState([]);
	const [empty, setEmpty] = useState(true);

	const member = useContext(MemberContext);

	useEffect(() => {
		fetchTransactions().then((results) => {
			setTransactions(results);
		});
	}, []);

	//--------------------------------------------
	// TALKING TO SERVERS
	//--------------------------------------------

	//--------------------------------------------
	// Get initial transactions that are "Processing"
	//--------------------------------------------
	const fetchTransactions = async () => {
		//--------------------------------------------
		// Pull information from the database
		//--------------------------------------------
		// TODO Only show transactions from today
		let results = await API.graphql(graphqlOperation(getTransactionByDate)).catch((err) =>
			console.log(err)
		);
		//--------------------------------------------
		// Takes the information and uses it for the state
		// TODO Requests should be sorted in the opposite direction
		// TODO oldest first
		//--------------------------------------------

		if (results?.data.getTransactionByDate.items?.length) {
			setEmpty(false);
			return results?.data.getTransactionByDate?.items.sort((a, b) => {
				return new Date(b.createdAt) - new Date(a.createdAt);
			});
		} else {
			setEmpty(true);
			return [];
		}
	};

	return (
		<div className="left-view">
			{transactions.length
				? transactions[0] !== "loading"
					? transactions.map((request, index) => (
							<Transaction
								id={request.id}
								tools={request.tools}
								requests={request.requests}
								materials={request.materials}
								transactionType={request.transactionType}
								member={request.member}
								date={request.updatedAt}
								key={index}
								transactionComment={request.transactionComment}
							/>
					  ))
					: "Loading..."
				: "No New transactions"}
		</div>
	);
};

export default Transactions;
