import { API } from "aws-amplify";
import React, { useContext, useEffect, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { UserContext } from "../../../context/user-context";
import { createNewTransaction, createTransaction } from "../../../graphql-optimized/mutations";
import "./Help.modules.css";

const faq = {
	"Do I have to wear a mask?": "Yes, at all times!",
	"Can I eat or snack in the space?": "No you cannot!",
};
const spaces = ["Lasers", "E1", "E2", "DFAB", "Workshop", "HQ", "Idea Lab"];

const Help = () => {
	const [showTechModal, setShowTechModal] = useState(false);
	const [showBrokenModal, setShowBrokenModal] = useState(false);

	const [machineLocation, setMachineLocation] = useState("");
	const [machineName, setMachineName] = useState("");
	const [machinePosition, setMachinePosition] = useState("");
	const [machineComment, setMachineComment] = useState("");
	const [errMessage, setErrMessage] = useState("");

	const user = useContext(UserContext);
	const [checkedIn, setCheckedIn] = useState(false);

	useEffect(() => {
		if (user) {
			setCheckedInStatus();
		}
	}, [user]);

	const setCheckedInStatus = () => {
		if (user.signInStatus) setCheckedIn(user.signInStatus);
	};

	const needTech = async () => {
		await API.graphql({
			query: createTransaction,
			variables: {
				input: {
					transactionType: "Help Request",
					staffUserId: "tiw",
					userId: user.eid,
					transactionStatus: "Processing",
					transactionComment: `Need technician's help. Visit ${user.firstName} ${user.lastName} at ${user.workstation.name}`,
				},
			},
		});

		setShowTechModal(true);
	};

	const cancelMachineForm = () => {
		setErrMessage("");
		setMachineLocation("");
		setMachineName("");
		setMachinePosition("");
		setMachineComment("");
		setShowBrokenModal(false);
	};

	const reportMachine = async () => {
		if (machineLocation === "") {
			setErrMessage("Please enter a value for all fields");
			return;
		}

		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					transactionType: "Help Request",
					staffUserId: "tiw",
					userId: user.eid,
					transactionStatus: "Processing",
					transactionComment: `Broken Machine. Machine: ${machineName} (${machinePosition}), located at ${machineLocation}. Issue: ${machineComment}`,
				},
			},
		});

		setErrMessage("");
		setMachineLocation("");
		setMachineName("");
		setMachinePosition("");
		setMachineComment("");
		setShowBrokenModal(false);
	};

	return (
		<div>
			{checkedIn && (
				<React.Fragment>
					<button className="large" onClick={needTech}>
						Help! I need a technician!
					</button>
					<br></br>
					<button className="large" onClick={() => setShowBrokenModal(true)}>
						I want to report a broken machine
					</button>
				</React.Fragment>
			)}
			<h2>Frequently Asked Questions</h2>
			{Object.entries(faq).map(([question, answer]) => (
				<div key={`${question}-div`}>
					<h4>{question}</h4>
					<p>{answer}</p>
				</div>
			))}
			{showTechModal && (
				<Modal canConfirm onConfirm={() => setShowTechModal(false)} confirmText="Okay!">
					<h3>A student technician is on the way to your workstation, {user.workstation.name}!</h3>
				</Modal>
			)}
			{showBrokenModal && (
				<Modal canCancel onCancel={cancelMachineForm} title={errMessage}>
					<form onSubmit={reportMachine}>
						<h2>Tell us about the broken machine!</h2>
						<div>
							<h5>Where is the machine located?</h5>
							<select
								defaultValue="select"
								onChange={(event) => setMachineLocation(event.target.value)}>
								<option value="select" disabled>
									Select
								</option>
								{spaces.map((space) => (
									<option key={space}>{space}</option>
								))}
							</select>
						</div>
						<div>
							<h5>What is the name of the machine?</h5>
							<input
								required
								type="string"
								value={machineName}
								onChange={(event) => setMachineName(event.target.value)}
							/>
						</div>
						<div>
							<h5>
								What is the number associated with the machine? If no number, please put description
								of where machine is located in room.
							</h5>
							<input
								required
								type="string"
								value={machinePosition}
								onChange={(event) => setMachinePosition(event.target.value)}
							/>
						</div>
						<div>
							<h5>What's wrong with the machine?</h5>
							<input
								required
								type="string"
								value={machineComment}
								onChange={(event) => setMachineComment(event.target.value)}
							/>
						</div>
						<button type="submit">Done</button>
					</form>
				</Modal>
			)}
		</div>
	);
};

export default Help;
