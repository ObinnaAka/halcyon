import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect from="/" to="/auth" exact/>
				<Route path="/auth" component={AuthPage} />
				<Route path="/staff" component={StaffPortal} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
