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
	currentHolderId: "1a5d4c24-bea2-459c-84d8-9866ae15ab97",
	status: "Checked Out",
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
		setTool({ ...tool, inService: tool.inService === "true" ? "false" : "true" });
	};
	const statusHandler = () => {
		return transaction.status === "Processing" ? "Finished" : "Processing";
	};

	const submitToolHandler = async () => {
		console.log("here");
		console.log(tool);
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

	const toolStatus = [
		"Checked Out",
		"Checked in",
		"Cleaning",
		"Cleaned",
		"Repair",
		"Not in Service",
	];

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
		TIW: "a1f01525-1bfd-483c-968f-19b3f56abc49",
		Obinna: "b4677702-2227-43f6-a007-62bea3ac954e",
		Test: "e7020ff2-7bd0-4739-adcb-79c1686f9f8c",
	};

	return (
		<div className="left-view">
			<form className="create-tool">
				<div className="form-control">
					<label htmlFor="name">
						Name:
						<input
							type="string"
							value={tool.name}
							onChange={(event) => setTool({ ...tool, name: event.target.value })}
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="toolType">
						Type of Tool:
						<input
							type="string"
							value={tool.toolType}
							onChange={(event) => setTool({ ...tool, toolType: event.target.value })}
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="location">
						Location:
						<input
							type="Location"
							value={tool.location}
							onChange={(event) => setTool({ ...tool, location: event.target.value })}
						/>
					</label>
				</div>
				<div className="form-control">
					<label className="selector-label" htmlFor="status">
						Status:
						<select
							className="selector"
							onChange={(event) => setTransaction({ ...tool, status: event.target.value })}>
							{toolStatus.map((status, index) => {
								return (
									<option key={index} value={status}>
										{status}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div className="form-actions">
					<input
						type="button"
						onClick={submitToolHandler}
						className="button"
						value="Create New Tool"
					/>
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
