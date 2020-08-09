import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../context/auth-context";

import { Transaction } from "../../../components";
import { API } from "aws-amplify";
import { listTransactions } from "../../../graphql/queries";

const Transactions = () => {
	//--------------------------------------------
	// STATE MANAGEMENT
	//--------------------------------------------

	const [transactions, setTransactions] = useState([]);
	const [empty, setEmpty] = useState(true);

	const auth = useContext(AuthContext);

	useEffect(() => {
		fetchOutstandingTransactions().then((results) => {
			setTransactions(results);
		});
	}, []);

	//--------------------------------------------
	// TALKING TO SERVERS
	//--------------------------------------------

	//--------------------------------------------
	// Get initial transactions that are "Processing"
	//--------------------------------------------
	const fetchOutstandingTransactions = async () => {
		//--------------------------------------------
		// Pull information from the database
		//--------------------------------------------
		let results = await API.graphql({
			query: listTransactions,
		});
		console.log(results);
		//--------------------------------------------
		// Takes the information and uses it for the state
		// TODO Requests should be sorted in the opposite direction
		// TODO oldest first
		//--------------------------------------------
		if (results.data.listTransactions.items.length) {
			setEmpty(false);
			return results.data.listTransactions.items.sort((a, b) => {
				return new Date(b.updatedAt) - new Date(a.updatedAt);
			});
		} else {
			setEmpty(true);
			return [];
		}
	};

	return (
		<div className="left-view">
			{transactions.length
				? transactions[0] != "loading"
					? transactions.map((request, index) => (
							<Transaction
								id={request.id}
								tools={request.tools}
								transactionType={request.transactionType}
								member={request.member}
								date={request.updatedAt}
								key={request.id}
								comment={request.comment}
							/>
					  ))
					: "Loading..."
				: "No New transactions"}
		</div>
	);
};

export default Transactions;
