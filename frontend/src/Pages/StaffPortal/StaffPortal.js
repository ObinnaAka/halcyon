import React from "react";
import { BrowserRouter } from "react-router-dom";
import logo from "./images/tiw_logo.png";
import "./App.css";
import { SectionButton } from "./components";
import Clock from "react-live-clock";
import { Scrollbars } from "react-custom-scrollbars";
import StudentRequests from "./Pages/StudentRequests/StudentRequests";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Clock
					className="App-clock"
					format={"HH:mm"}
					ticking={true}
					timezone={"US/Central"}
				/>
			</header>
			<div className="info-bar">
				<h1>Staff Portal</h1>
			</div>
			<div className="main-view">
				<Scrollbars className="right-scroll">
					<div className="right-view">
						<SectionButton sectionName="Student Requests" />
						<SectionButton sectionName="Checked-in Students" />
						<SectionButton sectionName="Checked-out Tools" />
						<SectionButton sectionName="Transaction History" />
						<SectionButton sectionName="Maintenance Request" />
						<SectionButton sectionName="TIW Wiki and Help" />
					</div>
				</Scrollbars>
				{/* These scroll views are being used to replace the ugly default scroll bar*/}
				<Scrollbars className="left-scroll">
					{/* This is where the different pages will be rendered, e.g.
					Student Requests.*/}
					<div className="left-view">
						<BrowserRouter>
							<Route path="/" component={null} />
							<StudentRequests />
						</BrowserRouter>
					</div>
				</Scrollbars>
			</div>
			<div className="footer">Version 0.1 Jun 5th, 2020 - Obinna</div>
		</div>
	);
}

export default App;
