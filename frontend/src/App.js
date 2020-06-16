import React, { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import AuthPage from "./Pages/Auth/Auth";
import RegisterPage from "./Pages/Auth/Register";
import StaffPortal from "./Pages/StaffPortal/StaffPortal";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/auth-context";

import "./App.css";

function App() {
	const [login, setLogin] = useState({ token: null, memberID: null });
	const context = AuthContext;

	const handleLogin = (token, memberID, tokenExpiration) => {
		setLogin({
			token: token,
			memberID: memberID,
		});
	};
	const handleLogout = () => {
		setLogin({
			token: null,
			memberID: null,
		});
	};
	return (
		<BrowserRouter>
			<React.Fragment>
				<AuthContext.Provider
					value={{
						token: login.token,
						memberID: login.memberID,
						login: handleLogin,
						logout: handleLogout,
					}}
				>
					<NavBar />
					<Switch>
						{context.token? <Redirect from="/" to="/staff" exact /> : <Redirect from="/" to="/auth" exact />}
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
