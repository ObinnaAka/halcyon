import React, { useState, useContext, useEffect } from "react";

import { API } from "aws-amplify";
import {
	createTransaction,
	createNewTransaction,
	createTool,
	createUser,
	createInventory,
	createShop,
	updateShop,
} from "../../../graphql-optimized/mutations";
import { listTools, listShops } from "../../../graphql-optimized/queries";

import "./Maintenance.css";

import { UserContext } from "../../../context/user-context";
import { Section } from "../../../components";

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
const users = {
	TIW: "tiw",
	Obinna: "oaa876",
};
const checkIn = ["Sign In", "Sign Out"];
const initialToolState = {
	name: "HQ-",
	location: "HQ",
	toolType: "Workstation",
	currentHolderId: users["TIW"],
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
	userId: users["TIW"],
	transactionStatus: "Processing",
	transactionComment: "Test",
};
const initialUserState = {
	firstName: "",
	lastName: "",
	id: "",
	email: "",
};
const initialUserCheckInState = {
	id: "",
	signInStatus: "Sign In",
	workstation: "none",
};
const initialShopState = {
	name: "",
};
const MaintenancePage = () => {
	const auth = useContext(UserContext);

	const [transaction, setTransaction] = useState({
		...initialTransactionState,
		staffUserId: auth?.id,
	});

	const [user, setUser] = useState(initialUserState);
	const [userCheckIn, setUserCheckIn] = useState(initialUserCheckInState);
	const [tool, setTool] = useState(initialToolState);
	const [inventory, setInventory] = useState(initialInventoryState);
	const [workstations, setWorkstations] = useState([]);
	const [shop, setShop] = useState(initialShopState);

	useEffect(() => {
		if (!auth) return;
		setTransaction({ ...transaction, staffUserId: auth.id });
		fetchWorkstations();
		// fetchShops();
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
	// const fetchShops = () => {
	// 	API.graphql({
	// 		query: listShops,
	// 	})
	// 		.then((shops) => {
	// 			setShops(shops);
	// 			console.log(shops);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
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
	const submitUserCheckInHandler = async (evt) => {
		evt.preventDefault();
		console.log(userCheckIn);
		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					userId: userCheckIn.id.replace(/\s/g, "").toLowerCase(),
					tools: userCheckIn.workstation,
					staffUserId: "tiw",
					transactionType: userCheckIn.signInStatus,
					transactionStatus: "Finished",
					transactionComment: "",
				},
			},
		})
			.then(() => alert("User Checked In!"))
			.catch((err) => {
				alert("This user has not created an account");
				console.log(err);
			});
	};
	const submitUserHandler = async (evt) => {
		evt.preventDefault();
		console.log("here");
		console.log(user);
		let newUser = await API.graphql({
			query: createUser,
			variables: { input: { ...user, workstationId: "none" } },
		});
		console.log(newUser);
	};
	const submitShopHandler = async (evt) => {
		evt.preventDefault();
		console.log(shop);
		await API.graphql({
			query: createShop,
			variables: { input: shop },
		})
			.then(() => alert("New Shop Created!"))
			.catch((err) => console.log(err));
	};
	const updateShopHandler = async (evt) => {
		evt.preventDefault();
		console.log(shop);
		await API.graphql({
			query: updateShop,
			variables: { input: { id: shop.name, ...shop } },
		})
			.then(() => alert("Shop Updated!"))
			.catch((err) => console.log(err));
	};

	// TODO ----------------------------------------------------------
	// TODO Create a form object that takes in "Input Labels" and automatically
	// TODO generates a form component for this page (and anywhere else)
	// TODO ----------------------------------------------------------

	return (
		<div className="left">
			<form>
				<h2>Check In Student</h2>
				<div>
					<label className="selector-label" htmlFor="userId">
						id:
						<input
							type="string"
							value={userCheckIn.id}
							onChange={(event) => setUserCheckIn({ ...userCheckIn, id: event.target.value })}
						/>
					</label>
				</div>

				<div>
					<label className="selector-label" htmlFor="transactionStatus">
						Check in/out:
						<select
							className="selector"
							onChange={(event) =>
								setUserCheckIn({ ...userCheckIn, signInStatus: event.target.value })
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
								setUserCheckIn({ ...userCheckIn, workstation: event.target.value })
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
					<button className="large" onClick={submitUserCheckInHandler}>
						Change Status
					</button>
				</div>
				{/* {transactionLoading ? <div>Processing...</div> : null} */}
			</form>
			<form>
				<h2>New Inventory</h2>
				<div>
					<label className="selector-label" htmlFor="userId">
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
					<label className="selector-label" htmlFor="userId">
						User:
						<select
							className="selector"
							onChange={(event) => setTransaction({ ...transaction, userId: event.target.value })}>
							{Object.keys(users).map((key, index) => {
								return (
									<option key={key} value={users[key]}>
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
				<h2>New User</h2>
				<div>
					<label htmlFor="firstName">
						First Name
						<input
							onChange={(event) => setUser({ ...user, firstName: event.target.value })}
							value={user.firstName}
							placeholder="First Name"
						/>
					</label>
				</div>
				<div>
					<label htmlFor="lastName">
						Last Name:
						<input
							onChange={(event) => setUser({ ...user, lastName: event.target.value })}
							value={user.lastName}
							placeholder="Last Name"
						/>
					</label>
				</div>
				<div>
					<label htmlFor="id">
						ID:
						<input
							onChange={(event) => setUser({ ...user, id: event.target.value })}
							value={user.id}
							placeholder="ID"
						/>
					</label>
				</div>
				<div>
					<label htmlFor="email">
						Email:
						<input
							type="email"
							onChange={(event) => setUser({ ...user, email: event.target.value })}
							value={user.email}
							placeholder="Email"
						/>
					</label>
				</div>
				<div className="form-actions">
					<button className="large" onClick={submitUserHandler}>
						Register
					</button>
				</div>
			</form>
			<form>
				<h2>Shops</h2>
				<div>
					<label>
						Shop Name
						<input
							onChange={(event) => setShop({ ...shop, name: event.target.value })}
							value={shop.name}
							placeholder="Shop Name"
						/>
					</label>
				</div>
				<div>
					<label>
						Student Message
						<input
							onChange={(event) => setShop({ ...shop, studentMessage: event.target.value })}
							value={shop.studentMessage}
							placeholder="Student Message"
						/>
					</label>
				</div>

				<div className="form-actions">
					{/* <button className="large" onClick={submitShopHandler}>
						Create Shop
					</button> */}
					<button className="large" onClick={updateShopHandler}>
						Update Shop
					</button>
				</div>
			</form>
		</div>
	);
};

export default MaintenancePage;
