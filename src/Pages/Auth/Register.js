import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Auth.modules.css";
import { generateID } from "../../helpers/helpers";

import { createMember } from "../../graphql/mutations";
import { listMembers } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

// import AuthContext from "../../context/auth-context";

const initialMemberState = {
	memberId: "",
	firstName: "",
	lastName: "",
	email: "",
	eid: "",
	password: "",
	memberType: "Staff",
};

const RegisterPage = () => {
	const [member, setMember] = useState(initialMemberState);

	// For student portal login
	const [memberLogin, setMemberLogin] = useState(false);

	const setInput = (key, value) => {
		setMember({ ...member, [key]: value });
		console.log(member);
	};

	const handleRegister = () => {
		setMemberLogin(true);
	};

	const addMember = async () => {
		console.log(member);
		try {
			if (
				!member.firstName ||
				!member.lastName ||
				!member.email ||
				!member.eid ||
				!member.password
			) {
				alert("Invalid credentials entered");
				return;
			}

			const member = { ...member };
			member.memberId = generateID("Member");
			console.log(member);
			await API.graphql(graphqlOperation(createMember, { input: member }));
			setMember(initialMemberState);
		} catch (err) {
			console.log(member);
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
							onChange={(event) => setInput({ ...member, firstName: event.target.value })}
							value={member.firstName}
							placeholder="First Name"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="lastName">
						Last Name:
						<input
							onChange={(event) => setInput({ ...member, lastName: event.target.value })}
							value={member.lastName}
							placeholder="Last Name"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="eid">
						EID:
						<input
							onChange={(event) => setInput({ ...member, eid: event.target.value })}
							value={member.eid}
							placeholder="EID"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="email">
						Email:
						<input
							type="email"
							onChange={(event) => setInput({ ...member, email: event.target.value })}
							value={member.email}
							placeholder="Email"
						/>
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="password">
						Password:
						<input
							type="password"
							onChange={(event) => setInput({ ...member, password: event.target.value })}
							value={member.password}
							placeholder="Password"
						/>
					</label>
				</div>

				<div className="form-actions">
					<input type="button" className="button" value="Register" onClick={addMember} />
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
