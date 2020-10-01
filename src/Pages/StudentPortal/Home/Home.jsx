import { API } from "aws-amplify";
import moment from "moment";
import React, { useContext, useLayoutEffect, useState } from "react";
import logo from "../../../images/logo-main.png";
import { Modal, MyReservation, Section } from "../../../components";
import { ShopContext, UserContext } from "../../../context";
import { createNewTransaction, createTransaction } from "../../../graphql-optimized/mutations";
import "./Home.modules.css";

// const spaces = ["Lasers", "E1", "E2", "DFAB", "Workshop", "HQ", "Idea Lab"];
const spaces = ["HQ"];

const Home = () => {
	const user = useContext(UserContext);

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

	const [userLocation, setUserLocation] = useState("");
	const [helpDeskComment, setHelpDeskComment] = useState("");

	const [machineLocation, setMachineLocation] = useState("");
	const [machineName, setMachineName] = useState("");
	const [machinePosition, setMachinePosition] = useState("");
	const [machineComment, setMachineComment] = useState("");
	const [errMessage, setErrMessage] = useState("");

	useLayoutEffect(() => {
		if (!user) return;
		fetchUserInfo();
		setCheckedIn(user.signInStatus);
	}, [user]);

	const fetchUserInfo = async () => {
		const currReservations = user.reservations ? user.reservations.items : [];

		currReservations.sort((res1, res2) => (res1.time >= res2.time ? 1 : -1));

		// A dictionary of the user's current reservations
		let myRes = {};
		// A dictionary of the workstations for the user's reservations
		let myResLocations = {};
		// A dictionary of the IDs for the user's reservations
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

		if (user.signInStatus) {
			if (!hasCurrRes && lastRes === 0) {
				// -------------------------------------------------
				// Signed in but don't any current reservation or
				// history of reservations This is a fluke, so sign them out
				// -------------------------------------------------
				checkOut();
				setCheckedIn(false);
			} else {
				setCheckedIn(user.signInStatus);
			}
		}
		// ---------------------------------------------------------------
		// If user.conductStatus >= 5, this means a
		// student has so many strikes they are no longer allowed in the space
		// ---------------------------------------------------------------
		if (user.conductStatus && user.conductStatus >= 5) setHasConductProb(true);
	};

	const cancelReservation = async (groupId, workstation) => {
		const resIds = myReservationIds[groupId];

		let results = await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					transactionType: "Cancel Reservation",
					staffUserId: "tiw",
					userId: user.eid,
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
		window.location.reload();
	};

	const checkOut = async () => {
		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					transactionType: "Sign Out",
					staffUserId: "tiw",
					userId: user.eid,

					// TODO ----------------------------------------------
					// TODO I Don't know how to make this a querying value
					// TODO ----------------------------------------------

					tools: [user.workstation.id],
					transactionStatus: "Finished",
				},
			},
		});

		setCheckedIn(false);
		setShowModalCheckOutThanks(true);
	};

	const checkIn = async () => {
		let currentReservation = myReservations[mostRecentReservation];
		let times =
			moment.unix(currentReservation[0] / 1000).format("h:mm") +
			" - " +
			moment.unix(currentReservation[currentReservation.length - 1] / 1000 + 1800).format("h:mm A");
		await API.graphql({
			query: createTransaction,
			variables: {
				input: {
					transactionType: "Sign In",
					staffUserId: "tiw",
					userId: user.eid,
					requests: [
						myReservationLocations[mostRecentReservation]?.id,
						myReservationLocations[mostRecentReservation]?.name,
						times,
					],
					transactionStatus: "Processing",
				},
			},
		}).then(() => (user.signInStatus = true));

		setShowModalCheckInThanks(true);
	};

	const requestHelp = async () => {
		await API.graphql({
			query: createTransaction,
			variables: {
				input: {
					transactionType: "Student Request",
					staffUserId: "tiw",
					userId: user.eid,
					transactionStatus: "Processing",
					transactionComment: `Need technician's help. Visit ${user.firstName} ${
						user.lastName
					} at ${user.workstation.name ?? userLocation}. Problem: ${helpDeskComment}`,
				},
			},
		});
		setShowModalHelpComment(false);
		setShowModalHelpDesk(true);
	};

	// TODO --------------------------------------------------
	// TODO Please use a dictionary to manage all these states
	// TODO --------------------------------------------------

	const cancelHelp = () => {
		setHelpDeskComment("");
		setShowModalHelpComment(false);
		setUserLocation("");
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
					staffUserId: "tiw",
					userId: user.eid,
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
		<div>
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
				<br></br>
				<a
					href="https://docs.google.com/forms/d/1gztFI8w8DSIN6rPzYO6QESYM1MYxBPWkm1UVxrjwN3E"
					rel="noopener noreferrer"
					target="_blank"
					style={{ color: "#bf5700", textDecoration: "underline" }}>
					<h3>{"Submit a 3D Print File"}</h3>
				</a>
			</label>

			<h3>Our Hours</h3>
			<label>Monday - Friday</label>
			<br></br>
			<label>12am - 6pm</label>
			<br></br>

			<div className="sectionList">
				<Section>
					<h2>Announcements</h2>
					<p>
						{shop?.studentMessage?.split("\\n").map((line, i) => (
							<div key={"x" + i}>{line}</div>
						))}
					</p>
					<div className="App-logo">
						<img src={logo} alt="logo" />
					</div>
				</Section>
				<Section>
					<h2>My Dashboard</h2>
					<label>
						Status:
						<label style={user?.signInStatus ? { color: "green" } : { color: "red" }}>
							{" "}
							{user?.signInStatus ? "Checked In" : "Checked Out"}
						</label>
					</label>
					{hasCurrReservation && (
						<div>
							Check in for your reservation
							<br></br>
							<h3>{myReservationLocations[mostRecentReservation]?.name}</h3>
							<h3>
								{moment
									.unix(myReservations[mostRecentReservation][0] / 1000)
									.format("MMMM DD h:mm A")}{" "}
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
							</h3>
							<button className="large" onClick={checkIn}>
								Check In
							</button>
						</div>
					)}
					{checkedIn &&
						(hasCurrReservation ? (
							<div>
								<button className="large" onClick={checkOut}>
									Check Out
								</button>
							</div>
						) : (
							<div>
								<h4 style={{ color: "red" }}>Your reservation has expired. Please check out!</h4>
								<label>{myReservationLocations[mostRecentReservation].name}: </label>
								{moment
									.unix(myReservations[mostRecentReservation][0] / 1000)
									.format("MMMM DD h:mm A")}{" "}
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
								<br></br>
								<button className="large" onClick={checkOut}>
									Check Out
								</button>
							</div>
						))}
				</Section>

				<Section>
					<h2>My Reservations</h2>
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
											hasConductProb={user.conductStatus >= 4}
											canCancel={true}
											group={group}
											times={times}
											currTime={currTime}
											user={user.eid}
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
					<h2>Help Desk</h2>
					<a
						href="https://docs.google.com/forms/d/1gztFI8w8DSIN6rPzYO6QESYM1MYxBPWkm1UVxrjwN3E"
						rel="noopener noreferrer"
						target="_blank"
						style={{ color: "#bf5700", textDecoration: "underline" }}>
						<h3>{"Submit a 3D Print File"}</h3>
					</a>
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
					<h1>Please proceed to the front desk to finish checking in!</h1>
					<p>
						A staff user will confirm your reservation and let you in. Don't forget to check out
						when you're done!
					</p>
					<br></br>
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
						window.location.reload();
					}}
					confirmText="Done">
					<h1>Thanks for checking out</h1>
					<p>We can't wait to see you again!</p>
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
					{user.workstation.name ?? (
						<div>
							<label>Where are you located?</label>
							<input
								type="string"
								value={userLocation}
								onChange={(event) => setUserLocation(event.target.value)}
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
						{user.workstation.name ?? userLocation}!
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
