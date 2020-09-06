import React, { useState, useEffect } from "react";
import moment from "moment";
import "./TimeSlot.modules.css";

const TimeSlot = ({
	start,
	timeLength,
	dayActiveState,
	addTimeSlot,
	firstTimeSlot,
	lastTimeSlot,
	workstationReservations,
	myReservations,
	times,
}) => {
	const [active, setActive] = useState(false);
	const [reserved, setReserved] = useState(false);
	const [between, setBetween] = useState(false);

	useEffect(() => {
		setBetween(start >= firstTimeSlot && start <= lastTimeSlot);

		if (
			workstationReservations.includes(start.toString()) ||
			myReservations.includes(start.toString()) ||
			Date.now() - 900000 > start
		) {
			setReserved(true);
			setActive(false);
		} else if (!between) {
			// console.log(moment(start).format("H:mm A"));
			setActive(false);
		}

		return () => {
			setReserved(false);
		};
	}, [times, workstationReservations, between]);

	useEffect(() => {
		setActive(between);
	}, [between]);

	const toggleClick = () => {
		addTimeSlot(between, start);
		console.log(
			`small timeslot ${active && "active"} ${dayActiveState && active && "dayActive"} ${
				start === firstTimeSlot && "start"
			}`
		);
	};
	return (
		<div>
			{reserved ? (
				<button className="small inactive">{moment(start).format("h:mm A")}</button>
			) : (
				<button
					className={`small timeslot ${active && "active"} 
					${dayActiveState && active && "dayActive"} 
					${dayActiveState && start === firstTimeSlot && "start"} 
					${dayActiveState && start === lastTimeSlot && "end"}`}
					onClick={() => toggleClick()}>
					{moment(start).format("h:mm A")}
				</button>
			)}
		</div>
	);
};

export default TimeSlot;
