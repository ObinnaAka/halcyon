import React, { useState } from "react";
import gql from "graphql-tag";

import { Redirect } from "react-router-dom";
import "./Auth.modules.css";

import { createMember } from "../../graphql/mutations";
import { useInput, generateID } from "../../helpers/helpers";
import { useMutation } from "react-apollo";

// import AuthContext from "../../context/auth-context";

const RegisterPage = () => {
	const {
		value: firstName,
		bind: bindFirstName,
		// reset: resetFirstName,
	} = useInput("");
	const {
		value: lastName,
		bind: bindLastName,
		// reset: resetLastName,
	} = useInput("");
	const {
		value: email,
		bind: bindEmail,
		// reset: resetEmail
	} = useInput("");
	const {
		value: eid,
		bind: bindEid,
		//reset: resetEid
	} = useInput("");
	const {
		value: password,
		bind: bindPassword,
		//reset: resetPassword,
	} = useInput("");

	// For student portal login
	const [memberLogin, setMemberLogin] = useState(false);

	const handleRegister = () => {
		setMemberLogin(true);
	};
	const submitHandler = (evt) => {
		evt.preventDefault();
		if (eid.trim().length === 0 || password.trim().length === 0) {
			alert("Invalid credentials entered");
			return;
		}
		let id = generateID("Member");
		let memberType = "Staff";
		createNewMember({
			variables: {
				input: {
					id,
					firstName,
					lastName,
					email,
					eid,
					password,
					memberType,
				},
			},
		});
	};
	const [
		createNewMember,
		{
			loading: transactionLoading,
			data: transactionData,
			error: transactionError,
		},
	] = useMutation(gql(createMember), {
		variables: { firstName, lastName, email, eid, password },
		onCompleted: (transactionData) => console.log(transactionData),
	});

	if (transactionLoading) return <div className="page">Loading ...</div>;
	if (transactionError)
		return <div className="page">{`Error! ${transactionError}`}</div>;
	return (
		<div>
			{memberLogin && <Redirect from="/register" to="/auth" />}
			{/* {context.token? <Redirect from="/" to="/staff" exact /> : <Redirect from="/" to="/auth" exact />} */}
			<form className="page auth-app" onSubmit={submitHandler}>
				<div className="form-control">
					<label htmlFor="firstName">
						First Name:
						<input type="string" value={firstName} {...bindFirstName} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="lastName">
						Last Name:
						<input type="string" value={lastName} {...bindLastName} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="eid">
						EID:
						<input type="string" value={eid} {...bindEid} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="email">
						Email:
						<input type="email" value={email} {...bindEmail} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="password">
						Password:
						<input type="password" value={password} {...bindPassword} />
					</label>
				</div>

				<div className="form-actions">
					<input
						type="button"
						className="button"
						value="Login"
						onClick={handleRegister}
					/>
					<input type="submit" className="button" value="Register" />
					{/* <Button type="submit" variant="primary">
					Login
				</Button> */}
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
