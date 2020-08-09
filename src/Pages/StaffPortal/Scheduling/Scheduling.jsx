//--------------------------------------------
// SCHEDULING
//--------------------------------------------

import React, { useState, useEffect, useLayoutEffect } from "react";
import { Workstation } from "../../../components";
import { API, graphqlOperation } from "aws-amplify";
import { listTools } from "../../../graphql/queries";
import { updateTransaction } from "../../../graphql/mutations";
import { onCreateTool } from "../../../graphql/subscriptions";

const StudentRequests = () => {
	//--------------------------------------------
	// STATE MANAGEMENT
	//--------------------------------------------
	const [workstations, setWorkstations] = useState(["loading"]);
	const [subscribe, setSubscribe] = useState(null);

	useLayoutEffect(() => {
		fetchOutstandingTransactions().then(() => setSubscribe(true));
	}, []);

	useEffect(() => {
		if (subscribe) {
			let subscription = subscribeToTools();
		}
		// return () => {
		// 	if (subscribe) {
		// 		subscription.unsubscribe();
		// 	}
		// };
	}, [subscribe]);

	//--------------------------------------------
	// TALKING TO SERVERS
	//--------------------------------------------

	//--------------------------------------------
	// Get initial workstations that are "Processing"
	//--------------------------------------------

	const fetchOutstandingTransactions = async () => {
		//--------------------------------------------
		// Pull information from the database
		//--------------------------------------------
		let results = await API.graphql({
			query: listTools,
			variables: { filter: { toolType: { eq: "Workstation" }, status: { eq: "Cleaned" } } },
		});

		//--------------------------------------------
		// Takes the information and uses it for the state
		// TODO Requests should be sorted in the opposite direction
		// TODO oldest first
		//--------------------------------------------
		setWorkstations(
			results.data.listTools.items.sort((a, b) => {
				return new Date(b.name) - new Date(a.name);
			})
		);
		console.log(results);
		// return results.data.listTransactions.items;
	};

	//--------------------------------------------
	// Subscriptions!! Automatically refreshes when
	// something changes in the database.
	//--------------------------------------------

	const subscribeToTools = async () => {
		let subscription = API.graphql(graphqlOperation(onCreateTool));

		subscription.subscribe({
			next: (request) => {
				let results = [request.value.data.onCreateTool, ...workstations];
				results.sort((a, b) => {
					return new Date(b.name) - new Date(a.name);
				});
				setWorkstations(results);
			},
			error: (error) => {
				console.warn(error);
			},
		});
		return subscription;
	};
	const stateTester = () => {
		return;
	};

	return (
		<div className="left-view">
			<div className="left-view">
				{workstations.length
					? workstations[0] !== "loading"
						? workstations.map((tool, index) => (
								<Workstation id={tool.id} name={tool.name} date={tool.updatedAt} key={index} />
						  ))
						: "Loading..."
					: "No Available Workstations"}
			</div>
		</div>
	);
};

export default StudentRequests;
