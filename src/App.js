import {
	AmplifyAuthenticator,
	AmplifyConfirmSignIn,
	AmplifyConfirmSignUp,
	AmplifySignIn,
	AmplifySignUp,
	AmplifyFederatedSignIn,
	AmplifyAuth0Button,
	AmplifySignInButton,
	AmplifyFederatedButtons,
	AmplifySignOut,
	withAuthenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui/dist/style.css";
import Amplify, { API, Auth, Hub, Logger } from "aws-amplify";
import React, { useLayoutEffect, useState, useContext } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import awsExports from "./aws-exports";
import { Footer } from "./components";
import { UserContext, ShopContext } from "./context";
import { getUser, getShop } from "./graphql-optimized/queries";
import { AuthPage } from "./Pages/";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import StudentPortal from "./Pages/StudentPortal/StudentPortal";

Amplify.configure(awsExports);

//--------------------------------------------------------------------
// References
// https://medium.com/hackernoon/how-to-add-new-cognito-users-to-dynamodb-using-lambda-e3f55541297c
//--------------------------------------------------------------------

const logger = new Logger("My-Logger");

const App = () => {
	const shopContext = useContext(ShopContext);
	const user = useContext(UserContext);

	// const [user, setUser] = useState(null);
	const [shop, setShop] = useState({ openingTime: 43200000, closingTime: 64800000 });
	const [username, setUsername] = useState("");

	// const user = useContext(UserContext);

	useLayoutEffect(() => {
		getUser();
		getShopDetails();
		Hub.listen("auth", async (data) => {
			const event = data.payload.event;
			const message = data.payload.message;
			console.log(event);
			switch (event) {
				case "signIn":
					logger.info(message);
					console.log(data);
					console.log("1");
					await getUser();
					break;

				case "signUp":
					console.log(data);
					logger.error("user signed up");
					break;
				case "cognitoHostedUI":
					logger.info(message);
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
	}, []);

	const getUser = async () => {
		let user = await Auth.currentAuthenticatedUser()
			.then((userData) => {
				console.log(userData);
				return userData;
			})
			.catch(() => console.log("Not signed in"));

		if (user) {
			let eid = user.username;
			let groups = user.signInUserSession.idToken.payload["cognito:groups"];
			console.log(groups);
			let user = await API.graphql({
				query: getUser,
				variables: {
					eid: eid,
				},
			});

			let fetchedUser = { ...user.data.getUser, groups };

			// setUser(fetchedUser);
			console.log(fetchedUser);
		}
	};

	const getShopDetails = async () => {
		let shop = await API.graphql({
			query: getShop,
			variables: {
				id: "tiw",
			},
		});
		setShop(shop.data.getShop);
	};
	// const MyTheme = {
	// 	AmplifyConfirmSignUp: { 'color': 'green' },
	// 	googleSignInButton: { 'backgroundColor': 'red', 'borderColor': 'red' }
	// }

	// <Authenticator theme={MyTheme} />
	return (
		<BrowserRouter>
			<ShopContext.Provider value={shop}>
				<UserContext.Provider value={user}>
					<React.Fragment>
						<Switch>
							<Redirect from="/" to="/auth/" exact />
							<Route path="/auth/" component={AuthPage} />
							<Route path="/main/" component={StaffPortal} />
						</Switch>
					</React.Fragment>
				</UserContext.Provider>
			</ShopContext.Provider>
		</BrowserRouter>
	);
};

// export default withAuthenticator(App, false, AmplifySignIn, AmplifySignOut);

export default App;
