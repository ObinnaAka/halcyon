import React, { useState, useContext, createContext, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth/Auth";
import RegisterPage from "./Pages/Auth/Register";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/auth-context";
import { ApolloConsumer, withApollo } from "react-apollo";

import "./App.css";

const App = (client) => {
	// ____ Context____
	const [auth, setAuth] = useState({ token: null, member: null });

	const AuthPageWithClient = withApollo(AuthPage);
	const StaffPortalWithClient = withApollo(StaffPortal);
	const RegisterPageWithClient = withApollo(RegisterPage);

	// useEffect(() => {
	// 	if (auth) {
	// 		setLoggedIn = true;
	// 	}
	// 	return () => {};
	// });
	// const handleLogin = (token, member, tokenExpiration) => {
	// 	setAuth({
	// 		token: token,
	// 		member: member,
	// 	});
	// };
	// const handleLogout = () => {
	// 	setAuth({
	// 		token: null,
	// 		member: null,
	// 	});
	// };

	const authValue = { auth, setAuth };
	return (
		<AuthContext.Provider value={authValue} client={client}>
			<BrowserRouter>
				<React.Fragment>
					<NavBar />
					<Switch>
						{auth.token ? (
							<Redirect from="/" to="/staff" exact />
						) : (
							<Redirect from="/" to="/auth" exact />
						)}
						<Route path="/auth" component={AuthPageWithClient} />
						<Route path="/staff" component={StaffPortalWithClient} />
						<Route path="/register" component={RegisterPageWithClient} />
					</Switch>
					<Footer />
				</React.Fragment>
			</BrowserRouter>
		</AuthContext.Provider>
	);
};

export default App;
