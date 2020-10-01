//--------------------------------------------
// STUDENT REQUESTS
//--------------------------------------------

import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Request } from "../../../components";
import { UserContext } from "../../../context/user-context";
import { API, graphqlOperation } from "aws-amplify";
import {
	getOutstandingTransactions,
	listTransactions,
	getTransactionByStatus,
} from "../../../graphql-optimized/queries";
import {
	updateTransaction,
	createTransaction,
	createNewTransaction,
} from "../../../graphql-optimized/mutations";
import { onCreateTransaction, onUpdateTransaction } from "../../../graphql-optimized/subscriptions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./StudentRequests.module.css";

const StudentRequests = () => {
	//--------------------------------------------
	// STATE MANAGEMENT
	//--------------------------------------------

	const [requests, setRequests] = useState([]);
	const [empty, setEmpty] = useState(true);

	const user = useContext(UserContext);

	let subscription;
	let updates;

	useEffect(() => {
		if (!user) return;

		console.log(user);
		fetchOutstandingTransactions().then((results) => {
			setRequests(results);
		});
	}, [user]);

	useEffect(() => {
		console.log("TEST 1");
		subscribeToTransactions();
		subscribeToUpdates();
		setEmpty(!requests.length);

		return () => {
			console.log("TEST 2");
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
		// TODO Add byTransactionStatus to query

		let results = await API.graphql(
			graphqlOperation(getTransactionByStatus, {
				transactionStatus: "Processing",
			})
		).catch((err) => console.log(err));

		console.log(results);
		//--------------------------------------------
		// Takes the information and uses it for the state
		// TODO Requests should be sorted in the opposite direction
		// TODO oldest first
		//--------------------------------------------
		if (results?.data.getTransactionByStatus.items.length) {
			setEmpty(false);
			return results.data.getTransactionByStatus.items.sort((a, b) => {
				return new Date(a.updatedAt) - new Date(b.updatedAt);
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
				let results = [...requests, request.value.data.onCreateTransaction];
				setRequests(results);
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

	return (
		<div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
			{!empty
				? requests !== "empty"
					? requests.map((request, index) => (
							<Request
								id={request.id}
								requests={request.requests}
								transactionType={request.transactionType}
								user={request.user}
								staffUserId={user.eid}
								date={request.updatedAt}
								key={request.id}
								workstation={request.user?.workstation?.name}
								comment={request.transactionComment}
								removeFromState={removeRequest}
							/>
					  ))
					: "No New Requests"
				: "Loading..."}
		</div>
	);
};

export default StudentRequests;
