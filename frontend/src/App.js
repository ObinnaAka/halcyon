import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth/Auth";
import RegisterPage from "./Pages/Auth/Register";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/auth-context";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";
import { createMember } from "./graphql/mutations";
import { listMembers } from "./graphql/queries";

import "./App.css";
Amplify.configure(awsExports);

const App = (Apollo) => {
	// ____ Context____
	const [auth, setAuth] = useState({ token: null, member: null });

	const authValue = { auth, setAuth };
	return (
		// TODO Replace "AuthContext" with Apollo context because it already stores the auth stuff
		<BrowserRouter>
			<React.Fragment>
				<NavBar />
				<Switch>
					{auth.token ? (
						<Redirect from="/" to="/staff" exact />
					) : (
						<Redirect from="/" to="/auth" exact />
					)}
					<Route path="/auth" component={AuthPage} />
					<Route path="/staff" component={StaffPortal} />
					<Route path="/register" component={RegisterPage} />
				</Switch>
				<Footer />
			</React.Fragment>
		</BrowserRouter>
	);
};

export default App;
