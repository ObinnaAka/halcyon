import React, { useState } from "react";
import { Request } from "../../../components";
// import AuthContext from "../../../context/auth-context";
import gql from "graphql-tag";

import { useSubscription, useQuery } from "@apollo/react-hooks";
// import style from "./StudentRequests.module.css";

const OUTSTANDING_TRANSACTION = gql`
	query {
		outstandingTransactions {
			_id
			transactionType
			member {
				firstName
				lastName
			}
			tools {
				name
			}
			comment
			updatedAt
		}
	}
`;

const REQUESTS_SUBSCRIPTION = gql`
	subscription {
		onNewRequest {
			_id
			transactionType
			member {
				firstName
				lastName
			}
			tools {
				name
			}
			comment
			updatedAt
		}
	}
`;

const StudentRequests = (Apollo) => {
	const [requests, setRequests] = useState([]);
	//____ Context____
	// const { auth, setAuth } = useContext(AuthContext);

	//____ Apollo____
	// const client = Apollo.client;

	// const {
	// loading,
	// subscriptionData
	// } =
	useSubscription(REQUESTS_SUBSCRIPTION, {
		onSubscriptionData: ({ subscriptionData }) => {
			console.log(subscriptionData);
			if (subscriptionData) {
				let newRequest = [subscriptionData.data.onNewRequest];
				let newRequests = newRequest.concat(requests);
				setRequests(newRequests);
			} else {
				return <div className="page">No new requests</div>;
			}
		},
	});

	const { loading: queryLoading, error: queryError } = useQuery(
		OUTSTANDING_TRANSACTION,
		{
			variables: {},
			onCompleted: (data) => {
				console.log(data);
				if (data) {
					const resArray = Object.values(data.outstandingTransactions);
					setRequests(resArray);
				} else {
					return <div className="page">No new requests</div>;
				}
			},
		}
	);

	if (queryLoading) return <div className="page">Loading ...</div>;
	if (queryError) return <div className="page">{`Error! ${queryError}`}</div>;

	return (
		<div className="left-view">
			{requests.map((request, index) => (
				<Request
					items={request.tools}
					type={request.transactionType}
					member={request.member}
					date={request.updatedAt}
					key={index}
					workstation="DB-12"
					comment={request.comment}
				/>
			))}
		</div>
	);
};

export default StudentRequests;
