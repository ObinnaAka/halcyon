import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/user-context";
import Modal from "../../../components/Modal/Modal";

const Print = () => {
	const user = useContext(UserContext);
	const [checkedIn, setCheckedIn] = useState(false);
	const rules = [
		"Prints must be submitted from HQ within TIW",
		"You must upload both a .gcode file and an .stl",
		"Prints over 4 hours require additional staff approval.",
	];
	const [accepted, setAccepted] = useState(false);

	return (
		<div>
			{!accepted && (
				<Modal canConfirm onConfirm={() => setAccepted(true)} confirmText="Accept">
					<h1>3D Print Submission Terms and Conditions:</h1>
					<ol>
						{rules.map((rule) => (
							<li key={rule}>{rule}</li>
						))}
					</ol>
					<h3>You will be notified via email when your print is ready for pickup</h3>
				</Modal>
			)}
			<h3>The following form is to submit prints to be printed on our Craftbot machines. </h3>

			<a
				href="https://docs.google.com/forms/d/1gztFI8w8DSIN6rPzYO6QESYM1MYxBPWkm1UVxrjwN3E"
				rel="noopener noreferrer"
				target="_blank"
				style={{ color: "#bf5700", textDecoration: "underline" }}>
				<h3>{"Submit a 3D Print File"}</h3>
			</a>
		</div>
	);
};

export default Print;
