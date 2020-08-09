import React, { useState, useLayoutEffect, useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { AuthContext } from "./context/auth-context";

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
	AmplifyAuth0Button,
} from "@aws-amplify/ui-react";

import "./App.css";
Amplify.configure(awsExports);

//--------------------------------------------------------------------
// References
// https://medium.com/hackernoon/how-to-add-new-cognito-users-to-dynamodb-using-lambda-e3f55541297c
//--------------------------------------------------------------------

const logger = new Logger("My-Logger");

const App = () => {
	const [member, setMember] = useState("tiw");

	const auth = useContext(AuthContext);

	useLayoutEffect(() => {
		getUser();
		Hub.listen("auth", (data) => {
			const event = data.payload.event;
			const message = data.payload.message;
			logger.info("-", event);
			switch (event) {
				case "signIn":
					logger.info(message);
					getUser();
					console.log(auth);
					break;
				case "signUp":
					logger.error("user signed up");
					// createUser();
					break;
				case "cognitoHostedUI":
					logger.info(message);
					getUser();
					break;
				case "signOut":
					logger.info(message);
					// setAuth(null);
					break;
				case "oAuthSignOut":
					logger.info(message);
					// setAuth(null);
					break;
				case "signIn_failure":
					logger.error(message);
					break;
				case "cognitoHostedUI_failure":
					logger.error(message);
					// setFailure(message);
					break;
				default:
					logger.warn(message);
					break;
			}
		});
		// getUser().then((userData) => setAuth(userData));
	}, []);

	const getUser = async () => {
		let eid = await Auth.currentAuthenticatedUser()
			// .then((userData) => {
			// 	console.log(userData.attributes);
			// 	return userData.username;
			// })
			.then((userData) => userData.username)
			.catch(() => console.log("Not signed in"));

		setMember(eid);
		// let member = await API.graphql({
		// 	query: createMember,
		// 	variables: {
		// 		eid: eid,
		// 	},
		// });

		// setAuth(member.data.getMember);
		// return member.data.getMember;
	};

	return (
		<BrowserRouter>
			<AuthContext.Provider value={member}>
				<React.Fragment>
					<AmplifyAuthenticator>
						<AmplifySignIn
							className="auth"
							headerText="Welcome to Texas Inventionworks!"
							slot="sign-in"
							formFields={[
								{
									type: "username",
									label: "EID",
									placeholder: "UT EID",
									required: true,
								},
								{
									type: "password",
									label: "Password",
									placeholder: "Password",
									required: true,
								},
							]}
						/>
						<AmplifySignUp
							className="auth"
							headerText="TIW Staff Sign Up Page"
							slot="sign-up"
							formFields={[
								{
									type: "username",
									label: "EID *",
									placeholder: "UT EID",
									required: true,
								},
								{
									type: "password",
									label: "Password *",
									placeholder: "Password",
									required: true,
								},
								{
									type: "email",
									label: "Email",
									placeholder: "elon.musk@utexas.edu",
									required: true,
								},
								{
									type: "given_name",
									label: "First Name *",
									placeholder: "First Name",
									required: true,
								},
								{
									type: "family_name",
									label: "Last Name *",
									placeholder: "Last Name",
									required: true,
								},
								{
									type: "phone_number",
									label: "Phone",
									placeholder: "Phone ",
									required: false,
								},
							]}
						/>

						<NavBar />
						<Switch>
							<Redirect from="/" to="/staff/" exact />
							<Route path="/staff/" component={StaffPortal} />
						</Switch>
						<Footer />
					</AmplifyAuthenticator>
				</React.Fragment>
			</AuthContext.Provider>
		</BrowserRouter>
	);
};

export default App;
