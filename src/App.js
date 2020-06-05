import React from "react";
import logo from "./images/tiw_logo.png";
import "./App.css";
import { SectionButton } from "./components";
import Clock from "react-live-clock";
import { Scrollbars } from "react-custom-scrollbars";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
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
					<div className="left-view"></div>
				</Scrollbars>
			</div>
			<div className="footer">Version 0.1 Jun 5th, 2020 - Obinna</div>
		</div>
	);
}

export default App;
