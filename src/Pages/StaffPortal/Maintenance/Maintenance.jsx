import React, { useState, useContext, useEffect } from "react";

import { API } from "aws-amplify";
import {
	createTransaction,
	createNewTransaction,
	createTool,
	createMember,
	createInventory,
} from "../../../graphql-optimized/mutations";
import { listTools } from "../../../graphql-optimized/queries";

import "./Maintenance.css";

import { MemberContext } from "../../../context/member-context";
import { Workstation } from "../../../components";

const toolStatus = ["Checked Out", "Checked in", "Cleaning", "Cleaned", "Repair", "Not in Service"];
const transactionTypes = [
	"Test",
	"Tool Checkout",
	"Tool Return",
	"Sign In",
	"Sign Out",
	"3D Print",
	"Training",
	"Conduct",
	"Cleaning",
];
const toolTypes = ["Handheld", "Workstation", "Consumable"];
const members = {
	TIW: "tiw",
	Obinna: "oaa876",
};
const checkIn = ["Sign In", "Sign Out"];
const initialToolState = {
	name: "HQ-",
	location: "HQ",
	toolType: "Workstation",
	currentHolderId: members["TIW"],
	currentWorkstationId: "HQ",
	toolStatus: "Cleaned",
};
const initialInventoryState = {
	name: "",
	count: 0,
	toolType: toolTypes[0],
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
};
const initialMemberCheckInState = {
	eid: "",
	signInStatus: "Sign In",
	workstation: "none",
};

