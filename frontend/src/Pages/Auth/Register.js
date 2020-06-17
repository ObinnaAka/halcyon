import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Auth.modules.css";
import { useInput } from "../../helpers/useInputChange";

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
	const { value: email,
		bind: bindEmail,
		// reset: resetEmail
	} = useInput("");
	const { value: eid,
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
		const requestBody = {
			query: `
            mutation {
                createMember(memberInput: {firstName: "${firstName}", lastName: "${lastName}", email: "${email}", eid: "${eid}", password: "${password}", memberType:"Staff"}) {
                  _id
                  eid
                }
              }
              
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
				return <Redirect from="/register" to="/auth" />;
			})
			.catch((err) => {
				console.log(err);
			});
		// resetEid()
		// resetPassword()
	};

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
