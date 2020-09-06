import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { API } from "aws-amplify";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import Modal from "../../../../components/Modal/Modal";
import ToolCheckout from "../../../../components/ToolCheckout/ToolCheckout";
import { MemberContext } from "../../../../context/member-context";
import { createTransaction } from "../../../../graphql-optimized/mutations";
import { listInventorys } from "../../../../graphql-optimized/queries";

const Checkout = () => {
	const [tools, setTools] = useState([]);
	const [myTools, setMyTools] = useState({});
	const [cartSize, setCartSize] = useState(0);
	const [comment, setComment] = useState("");
	const [showModal, setShowModal] = useState(false);

	const member = useContext(MemberContext);
	const [checkedIn, setCheckedIn] = useState(false);

	useLayoutEffect(() => {
		if (member) fetchTools();
	}, [member]);

	const fetchTools = async () => {
		let results = await API.graphql({
			query: listInventorys,
			variables: {
				filter: {
					toolType: { ne: "Workstation" },
				},
			},
		});

		const tools = results.data.listInventorys.items;
		setTools(tools);

		if (member.signInStatus) setCheckedIn(member.signInStatus);
	};

	const addMyTool = (event, newValue) => {
		if (newValue) {
			const tool = newValue.name;
			var myList = myTools;
			if (tool in myTools) {
				const newAmt = myTools[tool] + 1;
				myList[tool] = newAmt;
			} else {
				myList[tool] = 1;
			}

			setMyTools(myList);
			setCartSize(cartSize + 1);
		}
	};

	const addTool = ([tool, amount]) => {
		var myList = myTools;
		myList[tool] = amount + 1;
		setMyTools(myList);
		setCartSize(cartSize + 1);
	};

	const removeTool = ([tool, amount]) => {
		var myList = myTools;
		if (amount - 1 === 0) {
			delete myList[tool];
		} else {
			myList[tool] = amount - 1;
		}
		setMyTools(myList);
		setCartSize(cartSize - 1);
	};

	const reserveTools = async () => {
		let toolReservation = [];

		const tools = Object.keys(myTools);
		for (let tool of tools) {
			for (let i = 0; i < myTools[tool]; i++) {
				console.log(myTools[tool]);
				toolReservation = [...toolReservation, tool];
			}
		}

		let result = await API.graphql({
			query: createTransaction,
			variables: {
				input: {
					transactionType: "Tool Request",
					staffMemberId: "tiw",
					memberId: member.eid,
					transactionStatus: "Processing",
					requests: toolReservation,
					transactionComment: comment,
				},
			},
		});
		console.log("Tool", result);

		setShowModal(true);
	};

	const confirmModalHandler = () => {
		setShowModal(false);
		setMyTools({});
	};

	if (!tools.length)
		return (
			<div>
				<Autocomplete
					id="combo-box-demo"
					options={tools}
					getOptionLabel={(option) => option.name}
					style={{ width: 300, justifySelf: "center" }}
					onChange={addMyTool}
					renderInput={(params) => (
						<TextField {...params} label="Select a tool" variant="outlined" />
					)}
				/>
				Loading...
			</div>
		);

	return (
		<div>
			{checkedIn ? (
				<React.Fragment>
					{tools.length ? (
						<Autocomplete
							id="combo-box-demo"
							options={tools}
							getOptionLabel={(option) => option.name}
							style={{ width: 300, justifySelf: "center" }}
							onChange={addMyTool}
							renderInput={(params) => (
								<TextField {...params} label="Select a tool" variant="outlined" />
							)}
						/>
					) : (
						<h3>No Tools Available</h3>
					)}
					{Object.keys(myTools).length ? (
						<div>
							<h1>Your Tools</h1>
							{Object.entries(myTools).map(([tool, amt]) => (
								<ToolCheckout
									key={tool}
									name={tool}
									amount={amt}
									onAdd={addTool}
									onRemove={removeTool}
								/>
							))}
							<br></br>
							<div>
								<h5>Any comments?</h5>
								<input
									type="string"
									value={comment}
									onChange={(event) => setComment(event.target.value)}
								/>
							</div>
							<button className="large" onClick={reserveTools}>
								Reserve Tools
							</button>
						</div>
					) : (
						<h3>You do not have any tools in your cart</h3>
					)}
				</React.Fragment>
			) : (
				<h3>Please check in to check out a tool</h3>
			)}
			{showModal && (
				<React.Fragment>
					<Modal
						title="Tools Are On Their Way!"
						canConfirm
						confirmText="Okay!"
						onConfirm={confirmModalHandler}>
						<p>
							A student technician will come to your location, at {member.workstation.name}, soon to
							drop off your tools!{" "}
						</p>
						{Object.entries(myTools).map(([tool, amount]) => (
							<li key={tool}>
								{tool} ({amount})
							</li>
						))}
					</Modal>
					{/* <Backdrop className="backdrop" open={showModal} /> */}
				</React.Fragment>
			)}
		</div>
	);
};

export default Checkout;
