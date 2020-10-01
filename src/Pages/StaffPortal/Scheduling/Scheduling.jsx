//--------------------------------------------
// SCHEDULING
//--------------------------------------------

import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { ShopContext, UserContext } from "../../../context";
import { DaySlot, Modal } from "../../../components";
import { API } from "aws-amplify";
import { listTools, getTool } from "../../../graphql-optimized/queries";
import { Scrollbars } from "react-custom-scrollbars";
import { createNewTransaction } from "../../../graphql-optimized/mutations";
import moment from "moment";

import "./Scheduling.modules.css";

const StudentRequests = () => {
	//-------------------------------------------------------
	// STATE MANAGEMENT
	//-------------------------------------------------------

	const [reservations, setReservations] = useState([]);
	const [myReservations, setMyReservations] = useState([]);
	const [workstations, setWorkstations] = useState([]);
	const [currentWorkstation, setCurrentWorkstation] = useState("");
	const [day, setDay] = useState(0);
	const [schedulingErr, setSchedulingErr] = useState(null);

	const confirmErrModal = () => {
		setSchedulingErr(null);
	};

	const user = useContext(UserContext);
	const shop = useContext(ShopContext);

	useLayoutEffect(() => {
		fetchWorkstations();
	}, []);
	useLayoutEffect(() => {
		if (!user) return;
		if (!user.reservations) return;

		let myReservations = [];
		user.reservations.items.map((reservation) => {
			myReservations.push(reservation.time);
		});
		setMyReservations(myReservations);
	}, [user]);

	let timeLength = 1800000;

	//-------------------------------------------------------
	// TALKING TO SERVERS
	//-------------------------------------------------------

	//--------------------------------------------
	// Get list of workstations and their current
	// reservations
	//--------------------------------------------
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
		});
	};

	const makeReservation = async () => {
		if (!currentWorkstation.id) {
			alert("Please select a workstation");
			return;
		}

		if (!reservations.length) {
			alert("Please select a time");
			return;
		}

		let selectedWorkstation = await API.graphql({
			query: getTool,
			variables: {
				id: currentWorkstation.id,
			},
		})
			.then((workstation) => {
				let workstationReservations = [];
				workstation.data.getTool.reservations.items.map((reservation) => {
					workstationReservations.push(reservation.time);
				});
				return workstationReservations;
			})
			.catch((err) => {
				console.log(err);
			});

		if (
			reservations.filter((reservation) => selectedWorkstation?.includes(reservation.toString()))
				.length
		) {
			setSchedulingErr(
				"Sorry this reservation is no longer available, please select a new time slot"
			);
			return;
		}

		let tools = [currentWorkstation.id];

		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					userId: user.eid,
					staffUserId: "tiw",
					tools: tools,
					reservationSlots: reservations,
					transactionType: "Create Reservation",
					transactionStatus: "Pending",
				},
			},
		})
			.then((confirmation) => {
				setSchedulingErr("Reservation Confirmed!");
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			})
			.catch((err) => {
				setSchedulingErr(
					"Sorry, there was an error making your reservation. Please try again or talk to a staff user"
				);
			});
	};

	// -----------------------------------------------
	// Number of days ahead that students can reserve
	// -----------------------------------------------
	let numDays = 7;

	let newDate;
	let dates = [];
	let i;
	for (i = 0; i < numDays; i++) {
		newDate = new Date().setHours(i * 24, 0, 0, 0);
		// -----------------------------------
		// Remove Saturday and Sunday
		// -----------------------------------
		if (moment(newDate).day() !== 0 && moment(newDate).day() !== 6) {
			dates.push(newDate);
		}
	}

	return (
		<div>
			<h3>
				{reservations.length
					? reservations[0]
						? moment(Math.min.apply(Math, reservations)).format("ddd  DD MMM h:mm A") +
						  " - " +
						  moment(Math.max.apply(Math, reservations) + timeLength).format("h:mm A")
						: "No time selected"
					: "No time selected"}
			</h3>
			<div>
				<label style={{ margin: "1vh" }} className="selector-label" htmlFor="transactionType">
					Workstation:
				</label>
				<select
					style={{ margin: "auto" }}
					className="selector"
					defaultValue=""
					onChange={(event) => setCurrentWorkstation(workstations[event.target.value])}>
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
							<option key={index} value={index}>
								{workstation.name}
							</option>
						);
					})}
				</select>

				<button style={{ margin: "1vh" }} type="submit" onClick={makeReservation}>
					Reserve!
				</button>
			</div>

			{currentWorkstation ? (
				<div className="scheduling">
					{dates.map((date, index) => {
						return (
							<DaySlot
								key={date}
								date={date}
								startTime={date + shop.openingTime}
								// startTime={date}
								endTime={date + shop.closingTime}
								// endTime={date + 84000000}
								index={index}
								setDay={setDay}
								setReservations={setReservations}
								active={day === index}
								workstationReservations={currentWorkstation ? currentWorkstation.reservations : []}
								myReservations={myReservations}
							/>
						);
					})}
				</div>
			) : (
				"Please Select a Workstation"
			)}
			{schedulingErr && (
				<Modal canConfirm onConfirm={confirmErrModal} confirmText="Okay!">
					<h3>{schedulingErr}</h3>
				</Modal>
			)}
		</div>
	);
};

export default StudentRequests;
