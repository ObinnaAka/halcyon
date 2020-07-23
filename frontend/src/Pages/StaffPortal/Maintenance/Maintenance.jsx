import React, { useState, useContext } from "react";
import gql from "graphql-tag";

import { useInput } from "../../../helpers/helpers";
import AuthContext from "../../../context/auth-context";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { API } from "aws-amplify";
import { createTransaction, createTool, createMember } from "../../../graphql/mutations";

import "./Maintenance.css";
const initialToolState = {
	name: "",
	location: "",
	toolType: "",
	inService: "true",
	currentHolderId: "",
};
const initialTransactionState = {
	transactionType: "Test",
	member: "",
	status: "Processing",
	tools: [],
	staffID: "",
};
const initialMemberState = {
	firstName: "",
	lastName: "",
	eid: "",
	email: "true",
	password: "",
	memberType: "Staff",
};

const MaintenancePage = (Apollo) => {
	const [transaction, setTransaction] = useState(initialTransactionState);
	const [member, setMember] = useState(initialMemberState);
	const [tool, setTool] = useState(initialToolState);

	const [inService, setInService] = useState(true);

	//____ State Handlers____
	const inServiceHandler = () => {
		setInService(!inService);
		setTool("inService", tool.inService === "true" ? "false" : "true");
	};
	const statusHandler = () => {
		return transaction.status === "Processing" ? "Finished" : "Processing";
	};

	const submitToolHandler = async () => {
		let newTool = await API.graphql({
			query: createTool,
			variables: { input: tool },
		});
		console.log(newTool);
	};
	const submitTransactionHandler = async () => {
		let newTransaction = await API.graphql({
			query: createTransaction,
			variables: { input: tool },
		});
		console.log(newTransaction);
	};
	const submitMemberHandler = async () => {
		let newMember = await API.graphql({
			query: createMember,
			variables: { input: tool },
		});
		console.log(newMember);
	};

	const transactionTypes = [
		"Test",
		"Tool Checkout",
		"Tool Check In",
		"Sign In",
		"Sign Out",
		"3D Print",
		"Training",
		"Conduct",
		"Cleaning",
	];
	const members = {
		"Obinna ": "5efcc51cf9eba03f046435c3",
		"TIW ": "5efcce293b30cc0d10bde95c",
	};

	return (
		<div className="left-view">
			<form className="create-tool" onSubmit={submitToolHandler}>
				<div className="form-control">
					<label htmlFor="name">
						Name:
						<input
							type="string"
							value={tool.name}
							onChange={(event) => setTool("name", event.target.value)}
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="toolType">
						Type of Tool:
						<input
							type="string"
							value={tool.toolType}
							onChange={(event) => setTool("toolType", event.target.value)}
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="location">
						Location:
						<input
							type="Location"
							value={tool.location}
							onChange={(event) => setTool("location", event.target.value)}
						/>
					</label>
				</div>
				<div className="form-control" id="checkbox">
					<label htmlFor="inService">
						In Service:
						<ToggleButton
							className="itemButton"
							type="checkbox"
							onClick={inServiceHandler}
							checked={inService}
						/>
					</label>
				</div>
				<div className="form-actions">
					<input type="submit" className="button" value="Create New Tool" />
				</div>
				{/* {toolLoading ? <div>Processing...</div> : null} */}
			</form>
			<form className="create-transaction" onSubmit={submitTransactionHandler}>
				<div className="form-control">
					<label className="selector-label" htmlFor="member">
						Member:
						<select
							className="selector"
							onChange={(event) => setTransaction("member", event.target.value)}>
							{Object.keys(members).map((key, index) => {
								return (
									<option key={key} value={members[key]}>
										{key}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div className="form-control">
					<label className="selector-label" htmlFor="transactionType">
						Type:
						<select
							className="selector"
							onChange={(event) => setTransaction("transactionType", event.target.value)}>
							{transactionTypes.map((transactionType, index) => {
								return (
									<option key={index} value={transactionType}>
										{transactionType}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				{/* <ToggleButtonGroup
					value={tools}
					onChange={toolHandler}
					type="checkbox"
					aria-label="Tools"
					className="toggle-label">
					<ToggleButton value="5eeb31b77884fa41402f074d" aria-label="Hammer">
						Hammer
					</ToggleButton>
					<ToggleButton value="5eeb31377884fa41402f074c" aria-label="Wire Cutter">
						Wire Cutter
					</ToggleButton>
					<ToggleButton value="5eeb31d87884fa41402f074e" aria_label="DFAB-12">
						DFAB-12
					</ToggleButton>
				</ToggleButtonGroup>
				<div className="form-control">
					<label htmlFor="comment">
						Comment:
						<input type="string" value={comment} {...bindComment} />
					</label>
				</div>
				<div>
					<ToggleButton
						value="Processing"
						checked={status === "Processing"}
						onClick={statusHandler}
						type="checkbox"
						aria_label="Processing">
						Processing
					</ToggleButton>
				</div>
				<div className="form-actions">
					<input type="submit" className="button" value="Create New Transaction" />
				</div> */}
				{/* {transactionLoading ? <div>Processing...</div> : null} */}
			</form>
		</div>
	);
};

export default MaintenancePage;
