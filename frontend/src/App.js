import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthContext from "/context/auth-context";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<AuthContext.Provider>
					<NavBar />
					<Switch>
						<Redirect from="/" to="/auth" exact />
						<Route path="/auth" component={AuthPage} />
						<Route path="/staff" component={StaffPortal} />
					</Switch>
					<Footer />
				</AuthContext.Provider>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
