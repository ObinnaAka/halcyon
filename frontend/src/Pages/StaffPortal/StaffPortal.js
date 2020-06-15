import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import logo from "../../images/tiw_logo.png";
import "./StaffPortal.css";
import { SectionButton } from "../../components";
import Clock from "react-live-clock";
import { Scrollbars } from "react-custom-scrollbars";
import StudentRequests from "./StudentRequests/StudentRequests";
import SignedInStudents from "./SignedInStudents/SignedInStudents";

function App() {
	const sections = {
		"Student Requests": "/staff/requests",
		"Signed-in Students": "/staff/students",
		"Checked-out Tools": "/staff/toolcheckout",
		"Transaction History": "/staff/transactions",
		"Maintenance Request": "/staff/maintenance",
		"TIW Wiki and Help": "/staff/wiki",
	};

	return (
		<div className="page">
			<div className="info-bar">
				<h1>Staff Portal</h1>
			</div>
			<div className="main-view">
				<Scrollbars className="right-scroll">
					<nav className="right-view">
						{Object.entries(sections).map(([section, route]) => (
							<SectionButton sectionName={section} route={route} />
						))}
					</nav>
				</Scrollbars>
				{/* These scroll views are being used to replace the ugly default scroll bar*/}
				<Scrollbars className="left-scroll">
					{/* This is where the different pages will be rendered, e.g.
					Student Requests.*/}
					<div className="left-view">
						<Route path="/staff/requests" component={StudentRequests} />
						<Route path="/staff/students" component={SignedInStudents} />
					</div>
				</Scrollbars>
			</div>
		</div>
	);
}

export default App;
