import { API } from "aws-amplify";
import moment from "moment";
import React, { useContext, useEffect, useState, useLayoutEffect } from "react";
import Modal from "../../../../components/Modal/Modal";
import MyTool from "../../../../components/MyTool/MyTool";
import { UserContext } from "../../../../context/user-context";
import {
	createNewTransaction,
	createTransaction,
	updateTransaction,
} from "../../../../graphql-optimized/mutations";
import "./MyTools.modules.css";

const MyTools = () => {
	const [myCheckedTools, setMyCheckedTools] = useState({});
	const [myPendingTools, setMyPendingTools] = useState({});
	const [myPendingVersionCreated, setMyPendingVersionCreated] = useState({}); //key mapped to value where value[0] is version number & value[1] is createdAt value
	const [requestLen, setRequestsLen] = useState(0);
	const [returnTools, setReturnTools] = useState({});
	const [returnAllModal, setReturnAllModal] = useState(false);
	const [returnModal, setReturnModal] = useState(false);
	const [errorMsgModal, setErrorMsgModal] = useState("");
	const [maintenanceTool, setMaintenanceTool] = useState("");
	const [comment, setComment] = useState("");
	const [loading, setLoading] = useState(true);

	const member = useContext(UserContext);
	const [checkedIn, setCheckedIn] = useState(false);

	useLayoutEffect(() => {
		if (member) setUserInfo();
	}, [member]);

	const setUserInfo = async () => {
		if (member.itemRecord.items) {
			let tempCheckedItems = {};
			const checkedItems = member.itemRecord.items;
			for (let item of checkedItems) {
				tempCheckedItems[item.id] = item.name;
			}
			setMyCheckedTools(tempCheckedItems);
		}

		// --------------------------------------------------------
		// todo Fetching pending tools is quite expensive at the moment
		// todo It is pulling from the member's entire transaction history
		// todo I think we should try to make it more efficient
		// --------------------------------------------------------

		let currPendingTools = {};
		let currPendingVersions = {};
		let transactions;
		if (member.transactionRecord.items) {
			transactions = member.transactionRecord.items;

			console.log(transactions);
			transactions = transactions.filter(
				(trans) =>
					trans.transactionStatus === "Processing" && trans.transactionType === "Tool Request"
			);
			console.log(transactions);
			if (transactions) {
				for (let transaction of transactions) {
					if (transaction.requests && transaction.requests.length >= 1) {
						let toolsReq = [];
						for (let i = 0; i < transaction.requests.length; i++) {
							toolsReq = [...toolsReq, transaction.requests[i]];
						}
						currPendingTools[transaction.id] = toolsReq;
						currPendingVersions[transaction.id] = {
							version: transaction.version,
							createdAt: transaction.createdAt,
						};
					}
				}
			}
		}

		setMyPendingTools(currPendingTools);
		setMyPendingVersionCreated(currPendingVersions);
		setLoading(false);

		if (member.signInStatus) setCheckedIn(member.signInStatus);
	};

	const returnMutation = async (tools) => {
		console.log(tools);
		let result = await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					transactionType: "Tool Return",
					staffUserId: "tiw",
					memberId: member.eid,
					transactionStatus: "Processing",
					tools: tools,
				},
			},
		});
		console.log(result);
	};

	const returnSelected = async () => {
		console.log(Object.keys(returnTools).length);
		console.log(returnTools);
		if (Object.keys(returnTools).length === 0) {
			setErrorMsgModal("Please select tools to return!");
			return;
		}

		const tools = Object.keys(returnTools);
		await returnMutation(tools);

		setReturnModal(true);

		const currTools = myCheckedTools;
		let tool;
		for (tool of tools) {
			delete currTools[tool];
		}

		setMyCheckedTools(currTools);
	};

	const returnAll = async () => {
		console.log(Object.keys(myCheckedTools).length);
		if (Object.keys(myCheckedTools).length === 0) {
			setErrorMsgModal("You do not currently have any tools to return!");
			return;
		}

		const tools = Object.keys(myCheckedTools);
		await returnMutation(tools);

		setReturnTools({});
		setReturnAllModal(true);
		setMyCheckedTools({});

		console.log(myPendingTools);
	};

	const selectedToolHandler = ([id, name]) => {
		if (id in returnTools) {
			delete returnTools[id];
		} else {
			returnTools[id] = name;
		}
	};

	const maintenanceHandler = async ([id, name]) => {
		await API.graphql({
			query: createTransaction,
			variables: {
				input: {
					transactionType: "Student Request",
					staffUserId: "tiw",
					memberId: member.eid,
					transactionStatus: "Processing",
					transactionComment: `Tool Maintenance Requested. Tool: ${name}, Problem:${comment}`,
				},
			},
		});

		setMaintenanceTool(name);
	};

	const cancelRequestHandler = async ([id, tool]) => {
		const tools = myPendingTools[id];
		const versionNum = myPendingVersionCreated[id].version;
		const createdAtField = myPendingVersionCreated[id].createdAt;
		console.log(id);
		console.log(tools);
		console.log(versionNum);
		console.log(createdAtField);
		if (tools.length === 1 && tools[0] === tool) {
			console.log("tool length was 1 & other thing");

			//deleting this tool from array so don't have to re-render page
			let tempPendingTools = myPendingTools;
			let tempPendingVersionCreated = myPendingVersionCreated;
			delete tempPendingTools[id];
			delete tempPendingVersionCreated[id];
			setMyPendingTools(tempPendingTools);
			setMyPendingVersionCreated(tempPendingVersionCreated);
			setRequestsLen(requestLen + 1);
			console.log(tempPendingTools);

			await API.graphql({
				query: updateTransaction,
				variables: {
					input: {
						id: id,
						transactionStatus: "Cancelled",
						expectedVersion: versionNum,
						createdAt: createdAtField,
						updatedAt: moment().format(),
					},
				},
			});
		} else if (tools.length > 1) {
			console.log("tools length was greater than 1");
			//deleting this tool from array so don't have to re-render page
			let tempPendTools = myPendingTools;
			const tempPendingToolsArr = myPendingTools[id];
			let newTempPendArr = [];

			let i;
			for (i = 0; i < tempPendingToolsArr.length; i++) {
				if (tool === tempPendingToolsArr[i]) {
					console.log("Breaking");
					i++;
					break;
				} else {
					console.log(tool);
					newTempPendArr = [...newTempPendArr, tool];
				}
			}
			for (; i < tempPendingToolsArr.length; i++) {
				console.log(tool);
				newTempPendArr = [...newTempPendArr, tool];
			}

			tempPendTools[id] = newTempPendArr;
			setMyPendingTools(tempPendTools);
			setRequestsLen(requestLen + 1);

			let tempPendingVersionCreated = myPendingVersionCreated;
			tempPendingVersionCreated[id].version = tempPendingVersionCreated[id].version + 1;
			setMyPendingVersionCreated(tempPendingVersionCreated);
			console.log(tempPendTools);
			console.log(newTempPendArr);

			await API.graphql({
				query: updateTransaction,
				variables: {
					input: {
						id: id,
						requests: newTempPendArr,
						expectedVersion: versionNum,
						createdAt: createdAtField,
						updatedAt: moment().format(),
					},
				},
			});
		} else {
			alert("error");
		}
	};

	const confirmHandler = () => {
		setReturnModal(false);
		setReturnTools({});
	};

	const confirmAllHandler = () => {
		setReturnAllModal(false);
		setReturnTools({});
	};

	if (loading) return <div> loading...</div>;
	return (
		<div className="page">
			<React.Fragment>
				<div className="main-view">
					{Object.entries(myCheckedTools).length || Object.entries(myPendingTools).length ? (
						<div key={1}>
							{!checkedIn &&
								(Object.keys(myPendingTools).length || Object.keys(myCheckedTools).length) && (
									<h2 style={{ color: "red" }}>
										You are not checked in! Please return these tools immediately!
									</h2>
								)}
							{Object.entries(myPendingTools).map(([id, tools]) =>
								tools.map((tool) => (
									<MyTool name={tool} status="Processing" info={id}>
										<label>This tool is on the way!</label>
										<button className="large" onClick={cancelRequestHandler.bind(this, [id, tool])}>
											Cancel Tool Request
										</button>
									</MyTool>
								))
							)}
							{Object.entries(myCheckedTools).map(([id, name]) => (
								<MyTool
									auth={member.eid}
									canCheckbox
									key={id}
									name={name}
									status="Checked Out"
									selectHandler={selectedToolHandler.bind(this, [id, name])}>
									<input
										type="string"
										value={comment}
										onChange={(event) => setComment(event.target.value)}
									/>
									<button className="large" onClick={maintenanceHandler.bind(this, [id, name])}>
										Request Tool Maintenance
									</button>
								</MyTool>
							))}
							<div>
								<button onClick={returnSelected} className="large">
									Return Selected Tools
								</button>
								<button onClick={returnAll} className="large">
									Return All Tools
								</button>
							</div>
						</div>
					) : checkedIn ? (
						<h3>
							No tools here<br></br> Try checking out a tool!
						</h3>
					) : (
						<h3>You do not have any tools checked out yet!</h3>
					)}
				</div>
			</React.Fragment>
			{returnModal && (
				<Modal
					title="Tool(s) Being Processed!"
					canConfirm
					onConfirm={confirmHandler}
					confirmText="Okay!">
					<h4>The following tool(s) is/are being returned!</h4>
					<ul>
						{Object.entries(returnTools).map(([id, name]) => (
							<li key={id}>{name}</li>
						))}
					</ul>
				</Modal>
			)}
			{returnAllModal && (
				<Modal
					title="Tools Being Processed!"
					canConfirm
					onConfirm={confirmAllHandler}
					confirmText="Okay!">
					<label>All of your tools are being returned!</label>
					<ul>
						{Object.entries(returnTools).map(([id, name]) => (
							<li key={id}>{name}</li>
						))}
					</ul>
					<label>
						Please wait for a staff member to come to your location to pick up the tools!
					</label>
				</Modal>
			)}
			{errorMsgModal.length > 0 && (
				<Modal
					canConfirm
					onConfirm={() => {
						setErrorMsgModal("");
					}}
					confirmText="Okay!">
					<p>{errorMsgModal}</p>
					<p>Please note that you cannot return tools that are being processed</p>
				</Modal>
			)}
			{maintenanceTool !== "" && (
				<Modal
					canConfirm
					onConfirm={() => {
						setMaintenanceTool("");
					}}
					confirmText="Okay!">
					<label>Your maintenance request has been sent for this tool: {maintenanceTool}</label>
					<label>
						A staff member will come to your location soon to pick up your tools and give you new
						ones!
					</label>
				</Modal>
			)}
		</div>
	);
};

export default MyTools;
