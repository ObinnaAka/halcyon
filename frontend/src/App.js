import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import AuthPage from "./Pages/Auth";
import StaffPortal from "./Pages/StaffPortal/StaffPortal"

import "./App.css";
import logo from "./images/tiw_logo.png";
import { SectionButton } from "./components";
import Clock from "react-live-clock";
import { Scrollbars } from "react-custom-scrollbars";
import StudentRequests from "./Pages/StudentRequests/StudentRequests";

function App() {
	return (
		<BrowserRouter>
			<Redirect from="/" to="/auth"/>
			<Route path="/auth" component={AuthPage} />
			<Route path="/staffportal" component={StaffPortal} />
		</BrowserRouter>
	);
}

export default App;
