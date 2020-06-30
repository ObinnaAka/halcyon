import React, { useContext, useState, useEffect, useCallback } from "react";

import { Redirect } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import "./Auth.modules.css";
import { useInput } from "../../helpers/useInputChange";

import { useLazyQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

// -------------------------------------------------
// Login page.
// Takes input from the text field and sends a query
// (LOGIN) to authenticate them with the database
// -------------------------------------------------

const AuthPage = (Apollo) => {
	// -------------------------------------------------
	// This sets the state to the user's entered data
	// -------------------------------------------------

	const [memberLogin, setMemberLogin] = useState(true);

	// -------------------------------------------------
	// This is the context that we use throughout the site
	// to make sure that the user is authenticated and
	// authorized to perform actions
	// -------------------------------------------------

	const { auth, setAuth } = useContext(AuthContext);
	const client = Apollo.client;

	// -------------------------------------------------
	// These functions are for the inputs. There's one
	// for each text field (eid, password)
	// -------------------------------------------------

	const { value: eid, bind: bindEid, reset: resetEid } = useInput("");
	const {
		value: password,
		bind: bindPassword,
		reset: resetPassword,
	} = useInput("");

	// -------------------------------------------------
	// This switches between the "Login" screen and the
	// "Register" screen
	// -------------------------------------------------
	const handleRegister = () => {
		setMemberLogin(false);
	};

	// -------------------------------------------------
	// This is the GraphQL query used for the login.
	// It passes the eid and password as variables to the
	// backend which returns the member's data
	// -------------------------------------------------

	const LOGIN = gql`{ login (eid: "${eid}", password: "${password}"){
		member {
			_id
			eid
			firstName
			lastName
			memberType
		}
		token
		tokenExpiration
	}}`;

	// -------------------------------------------------
	// We use "UseLazyQuery" to make sure that we don't
	// send a query fetch to the database when the page,
	// and only when the submit button is clicked
	// -------------------------------------------------

	const [login, { loading, error, data, called }] = useLazyQuery(LOGIN, {
		variables: { eid, password },
		onCompleted: (data) => {
			client.cache.writeData({
				data,
			});
			window.localStorage.setItem("token", data.login.token);
			window.localStorage.setItem("member", data.login.member);
			setAuth({ token: data.login.token, member: data.login.member });
		},
	});

	if (loading) return <div className="page">Loading ...</div>;
	if (error) return <div className="page">{`Error! ${error}`}</div>;

	// -------------------------------------------------
	// This submits the user's entered information and the
	// query for authentication
	// -------------------------------------------------

	const submitHandler = async (evt) => {
		evt.preventDefault();
		// -------------------------------------------------
		// Validate user's entries
		// -------------------------------------------------
		if (eid.trim().length === 0 || password.trim().length === 0) {
			alert("Invalid credentials entered");
			return;
		}
		login({ variables: { eid, password } });
	};

	return (
		<div>
			{!memberLogin && <Redirect path="/auth" to="/register" />}
			{auth.token ? (
				<Redirect from="/" to="/staff" exact />
			) : (
				<Redirect from="/" to="/auth" exact />
			)}
			<form className="page auth-app" onSubmit={submitHandler}>
				<div className="form-control">
					<label htmlFor="eid">
						EID:
						<input type="string" value={eid} {...bindEid} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="password">
						Password:
						<input type="password" value={password} {...bindPassword} />
					</label>
				</div>
				<div className="form-actions">
					<input type="submit" className="button" value="Login" />
					<input
						type="button"
						className="button"
						value="Register"
						onClick={handleRegister}
					/>
					{/* <Button type="submit" variant="primary">
					Login
				</Button> */}
				</div>
			</form>
		</div>
	);
};

export default AuthPage;
