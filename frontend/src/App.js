import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth/Auth";
import RegisterPage from "./Pages/Auth/Register";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/auth-context";

import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";

import "@aws-amplify/ui/dist/style.css";
import awsExports from "./aws-exports";
import {
	AmplifyAuthenticator,
	AmplifySignOut,
	AmplifySignIn,
	AmplifySignUp,
} from "@aws-amplify/ui-react";

import "./App.css";
Amplify.configure(awsExports);

const App = () => {
	// ____ Context____
	const [auth, setAuth] = useState({ token: null, member: null });

	const authValue = { auth, setAuth };
	return (
		// TODO Replace "AuthContext" with Apollo context because it already stores the auth stuff

		<BrowserRouter>
			<React.Fragment>
				<AmplifyAuthenticator>
					<AmplifySignIn
						className="auth"
						headerText="Welcome to Texas Inventionworks!"
						slot="sign-in"
					/>
					<AmplifySignUp className="auth" headerText="Sign Up to Become a Member" slot="sign-up" />

					<NavBar />
					<Switch>
						<Redirect from="/" to="/staff" exact />
						<Route path="/staff" component={StaffPortal} />
					</Switch>
					<Footer />
				</AmplifyAuthenticator>
			</React.Fragment>
		</BrowserRouter>
	);
};

// export default withAuthenticator(App, { usernameAttributes: "eid" });
export default App;
