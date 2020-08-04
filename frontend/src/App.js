import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth/Auth";
import RegisterPage from "./Pages/Auth/Register";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/auth-context";

import Amplify, { API, Hub, Logger, Auth } from "aws-amplify";
import { getMember } from "./graphql/queries";
import { createMember } from "./graphql/mutations";

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

const logger = new Logger("My-Logger");
const getUser = async () => {
	let member = await Auth.currentAuthenticatedUser()
		.then((userData) => userData.username)

		// .then((userData) => setAuth(userData.username))
		.catch(() => console.log("Not signed in"));
	return member;
};

const App = () => {
	// ____ Context____
	const [auth, setAuth] = useState(() => getUser());

	useEffect(() => {
		getUser();
		Hub.listen("auth", (data) => {
			const event = data.payload.event;
			const message = data.payload.message;
			logger.info("-", event);
			switch (event) {
				case "signIn":
					logger.info(message);
					getUser();
					break;

				case "signUp":
					logger.error("user signed up");
					break;
				case "cognitoHostedUI":
					logger.info(message);
					getUser();
					break;
				case "signOut":
					console.log("Here ", auth);
					logger.info(message);
					setAuth(null);
					break;
				case "oAuthSignOut":
					logger.info(message);
					setAuth(null);
					break;
				case "signIn_failure":
					logger.error(message);
					break;
				case "cognitoHostedUI_failure":
					logger.error(message);
					// setFailure(message);
					break;
				case "configured":
					logger.info(message);
					break;
				case "parsingCallbackUrl":
					logger.info(message);
					break;
				case "codeFlow":
					logger.info(message);
					break;
				default:
					logger.warn(message);
					break;
			}
		});
		// getUser().then((userData) => setAuth(userData));
	}, []);

	const createUser = async () => {
		// !!!
		// let eid = Auth.currentAuthenticatedUser()
		// 	.then((userData) => {
		// 		console.log(userData.username);
		// 		return userData.username;
		// 	})
		// 	.catch(() => console.log("Not signed in"));
		// setAuth(eid);
		// let member = await API.graphql({
		// 	query: createMember,
		// 	variables: {
		// 		eid: eid,
		// 	},
		// });
		// return member.data.getMember.eid;
		// return eid;
	};
	const authValue = { auth, setAuth };
	return (
		<AuthContext.Provider value={authValue}>
			<BrowserRouter>
				<React.Fragment>
					<AmplifyAuthenticator>
						<AmplifySignIn
							className="auth"
							headerText="Welcome to Texas Inventionworks!"
							slot="sign-in"
						/>
						<AmplifySignUp
							className="auth"
							headerText="Sign Up to Become a Member"
							slot="sign-up"
						/>

						<NavBar />
						<Switch>
							<Redirect from="/" to="/staff" exact />
							<Route path="/staff" component={StaffPortal} />
						</Switch>
						<Footer />
					</AmplifyAuthenticator>
				</React.Fragment>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
