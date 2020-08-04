import React, { useState, useContext } from "react";

import { useInput } from "../../../helpers/helpers";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { API } from "aws-amplify";
import { createTransaction, createTool, createMember } from "../../../graphql/mutations";

import AuthContext from "../../../context/auth-context";

import "./Maintenance.css";

const toolStatus = ["Checked Out", "Checked in", "Cleaning", "Cleaned", "Repair", "Not in Service"];
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
	TIW: "tiw",
	Obinna: "oaa876",
};

const initialToolState = {
	name: "",
	location: "",
	toolType: "",
	currentHolderId: members["TIW"],
	toolStatus: "Checked Out",
};
const initialTransactionState = {
	transactionType: "Test",
	memberId: members["TIW"],
	transactionStatus: "Processing",
	transactionComment: "Test",
};
const initialMemberState = {
	firstName: "",
	lastName: "",
	eid: "",
	email: "",
	memberType: "Staff",
};

const MaintenancePage = () => {
	const { auth } = useContext(AuthContext);

	console.log(auth);
	const [transaction, setTransaction] = useState({
		...initialTransactionState,
		staffMemberId: auth,
	});
	const [member, setMember] = useState(initialMemberState);
	const [tool, setTool] = useState(initialToolState);

	//____Handlers____
	const submitToolHandler = async () => {
		let newTool = await API.graphql({
			query: createTool,
			variables: { input: tool },
		});

		console.log(newTool);
	};
	const submitTransactionHandler = async () => {
		console.log(transaction);
		let newTransaction = await API.graphql({
			query: createTransaction,
			variables: { input: transaction },
		});
		console.log(newTransaction);
	};
	const submitMemberHandler = async () => {
		let newMember = await API.graphql({
			query: createMember,
			variables: { input: member },
		});
		console.log(newMember);
	};

	return (
		<div className="left-view">
			<form className="form-control">
				<h2>New Tool</h2>
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
					<label className="selector-label" htmlFor="toolStatus">
						Status:
						<select
							className="selector"
							onChange={(event) => setTool({ ...tool, toolStatus: event.target.value })}>
							{toolStatus.map((toolStatus, index) => {
								return (
									<option key={index} value={toolStatus}>
										{toolStatus}
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
			<form className="form-control">
				<h2>New Transaction</h2>
				<div className="form-control">
					<label className="selector-label" htmlFor="memberId">
						Member:
						<select
							className="selector"
							onChange={(event) =>
								setTransaction({ ...transaction, memberId: event.target.value })
							}>
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
							onChange={(event) =>
								setTransaction({ ...transaction, transactionType: event.target.value })
							}>
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
				<div className="form-control">
					<label htmlFor="transactionComment">
						Comment:
						<input
							type="string"
							value={transaction.transactionComment}
							onChange={(event) =>
								setTransaction({ ...transaction, transactionComment: event.target.value })
							}
						/>
					</label>
				</div>
				<div className="form-control">
					<label className="selector-label" htmlFor="transactionStatus">
						Status:
						<select
							className="selector"
							onChange={(event) =>
								setTransaction({ ...transaction, transactionStatus: event.target.value })
							}>
							<option value="Processing">Processing</option>
							<option value="Complete">Complete</option>
						</select>
					</label>
				</div>
				<div className="form-control">
					<input
						type="button"
						className="button"
						value="Create New Transaction"
						onClick={submitTransactionHandler}
					/>
				</div>
				{/* {transactionLoading ? <div>Processing...</div> : null} */}
			</form>
			<form className="form-control">
				<h2>New Member</h2>
				<div className="form-control">
					<label htmlFor="firstName">
						First Name
						<input
							onChange={(event) => setMember({ ...member, firstName: event.target.value })}
							value={member.firstName}
							placeholder="First Name"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="lastName">
						Last Name:
						<input
							onChange={(event) => setMember({ ...member, lastName: event.target.value })}
							value={member.lastName}
							placeholder="Last Name"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="eid">
						EID:
						<input
							onChange={(event) => setMember({ ...member, eid: event.target.value })}
							value={member.eid}
							placeholder="EID"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="email">
						Email:
						<input
							type="email"
							onChange={(event) => setMember({ ...member, email: event.target.value })}
							value={member.email}
							placeholder="Email"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="password">
						Password:
						<input
							type="password"
							onChange={(event) => setMember({ ...member, password: event.target.value })}
							value={member.password}
							placeholder="Password"
						/>
					</label>
				</div>

				<div className="form-actions">
					<input type="button" className="button" value="Register" onClick={submitMemberHandler} />
				</div>
			</form>
		</div>
	);
};

export default MaintenancePage;
