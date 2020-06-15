import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<NavBar />
				<Switch >
					<Redirect from="/" to="/auth" exact />
					<Route path="/auth" component={AuthPage} />
					<Route path="/staff" component={StaffPortal} />
				</Switch>
				<Footer/>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
