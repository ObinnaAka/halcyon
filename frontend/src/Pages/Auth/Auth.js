import React, { useContext, useState } from "react";
// import { useApolloClient, useMutation } from "@apollo/react-hooks";
// import gql from "graphql-tag";
import { Redirect } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import "./Auth.modules.css";
import { useInput } from "../../helpers/useInputChange";

const AuthPage = () => {
	const {
		value: eid,
		bind: bindEid,
		// reset: resetEid
	} = useInput("");
	const {
		value: password,
		bind: bindPassword,
		// reset: resetPassword,
	} = useInput("");

	// For student portal login
	const [memberLogin, setMemberLogin] = useState(true);

	const context = useContext(AuthContext);

	const handleRegister = () => {
		setMemberLogin(false);
	};
	const submitHandler = (evt) => {
		evt.preventDefault();
		if (eid.trim().length === 0 || password.trim().length === 0) {
			alert("Invalid credentials entered");
			return;
		}
		const requestBody = {
			query: `
				query { login (eid: "${eid}", password: "${password}"){
					member {
						_id
						eid
						firstName
						lastName
						memberType
					}
					token
					tokenExpiration
				}}
			`,
		};
		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Failed");
				}
				return res.json();
			})
			.then((resData) => {
				if (resData.data.login.token) {
					context.login(resData.data.login.token, resData.data.login.member);
				}
			})
			.catch((err) => {
				console.log(err);
			});
		// resetEid()
		// resetPassword()
	};

	return (
		<div>
			{!memberLogin && <Redirect path="/auth" to="/register" />}
			{context.token ? (
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
