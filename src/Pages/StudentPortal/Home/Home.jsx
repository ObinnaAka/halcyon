import { API } from "aws-amplify";
import moment from "moment";
import React, { useContext, useLayoutEffect, useState } from "react";
import { Modal, MyReservation, Section } from "../../../components";
import { ShopContext, MemberContext } from "../../../context";
import { createNewTransaction, createTransaction } from "../../../graphql-optimized/mutations";
import "./Home.modules.css";

// const spaces = ["Lasers", "E1", "E2", "DFAB", "Workshop", "HQ", "Idea Lab"];
const spaces = ["HQ"];

const Home = () => {
	const member = useContext(MemberContext);

	const shop = useContext(ShopContext);

	const [showModalCheckInThanks, setShowModalCheckInThanks] = useState(false);
	const [showModalCheckOutThanks, setShowModalCheckOutThanks] = useState(false);
	const [showModalConduct, setShowModalConduct] = useState(false);
	const [showModalHelpComment, setShowModalHelpComment] = useState(false);
	const [showModalHelpDesk, setShowModalHelpDesk] = useState(false);
	const [showModalMaintenance, setShowModalMaintenance] = useState(false);

	const [myReservations, setMyReservations] = useState({});
	const [myReservationLocations, setMyReservationLocations] = useState({});
	const [myReservationIds, setMyReservationIds] = useState({});
	const [resCancelled, setResCancelled] = useState(0);

	const [checkedIn, setCheckedIn] = useState(false);
	const [currTime, setCurrTime] = useState(moment());
	const [hasConductProb, setHasConductProb] = useState(false);
	const [hasCurrReservation, setHasCurrReservation] = useState(false);
	const [mostRecentReservation, setMostRecentReservation] = useState(0);

	const [memberLocation, setMemberLocation] = useState("");
	const [helpDeskComment, setHelpDeskComment] = useState("");

	const [machineLocation, setMachineLocation] = useState("");
	const [machineName, setMachineName] = useState("");
	const [machinePosition, setMachinePosition] = useState("");
	const [machineComment, setMachineComment] = useState("");
	const [errMessage, setErrMessage] = useState("");

	useLayoutEffect(() => {
		if (!member) return;
		fetchMemberInfo();
		setCheckedIn(member.signInStatus);
	}, [member]);

	const fetchMemberInfo = async () => {
		console.log(member);

		const currReservations = member.reservations.items;
		currReservations.sort((res1, res2) => (res1.time >= res2.time ? 1 : -1));

		let myRes = {};
		let myResLocations = {};
		let myResIds = {};

		for (let res of currReservations) {
			if (res.transactionGroup in myRes) {
				myRes[res.transactionGroup] = [...myRes[res.transactionGroup], parseInt(res.time)];
				myResIds[res.transactionGroup] = [...myResIds[res.transactionGroup], res.id];
			} else {
				myRes[res.transactionGroup] = [parseInt(res.time)];
				myResIds[res.transactionGroup] = [res.id];
				myResLocations[res.transactionGroup] = res.tool;
			}
		}

		setMyReservationIds(myResIds);

		//Doing this to get most recent reservation
		//To see if it is a current reservation & it is okay to be checked in
		//Or if it is a past one & they need to check out
		const myResKeys = Object.keys(myRes);
		let currRes;
		let hasCurrRes = false;
		let lastRes = 0;
		const tempCurrTime = moment();
		for (let resKey of myResKeys) {
			currRes = myRes[resKey];

			if (
				moment
					.duration(
						moment
							.unix(tempCurrTime / 1000)
							.diff(moment.unix(currRes[currRes.length - 1] / 1000 + 1800))
					)
					.asMinutes() > 0
			) {
				//this means this reservation is a past reservation
				console.log("past reservation");
				lastRes = resKey;
			} else if (
				moment
					.duration(moment.unix(tempCurrTime / 1000).diff(moment.unix(currRes[0] / 1000)))
					.asMinutes() >= -15 &&
				moment
					.duration(
						moment
							.unix(tempCurrTime / 1000)
							.diff(moment.unix(currRes[currRes.length - 1] / 1000 + 1800))
					)
					.asMinutes() <= 0
			) {
				// -------------------------------------------------
				// This means a reservation is happening now
				// -------------------------------------------------
				console.log("happening now");
				lastRes = resKey;
				hasCurrRes = true;
				break;
			} else {
				// -------------------------------------------------
				// This means all reservations are in the future
				// -------------------------------------------------
				break;
			}
		}
		setMostRecentReservation(lastRes);
		setHasCurrReservation(hasCurrRes);

		setMyReservations(myRes);
		setMyReservationLocations(myResLocations);
		setMyReservationIds(myResIds);

		// -------------------------------------------------
		// Checking if a student is checked in
		// -------------------------------------------------

		if (member.signInStatus) {
			if (!hasCurrRes && lastRes === 0) {
				// -------------------------------------------------
				// Signed in but don't any current reservation or
				// history of reservations This is a fluke, so sign them out
				// -------------------------------------------------
				checkOut();
				setCheckedIn(false);
			} else {
				setCheckedIn(member.signInStatus);
			}
		}
		// ---------------------------------------------------------------
		// If member.conductStatus >= 5, this means a
		// student has so many strikes they are no longer allowed in the space
		// ---------------------------------------------------------------
		if (member.conductStatus && member.conductStatus >= 5) setHasConductProb(true);
	};

	const cancelReservation = async (groupId, workstation) => {
		const resIds = myReservationIds[groupId];
		console.log("cancelling reservation");
		console.log(resIds);
		let results = await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					transactionType: "Cancel Reservation",
					staffMemberId: "tiw",
					memberId: member.eid,
					transactionStatus: "Finished",
					reservationSlots: resIds,
				},
			},
		});
		let tempMyReservations = myReservations;
		let tempMyReservationLocations = myReservationLocations;
		let tempMyReservationIds = myReservationIds;

		delete tempMyReservations[groupId];
		delete tempMyReservationLocations[groupId];
		delete tempMyReservationIds[groupId];

		setMyReservations(tempMyReservations);
		setMyReservationLocations(tempMyReservationLocations);
		setMyReservationIds(tempMyReservationIds);

		setResCancelled(resCancelled + 1);
	};

	const checkOut = async () => {
		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					transactionType: "Sign Out",
					staffMemberId: "tiw",
					memberId: member.eid,

					// TODO ----------------------------------------------
					// TODO I Don't know how to make this a querying value
					// TODO ----------------------------------------------

					tools: [member.workstation.id],
					transactionStatus: "Finished",
				},
			},
		});

		setCheckedIn(false);
		setShowModalCheckOutThanks(true);
	};

	const requestHelp = async () => {
		await API.graphql({
			query: createTransaction,
			variables: {
				input: {
					transactionType: "Student Request",
					staffMemberId: "tiw",
					memberId: member.eid,
					transactionStatus: "Processing",
					transactionComment: `Need technician's help. Visit ${member.firstName} ${
						member.lastName
					} at ${member.workstation.name ?? memberLocation}. Problem: ${helpDeskComment}`,
				},
			},
		}).then((res) => {
			console.log(res);
		});
		setShowModalHelpComment(false);
		setShowModalHelpDesk(true);
	};

	const cancelHelp = () => {
		setHelpDeskComment("");
		setShowModalHelpComment(false);
		setMemberLocation("");
	};

	const requestMaintenance = async () => {
		if (machineLocation === "") {
			setErrMessage("Please enter a value for all fields");
			return;
		}

		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					transactionType: "Student Request",
					staffMemberId: "tiw",
					memberId: member.eid,
					transactionStatus: "Processing",
					transactionComment: `Broken Machine. Machine: ${machineName} (${machinePosition}), located at ${machineLocation}. Issue: ${machineComment}`,
				},
			},
		});

		// TODO ----------------------------------------
		// TODO This can all be replaced by a dictionary
		// TODO Checkout the forms on the maintenance page
		// TODO ----------------------------------------

		setErrMessage("");
		setMachineLocation("");
		setMachineName("");
		setMachinePosition("");
		setMachineComment("");
		setShowModalMaintenance(false);
	};

	const cancelMachineForm = () => {
		setErrMessage("");
		setMachineLocation("");
		setMachineName("");
		setMachinePosition("");
		setMachineComment("");
		setShowModalMaintenance(false);
	};
	const checkInConfirmation = () => {
		setShowModalCheckInThanks(true);
	};
	return (
		<div className="page">
			<h1>Welcome to Texas Inventionworks!</h1>
			<label>
				Check out our{" "}
				<a
					href="https://wikis.utexas.edu/display/utmakerstudios/Texas+Inventionworks+Home"
					rel="noopener noreferrer"
					target="_blank"
					style={{ color: "#bf5700", textDecorationLine: "underline" }}>
					{"TIW Wiki"}
				</a>{" "}
				and{" "}
				<a
					href="https://wikis.utexas.edu/display/utmakerstudios/COVID-19+Rules+and+Regulations"
					rel="noopener noreferrer"
					target="_blank"
					style={{ color: "#bf5700", textDecoration: "underline" }}>
					{"COVID-19 Guidelines!"}
				</a>
			</label>
			<h3>Our Hours</h3>
			<label>Monday - Friday</label>
			<br></br>
			<label>12am - 6pm</label>
			<br></br>
			<h4>My Dashboard</h4>
			{checkedIn && !hasCurrReservation && (
				<div>
					<h4 style={{ color: "red" }}>Your reservation has expired. Please check out!</h4>
					<label>{myReservationLocations[mostRecentReservation].name}: </label>
					<label>
						{moment.unix(myReservations[mostRecentReservation][0] / 1000).format("MMMM DD h:mm A")}{" "}
						-
						{moment
							.unix(
								myReservations[mostRecentReservation][
									myReservations[mostRecentReservation].length - 1
								] /
									1000 +
									1800
							)
							.format("h:mm A")}
					</label>
					<button onClick={checkOut}>Check Out</button>
				</div>
			)}
			<div className="sectionList">
				<Section>
					<h4>My Reservations</h4>
					{Object.keys(myReservations).length ? (
						Object.entries(myReservations).map(
							([group, times]) =>
								moment
									.duration(currTime.diff(moment.unix(times[times.length - 1] / 1000 + 1800)))
									.asMinutes() <= 0 && (
									<div className="item-holder" key={group}>
										<MyReservation
											key={group}
											myReservationLocations={myReservationLocations}
											myReservationIds={myReservationIds}
											checkInConfirmation={checkInConfirmation}
											cancelReservation={cancelReservation}
											setShowModalConduct={setShowModalConduct}
											hasConductProb={member.conductStatus >= 4}
											group={group}
											times={times}
											currTime={currTime}
											member={member.eid}
										/>
									</div>
								)
						)
					) : (
						<div>
							<h4>No Reservations on your account</h4>
							<h5>
								Please note that you must have booked a reservation in order to check in to the
								space
							</h5>
						</div>
					)}
				</Section>
				<Section>
					<h4>Help Desk</h4>
					{checkedIn && (
						<React.Fragment>
							<label
								style={{
									cursor: "pointer",
									color: "#bf5700",
									textDecoration: "underline",
								}}
								onClick={() => setShowModalHelpComment(true)}>
								Request Help From Help Desk
							</label>
							<br></br>
							<label
								style={{
									cursor: "pointer",
									color: "#bf5700",
									textDecoration: "underline",
								}}
								onClick={() => setShowModalMaintenance(true)}>
								Maintenance Request
							</label>
							<br></br>
						</React.Fragment>
					)}
					<a
						href="https://forms.gle/sU5btd483p8zD7NLA"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#bf5700", textDecoration: "underline" }}>
						Give Feedback and/or Report A Bug
					</a>
				</Section>
			</div>

			{/*  */}
			{showModalCheckInThanks && (
				<Modal
					canConfirm
					onConfirm={() => {
						setShowModalCheckInThanks(false);
					}}
					confirmText="Okay!">
					<h1>
						Please proceed to the student near the front door in order to complete your check in!
					</h1>
					<p>Also, don't forget to check out!</p>
					<p>
						Please read our{" "}
						<a
							href="https://wikis.utexas.edu/display/utmakerstudios/COVID-19+Rules+and+Regulations"
							rel="noopener noreferrer"
							target="_blank"
							style={{ color: "#bf5700", textDecoration: "underline" }}>
							{"COVID 19 safety guidelines"}
						</a>{" "}
						for your health and safety. Failure to comply with the rules will result in expulsion
						from the premises.
					</p>
				</Modal>
			)}

			{showModalCheckOutThanks && (
				<Modal
					canConfirm
					onConfirm={() => {
						setShowModalCheckOutThanks(false);
					}}
					confirmText="Done">
					<h1>Thanks for checking out!</h1>
					<p>Please continue to visit us!</p>
				</Modal>
			)}
			{showModalConduct && (
				<Modal
					canConfirm
					onConfirm={() => {
						setShowModalConduct(false);
					}}
					confirmText="Done">
					<label>
						Based on your previous conduct in the space, you are not allowed to use the MakerSpace.
					</label>
					<label>
						If you believe this is a mistake, please speak to the student by the front door.
					</label>
				</Modal>
			)}

			{showModalHelpComment && (
				<Modal
					canCancel
					canConfirm
					onCancel={cancelHelp}
					title="Requesting Help From Front Desk"
					onConfirm={requestHelp}
					confirmText="Request Help">
					{member.workstation.name ?? (
						<div>
							<label>Where are you located?</label>
							<input
								type="string"
								value={memberLocation}
								onChange={(event) => setMemberLocation(event.target.value)}
							/>
						</div>
					)}
					<div>
						<label>Any comments?</label>
						<input
							type="string"
							value={helpDeskComment}
							onChange={(event) => setHelpDeskComment(event.target.value)}
						/>
					</div>
				</Modal>
			)}
			{showModalHelpDesk && (
				<Modal canConfirm onConfirm={() => setShowModalHelpDesk(false)} confirmText="Okay!">
					<h3>
						A student technician is on the way to your workstation,{" "}
						{member.workstation.name ?? memberLocation}!
					</h3>
				</Modal>
			)}
			{showModalMaintenance && (
				<Modal canCancel onCancel={cancelMachineForm} title={errMessage}>
					<form onSubmit={requestMaintenance}>
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

export default Home;
