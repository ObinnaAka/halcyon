import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/auth-context";

const TestPage = () => {
	const [transactionType, setTransactionType] = useState("Tool Checkout");

	const handleChange = (event) => {
		setTransactionType(event.target.value);
	};

	const context = useContext(AuthContext);

	const submitHandler = (evt) => {
		evt.preventDefault();
		if (transactionType.trim().length === 0) {
			setTransactionType("Tool Checkout");
		}
		const requestBody = {
			query: `mutation {
                createTransaction(transactionInput: {transactionType: "${transactionType}", member: "${context.memberID}", status: "Processing"}) {
                  _id
                  transactionType
                }
              }`,
		};

		let headers = { "Content-Type": "application/json" };
		if (context.token) {
			headers["Authorization"] = `Token ${context.token}`;
		}
		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers,
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Failed");
				}
				return res.json();
			})
			.then((resData) => {
				return resData;
			})
			.catch((err) => {
				console.log(err);
			});
		// resetEid()
		// resetPassword()
	};

	return (
		<div>
			<form className="test" onSubmit={submitHandler}>
				<select className="selector" onChange={handleChange}>
					<option value="Tool Checkout">Tool Checkout</option>
					<option value="Maintenance Request">Maintenance Request</option>
					<option value="Sign In">Sign In</option>
				</select>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default TestPage;
