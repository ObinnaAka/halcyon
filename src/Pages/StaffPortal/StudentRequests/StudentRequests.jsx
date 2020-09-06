//--------------------------------------------
// STUDENT REQUESTS
//--------------------------------------------

import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { Request } from "../../../components";
import { MemberContext } from "../../../context/member-context";
import { API, graphqlOperation } from "aws-amplify";
import {
	getOutstandingTransactions,
	listTransactions,
	getTransactionByStatus,
} from "../../../graphql-optimized/queries";
import { updateTransaction, createTransaction } from "../../../graphql-optimized/mutations";
import { onCreateTransaction, onUpdateTransaction } from "../../../graphql-optimized/subscriptions";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./StudentRequests.module.css";

const StudentRequests = () => {
	//--------------------------------------------
	// STATE MANAGEMENT
	//--------------------------------------------

	const [requests, setRequests] = useState([]);
	const [empty, setEmpty] = useState(true);
	const [initialTransactionState, setInitialTransactionState] = useState({});

	const member = useContext(MemberContext);

	let subscription;
	let updates;

	useEffect(() => {
		if (!member) return;

		console.log(member);
		fetchOutstandingTransactions().then((results) => {
			setRequests(results);
		});
	}, [member]);

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

	useEffect(() => {
		if (member) {
			setInitialTransactionState({
				transactionType: "Test",
				memberId: member.eid,
				staffMemberId: member.eid,
				transactionStatus: "Processing",
				transactionComment: "Test",
				requests: ["Hammer", "Test"],
			});
		}
	}, [member]);
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
		// console.log("TEST 3");

		subscription = API.graphql(graphqlOperation(onCreateTransaction)).subscribe({
			next: (request) => {
				let results = [...requests, request.value.data.onCreateTransaction];
				setRequests(results);
				console.log("TEST 3");
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
					console.log("TEST 4");
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

	const stateTester = async () => {
		let res = await API.graphql({
			query: createTransaction,
			variables: { input: initialTransactionState },
		});
		console.log(res);
	};

	return (
		<div className="left-view">
			<button onClick={stateTester}>Add Request</button>

			{!empty ? (
				requests !== "empty" ? (
					<TransitionGroup style={{ width: "100%" }} className="todo-list">
						{requests.map((request, index) => (
							<CSSTransition key={index} timeout={500} classNames="itemreq">
								<Request
									id={request.id}
									requests={request.requests}
									transactionType={request.transactionType}
									member={request.member}
									staffMemberId={member.eid}
									date={request.updatedAt}
									key={request.id}
									workstation={request.member.workstation?.name}
									comment={request.transactionComment}
									removeFromState={removeRequest}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				) : (
					"No New Requests"
				)
			) : (
				"Loading..."
			)}
		</div>
	);
};

export default StudentRequests;