const MaintenancePage = () => {
	const auth = useContext(MemberContext);

	const [transaction, setTransaction] = useState({
		...initialTransactionState,
		staffMemberId: auth.eid,
	});

	const [member, setMember] = useState(initialMemberState);
	const [memberCheckIn, setMemberCheckIn] = useState(initialMemberCheckInState);
	const [tool, setTool] = useState(initialToolState);
	const [inventory, setInventory] = useState(initialInventoryState);
	const [workstations, setWorkstations] = useState([]);

	useEffect(() => {
		setTransaction({ ...transaction, staffMemberId: auth.eid });
		fetchWorkstations();
	}, [auth]);

	//____Handlers____
	const fetchWorkstations = () => {
		API.graphql({
			query: listTools,
			variables: { filter: { toolType: { eq: "Workstation" } } },
		}).then((workstations) => {
			let results = workstations.data.listTools.items.sort((a, b) => {
				if (a === b) return 0;

				return a.name < b.name ? -1 : 1;
			});

			setWorkstations(results);
			console.log(results);
		});
	};
	const submitToolHandler = async (evt) => {
		evt.preventDefault();
		console.log(tool);
		let newTool = await API.graphql({
			query: createTool,
			variables: { input: tool },
		});
		alert("New Tool Created!");
	};
	const submitInventoryHandler = async (evt) => {
		evt.preventDefault();
		console.log(inventory);
		let newInventory = await API.graphql({
			query: createInventory,
			variables: { input: inventory },
		});
		console.log(newInventory);
		alert("New Inventory Item Created!");
	};
	const submitTransactionHandler = async (evt) => {
		evt.preventDefault();
		console.log(transaction);
		let newTransaction = await API.graphql({
			query: createTransaction,
			variables: { input: transaction },
		});
		alert("New Transaction Created!");
	};
	const submitMemberCheckInHandler = async (evt) => {
		evt.preventDefault();
		console.log(memberCheckIn);
		let newMember = await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					memberId: memberCheckIn.eid.replace(/\s/g, "").toLowerCase(),
					tools: memberCheckIn.workstation,
					staffMemberId: "tiw",
					transactionType: memberCheckIn.signInStatus,
					transactionStatus: "Finished",
					transactionComment: "",
				},
			},
		})
			.then(() => alert("New Transaction Created!"))
			.catch((err) => {
				alert("This user has not created an account");
				console.log(err);
			});
		console.log(newMember);
	};
	const submitMemberHandler = async (evt) => {
		evt.preventDefault();
		console.log("here");
		let newMember = await API.graphql({
			query: createMember,
			variables: { input: member },
		});
		console.log(newMember);
	};

	return (
		<div className="left">
			<form>
				<h2>Check In Student</h2>
				<div>
					<label className="selector-label" htmlFor="memberId">
						eid:
						<input
							type="string"
							value={memberCheckIn.eid}
							onChange={(event) => setMemberCheckIn({ ...memberCheckIn, eid: event.target.value })}
						/>
					</label>
				</div>

				<div>
					<label className="selector-label" htmlFor="transactionStatus">
						Check in/out:
						<select
							className="selector"
							onChange={(event) =>
								setMemberCheckIn({ ...memberCheckIn, signInStatus: event.target.value })
							}>
							{checkIn.map((checkIn, index) => {
								return (
									<option key={index} value={checkIn}>
										{checkIn}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div>
					<label className="selector-label" htmlFor="transactionType">
						Workstation:
						<select
							className="selector"
							defaultValue=""
							onChange={(event) =>
								setMemberCheckIn({ ...memberCheckIn, workstation: event.target.value })
							}>
							<option value="" disabled hidden>
								Select a Workstation
							</option>
							{workstations.map((workstation, index) => {
								if (workstation.reservations.items) {
									workstation.reservations = workstation.reservations.items.map((reservation) => {
										return reservation.time;
									});
								}
								return (
									<option key={index} value={workstation.id}>
										{workstation.name}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div>
					<button className="large" onClick={submitMemberCheckInHandler}>
						Change Status
					</button>
				</div>
				{/* {transactionLoading ? <div>Processing...</div> : null} */}
			</form>
			<form>
				<h2>New Inventory</h2>
				<div>
					<label className="selector-label" htmlFor="memberId">
						Tool Name:
						<input
							type="string"
							value={inventory.name}
							onChange={(event) => setInventory({ ...inventory, name: event.target.value })}
						/>
					</label>
				</div>
				<div>
					<label className="selector-label" htmlFor="transactionType">
						Quantity:
						<input
							type="number"
							value={inventory.count}
							onChange={(event) => setInventory({ ...inventory, count: event.target.value })}
						/>
					</label>
				</div>
				<div>
					<label className="selector-label" htmlFor="transactionStatus">
						Tool Type:
						<select
							className="selector"
							onChange={(event) => setInventory({ ...inventory, toolType: event.target.value })}>
							{toolTypes.map((toolType, index) => {
								return (
									<option key={index} value={toolType}>
										{toolType}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div>
					<button className="large" onClick={submitInventoryHandler}>
						Submit Inventory
					</button>
				</div>
				{/* {transactionLoading ? <div>Processing...</div> : null} */}
			</form>
			<form>
				<h2>New Tool</h2>
				<div>
					<label htmlFor="name">
						Name:
						<input
							type="string"
							value={tool.name}
							onChange={(event) => setTool({ ...tool, name: event.target.value })}
						/>
					</label>
				</div>
				<div>
					<label htmlFor="toolType">
						Type of Tool:
						<select
							className="selector"
							onChange={(event) => setTool({ ...tool, toolType: event.target.value })}>
							{toolTypes.map((toolType, index) => {
								return (
									<option key={index} value={toolType}>
										{toolType}
									</option>
								);
							})}
						</select>
					</label>
				</div>
				<div>
					<label htmlFor="location">
						Location:
						<input
							type="Location"
							value={tool.location}
							onChange={(event) => setTool({ ...tool, location: event.target.value })}
						/>
					</label>
				</div>
				<div>
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
					<button className="large" onClick={submitToolHandler}>
						Create New Tool
					</button>
				</div>
				{/* {toolLoading ? <div>Processing...</div> : null} */}
			</form>
			<form>
				<h2>New Transaction</h2>
				<div>
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
				<div>
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
				<div>
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
				<div>
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
				<div>
					<button className="large" onClick={submitTransactionHandler}>
						Create New Transaction
					</button>
				</div>
			</form>
			<form>
				<h2>New Member</h2>
				<div>
					<label htmlFor="firstName">
						First Name
						<input
							onChange={(event) => setMember({ ...member, firstName: event.target.value })}
							value={member.firstName}
							placeholder="First Name"
						/>
					</label>
				</div>
				<div>
					<label htmlFor="lastName">
						Last Name:
						<input
							onChange={(event) => setMember({ ...member, lastName: event.target.value })}
							value={member.lastName}
							placeholder="Last Name"
						/>
					</label>
				</div>
				<div>
					<label htmlFor="eid">
						EID:
						<input
							onChange={(event) => setMember({ ...member, eid: event.target.value })}
							value={member.eid}
							placeholder="EID"
						/>
					</label>
				</div>
				<div>
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
				<div className="form-actions">
					<button className="large" onClick={submitMemberHandler}>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default MaintenancePage;
