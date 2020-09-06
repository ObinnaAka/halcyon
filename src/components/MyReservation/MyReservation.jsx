import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import moment from "moment";
import React, { useEffect, useState, useContext } from "react";
import styles from "./MyReservation.modules.css";
import { API } from "aws-amplify";
import { MemberContext } from "../../context/member-context";
import { createNewTransaction, createTransaction } from "../../graphql-optimized/mutations";

const MyReservation = ({
	canCheckOut,
	checkingOut,
	isPast,
	group,
	canCancel,
	hasConductProb,
	cancelReservation,
	setShowModalConduct,
	myReservationLocations,
	checkInConfirmation,
	times,
}) => {
	const member = useContext(MemberContext);

	const [open, setOpen] = useState(false);
	const [canCheckIn, setCanCheckIn] = useState(
		Math.abs(moment.duration(moment().diff(moment.unix(times[0] / 1000))).asMinutes()) <= 15 &&
			!member.signInStatus
	);

	times =
		moment.unix(times[0] / 1000).format("h:mm") +
		" - " +
		moment.unix(times[times.length - 1] / 1000 + 1800).format("h:mm A");

	const checkingIn = (workstation) => {
		if (hasConductProb) {
			setShowModalConduct(true);
			return;
		}
		console.log(workstation);
		API.graphql({
			query: createTransaction,
			variables: {
				input: {
					memberId: member.eid,
					staffMemberId: "tiw",
					transactionType: "Sign In",
					requests: workstation,
					transactionStatus: "Processing",
				},
			},
		})
			.then((res) => console.log(res))
			.catch((err) => console.log(err.message));

		checkInConfirmation();
		// window.location.reload();
		// setCheckedIn(true);
		// setShowModalCheckInThanks(true);
	};

	const handleItemClick = () => {
		console.log(moment.duration(moment().diff(moment.unix(times[0]) / 1000)).asMinutes());
		console.log(canCheckIn);
		setOpen(!open);
	};
	return isPast ? (
		times ? (
			<div className="item" style={{ backgroundColor: "#cc0000", padding: "0px" }}>
				<List className="list">
					<React.Fragment>
						<ListItem button onClick={handleItemClick}>
							<ListItemText className="title" primary={myReservationLocations[group].name} />
							<ListItemText
								className="title"
								primary={moment.unix(times[0] / 1000).format("MMM DD")}
							/>
							<ListItemText className="range" primary={times} />

							{canCheckOut && (
								<button
									className="small"
									onClick={(event) => {
										event.stopPropagation();
										checkingOut();
									}}
									style={{ borderColor: "#f5fffa", border: "2px solid" }}>
									Check Out
								</button>
							)}
						</ListItem>
						{canCancel && (
							<Collapse in={open} timeout="auto" unmountOnExit>
								<div className="expanded">
									<ListItem className={styles.nested}>
										<button
											className="large"
											onClick={(event) => {
												event.stopPropagation();
												cancelReservation();
											}}>
											Cancel Reservation
										</button>
									</ListItem>
								</div>
							</Collapse>
						)}
					</React.Fragment>
				</List>
			</div>
		) : null
	) : times ? (
		<div>
			<div className="item">
				<List className="list">
					<React.Fragment>
						<ListItem button onClick={handleItemClick}>
							<ListItemText className="title" primary={myReservationLocations[group].name} />
							<ListItemText
								className="title"
								primary={moment.unix(times[0] / 1000).format("MMM DD")}
							/>
							<ListItemText className="range" primary={times} />

							{!(canCheckIn || canCheckOut) && (open ? <ExpandLess /> : <ExpandMore />)}

							{canCheckOut && (
								<button
									className="small"
									onClick={(event) => {
										event.stopPropagation();
										checkingOut();
									}}>
									Check Out
								</button>
							)}
						</ListItem>
						{!canCheckIn && !canCheckOut && (
							<Collapse in={open} timeout="auto" unmountOnExit>
								<div className="expanded">
									<ListItem className={styles.nested}>
										<button
											className="large"
											onClick={(event) => {
												event.stopPropagation();
												cancelReservation(group);
											}}>
											Cancel Reservation
										</button>
									</ListItem>
								</div>
							</Collapse>
						)}
					</React.Fragment>
				</List>
			</div>
			<div>
				{/* {canCheckIn && ( */}
				<button
					className="large"
					onClick={(event) => {
						event.stopPropagation();
						checkingIn([
							myReservationLocations[group].id,
							myReservationLocations[group].name,
							times,
						]);
					}}>
					Check In
				</button>
				{/* )} */}
			</div>
		</div>
	) : null;
};

export default MyReservation;
