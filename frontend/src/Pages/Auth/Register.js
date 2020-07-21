import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Auth.modules.css";
import { generateID } from "../../helpers/helpers";

import { createMember } from "../../graphql/mutations";
import { listMembers } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

// import AuthContext from "../../context/auth-context";

const initialState = {
	memberID: "",
	firstName: "",
	lastName: "",
	email: "",
	eid: "",
	password: "",
	memberType: "Staff",
};

const RegisterPage = () => {
	const [formState, setFormState] = useState(initialState);
	// const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput("");
	// const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput("");
	// const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
	// const { value: eid, bind: bindEid, reset: resetEid } = useInput("");
	// const { value: password, bind: bindPassword, reset: resetPassword } = useInput("");

	// For student portal login
	const [memberLogin, setMemberLogin] = useState(false);

	const setInput = (key, value) => {
		setFormState({ ...formState, [key]: value });
		console.log(formState);
	};

	const handleRegister = () => {
		setMemberLogin(true);
	};

	const addMember = async () => {
		console.log(formState);
		try {
			if (
				!formState.firstName ||
				!formState.lastName ||
				!formState.email ||
				!formState.eid ||
				!formState.password
			) {
				alert("Invalid credentials entered");
				return;
			}

			const member = { ...formState };
			member.memberID = await generateID("Member");
			console.log(member);
			await API.graphql(graphqlOperation(createMember, { input: member }));
			setFormState(initialState);
		} catch (err) {
			console.log(formState);
			// console.log(memberID);
			console.log("Error creating member: ", err);
		}
	};
	return (
		<div>
			{memberLogin && <Redirect from="/register" to="/auth" />}
			{/* {context.token? <Redirect from="/" to="/staff" exact /> : <Redirect from="/" to="/auth" exact />} */}
			<form className="page auth-app">
				<div className="form-control">
					<label htmlFor="firstName">
						First Name
						<input
							onChange={(event) => setInput("firstName", event.target.value)}
							value={formState.firstName}
							placeholder="First Name"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="lastName">
						Last Name:
						<input
							onChange={(event) => setInput("lastName", event.target.value)}
							value={formState.lastName}
							placeholder="Last Name"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="eid">
						EID:
						<input
							onChange={(event) => setInput("eid", event.target.value)}
							value={formState.eid}
							placeholder="EID"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="email">
						Email:
						<input
							type="email"
							onChange={(event) => setInput("email", event.target.value)}
							value={formState.email}
							placeholder="Email"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="password">
						Password:
						<input
							type="password"
							onChange={(event) => setInput("password", event.target.value)}
							value={formState.password}
							placeholder="Password"
						/>
					</label>
				</div>

				<div className="form-actions">
					<input
						type="button"
						className="button"
						value="Switch to Login"
						onClick={handleRegister}
					/>
					<input type="button" className="button" value="Register" onClick={addMember} />
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
