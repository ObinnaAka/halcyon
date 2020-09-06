import React, { useState, useEffect } from "react";
import { TimeSlot } from "..";
import moment from "moment";
import "./DaySlot.modules.css";

const DaySlot = ({
	date,
	timeLength = 1800000,
	endTime = date + 80000000,
	startTime = date + 32400000,
	workstationReservations,
	myReservations,
	index,
	active,
	setDay,
	setReservations,
}) => {
	const [times, setTimes] = useState([]);
	const [firstTimeSlot, setFirstTimeSlot] = useState(0);
	const [lastTimeSlot, setLastTimeSlot] = useState(0);

	useEffect(() => {}, [times]);

	const setActiveDay = (newTimes) => {
		let slot = Math.min.apply(Math, newTimes);
		let endTime = Math.max.apply(Math, newTimes);

		setFirstTimeSlot(slot);

		setDay(index);

		let timeSlots = [];
		while (slot <= endTime) {
			if (
				workstationReservations.includes(slot.toString()) ||
				myReservations.includes(slot.toString())
			) {
				alert(
					"A time in your current reservation is already reserved. Please change your selection"
				);
				setLastTimeSlot(Math.max(firstTimeSlot, lastTimeSlot));
				setFirstTimeSlot(Math.min(firstTimeSlot, lastTimeSlot));
				return;
			}
			timeSlots.push(slot);
			slot = slot + timeLength;
		}

		setLastTimeSlot(endTime);
		console.log(timeSlots);

		setTimes(timeSlots);
		setReservations(timeSlots);
	};

	const addTimeSlot = (between = false, reservation) => {
		let newTimes;

		// ------------------------------
		// First time slot selection
		// ------------------------------
		if (!firstTimeSlot || !lastTimeSlot) {
			newTimes = [reservation];
			setFirstTimeSlot(reservation);
			setLastTimeSlot(reservation);
		}
		// ------------------------------
		// Select slot last time slot or less
		// ------------------------------
		else if (reservation === firstTimeSlot && firstTimeSlot === lastTimeSlot) {
			setFirstTimeSlot(0);
			setLastTimeSlot(0);
			newTimes = [];
		}
		// ------------------------------
		//  Click on first time slot
		// ------------------------------
		else if (reservation === firstTimeSlot) {
			newTimes = [lastTimeSlot];
		} else if (reservation === lastTimeSlot) {
			newTimes = [firstTimeSlot];
		} else {
			newTimes = [firstTimeSlot, reservation];
			console.log("5");
		}
		setActiveDay(newTimes);
	};

	let timeSlots = [];
	let slot = startTime;

	while (slot < endTime) {
		timeSlots.push(slot);
		slot = slot + timeLength;
	}

	const d = moment(date);

	return (
		<div
			className={
				d.day() === 5
					? `dayslot end-of-week ${active ? "current" : ""}`
					: `dayslot ${active ? "current" : ""}`
			}>
			<h2>{d.format("ddd")}</h2>
			<h5>{d.format("MMM D")}</h5>
			{timeSlots.map((startDate) => {
				return (
					<TimeSlot
						key={startDate}
						start={startDate}
						timeLength={timeLength}
						dayActiveState={active}
						addTimeSlot={addTimeSlot}
						firstTimeSlot={firstTimeSlot}
						lastTimeSlot={lastTimeSlot}
						workstationReservations={workstationReservations}
						myReservations={myReservations}
						times={times}
					/>
				);
			})}
		</div>
	);
};

export default DaySlot;
