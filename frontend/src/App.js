import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth/Auth";
import RegisterPage from "./Pages/Auth/Register";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/auth-context";
// import ApolloContext from "./context/apollo-context";

import "./App.css";

function App() {
	// ____ Context____
	const [login, setLogin] = useState({ token: null, member: null });
	const context = useContext(AuthContext);

	const handleLogin = (token, member, tokenExpiration) => {
		setLogin({
			token: token,
			member: member,
		});
	};
	const handleLogout = () => {
		setLogin({
			token: null,
			member: null,
		});
	};
	return (
		<BrowserRouter>
			<React.Fragment>
				<AuthContext.Provider
					value={{
						token: login.token,
						member: login.member,
						login: handleLogin,
						logout: handleLogout,
					}}
				>
					<NavBar />
					<Switch>
						{context.token ? (
							<Redirect from="/" to="/staff" exact />
						) : (
							<Redirect from="/" to="/auth" exact />
						)}
						<Route path="/auth" component={AuthPage} />
						<Route path="/staff" component={StaffPortal} />
						<Route path="/register" component={RegisterPage} />
					</Switch>
					<Footer />
				</AuthContext.Provider>
			</React.Fragment>
		</BrowserRouter>
	);
}

export default App;
