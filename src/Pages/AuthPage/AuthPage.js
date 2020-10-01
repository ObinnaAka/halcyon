import React, { useContext } from "react";

import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import "./Auth.modules.css";

// -------------------------------------------------
// Login page.
// Takes input from the text field and sends a query
// (LOGIN) to authenticate them with the database
// -------------------------------------------------

const AuthPage = () => {
	const user = useContext(UserContext);
	return <Redirect from="/" to="/main" exact />;
};

export default AuthPage;
