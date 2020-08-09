//--------------------------------------------
// STUDENT REQUESTS
//--------------------------------------------

import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Request } from "../../../components";
import { AuthContext } from "../../../context/auth-context";
import { API, graphqlOperation } from "aws-amplify";
import { getOutstandingTransactions, listTransactions } from "../../../graphql/queries";
import { updateTransaction, createTransaction } from "../../../graphql/mutations";
import { onCreateTransaction, onUpdateTransaction } from "../../../graphql/subscriptions";

const StudentRequests = () => {
	//--------------------------------------------
	// STATE MANAGEMENT
	//--------------------------------------------

	const [requests, setRequests] = useState([]);
	const [empty, setEmpty] = useState(true);

	const auth = useContext(AuthContext);

	let subscription;
	let updates;

	useEffect(() => {
		fetchOutstandingTransactions().then((results) => {
			setRequests(results);
		});
	}, []);

	useEffect(() => {
		subscribeToTransactions();
		subscribeToUpdates();
		setEmpty(!requests.length);

		return () => {
			subscription.unsubscribe();
			updates.unsubscribe();
		};
	}, [requests]);

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
	//--------------------------------------------
	// Subscriptions!! Automatically refreshes when
	// something changes in the database.
	//--------------------------------------------

	const subscribeToTransactions = async () => {
		subscription = API.graphql(graphqlOperation(onCreateTransaction)).subscribe({
			next: (request) => {
				let results = [request.value.data.onCreateTransaction, ...requests];
				setRequests(results);
				console.log(request);
			},
			error: (error) => {
				console.warn(error);
			},
		});
	};

	const subscribeToUpdates = async () => {
		updates = API.graphql(graphqlOperation(onUpdateTransaction)).subscribe({
			next: (request) => {
				if (request.value.data.onUpdateTransaction.transactionStatus === "Finished") {
					let results = requests.filter(
						(value, index, arr) => value.id !== request.value.data.onUpdateTransaction.id
					);
					setRequests(results);
				}
			},
			error: (error) => {
				console.warn(error);
			},
		});
	};

	const removeRequest = (transaction) => {
		setRequests(requests.filter((value, index, arr) => value.id !== transaction));
	};

	const initialTransactionState = {
		transactionType: "Test",
		memberId: auth,
		staffMemberId: auth,
		transactionStatus: "Processing",
		transactionComment: "Test",
		tools: ["77379484-de54-482e-8077-f797616f47e9"],
	};

	const stateTester = async () => {
		let res = await API.graphql({
			query: createTransaction,
			variables: { input: initialTransactionState },
		});
		console.log(res);
	};

	return (
		<div className="left-view">
			<input type="button" onClick={stateTester} value="Add Request" />
			{!empty
				? requests !== "empty"
					? requests.map((request) => (
							<Request
								id={request.id}
								tools={request.tools}
								transactionType={request.transactionType}
								member={request.member}
								staffMemberId={auth}
								date={request.updatedAt}
								key={request.id}
								workstation={request.member.workstation}
								comment={request.comment}
								removeFromState={removeRequest}
							/>
					  ))
					: "No New Requests"
				: "Loading..."}
		</div>
	);
};

export default StudentRequests;
