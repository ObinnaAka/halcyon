import React, { useContext } from "react";

import { Redirect } from "react-router-dom";
import { MemberContext } from "../../context/member-context";
import "./Auth.modules.css";

// -------------------------------------------------
// Login page.
// Takes input from the text field and sends a query
// (LOGIN) to authenticate them with the database
// -------------------------------------------------

const AuthPage = () => {
	const member = useContext(MemberContext);
	return <Redirect from="/" to="/student" exact />;
};

export default AuthPage;
