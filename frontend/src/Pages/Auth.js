import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Auth.modules.css";
import { useInput } from "../helpers/useInputChange";

const AuthPage = () => {
	const { value: eid, bind: bindEid, reset: resetEid } = useInput("");
	const { value:password , bind:bindPassword, reset: resetPassword} = useInput("");

	const submitHandler = (evt) => {
		evt.preventDefault();
		if (eid.trim().length === 0 || password.trim().length === 0) {
			alert("Invalid credentials entered");
			return;
		}
		const requestBody = {
			query: `
				mutation { createMember(memberInput: {eid: "${eid}", password: "${password}", firstName: "Test2", lastName: "Users", email: "test@test.edu", memberType: "Student"}){_id eid}}
			`
		};
		fetch("http://localhost:8000/graphql", {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log(JSON.stringify(requestBody));
		// resetEid()
		// resetPassword()
	};
	return (
		<form className="page auth-app" onSubmit={submitHandler}>
			<div className="form-control">
				<label htmlFor="eid">
					EID:
					<input type="string" value={eid} {...bindEid}/>
				</label>
			</div>
			<div className="form-control">
				<label htmlFor="password">
					Password:
					<input type="password" value={password} {...bindPassword} />
				</label>
			</div>
			<div className="form-actions">
				<input type="submit" value="Submit" />
				{/* <Button type="submit" variant="primary">
					Login
				</Button> */}
			</div>
		</form>
	);
};

export default AuthPage;
