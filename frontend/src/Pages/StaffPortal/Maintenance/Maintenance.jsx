import React, { useState, useContext } from "react";
import gql from "graphql-tag";

import { useInput } from "../../../helpers/helpers";
import AuthContext from "../../../context/auth-context";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

import { useMutation } from "@apollo/react-hooks";

import "./Maintenance.css";

// Warninig....This page is a mess

const MaintenancePage = (Apollo) => {
	//____ Context____
	const { auth } = useContext(AuthContext);

	//____ Apollo____
	// const client = Apollo.client;

	// ____ Input functions for forms ______
	const { value: name, bind: bindName, reset: resetName } = useInput("");
	const { value: location, bind: bindLocation, reset: resetLocation } = useInput("");
	const { value: toolType, bind: bindToolType, reset: resetToolType } = useInput("");
	const { value: comment, bind: bindComment, reset: resetComment } = useInput("");

	// ____ State management ____
	const [transactionType, setTransactionType] = useState("Tool Checkout");
	const [member, setMember] = useState("5efcc51cf9eba03f046435c3");
	const [inService, setInService] = useState(true);
	const [status, setStatus] = useState("Finished");
	const [tools, setTools] = useState([]);
	const staffID = auth.member._id;
	//____ State Handlers____
	const transactionTypeChangeHandler = (event) => {
		setTransactionType(event.target.value);
	};
	const memberChangeHandler = (event) => {
		setMember(event.target.value);
	};
	const toolHandler = (newTool) => {
		setTools(newTool);
	};
	const inServiceHandler = () => {
		setInService(!inService);
	};
	const statusHandler = () => {
		setStatus(status === "Processing" ? "Finished" : "Processing");
	};

	const CREATE_TRANSACTION = gql`
			    mutation {
					createTransaction(transactionInput: { transactionType: "${transactionType}", member: "${member}", staffMember: "${staffID}"
					, comment: "${comment}", status: "${status}", tools: ${JSON.stringify(tools)}}) {
			          _id
			          transactionType
			        }
			      }
	
				`;

	const TOOL_INSERT = gql`
            mutation {
                createTool(toolInput: { name: "${name}", location: "${location}", toolType: "${toolType}", inService: ${inService}, }) {
                  _id
                  toolType
                }
              }
              
			`;

	const [
		createTransaction,
		{
			loading: transactionLoading,
			// data: transactionData,
			// error: transactionError,
		},
	] = useMutation(CREATE_TRANSACTION, {
		variables: { transactionType, member, comment, status, tools, staffID },
	});

	const [
		createTool,
		{
			loading: toolLoading,
			// data: toolData,
			// error: toolError
		},
	] = useMutation(TOOL_INSERT, {
		variables: { name, location, toolType, inService },
	});
	//__ Submission Handlers__
	const submitToolHandler = (evt) => {
		evt.preventDefault();
		if (toolType.trim().length === 0 || name.trim().length === 0) {
			alert("Invalid information entered");
			return;
		}

		createTool({
			variables: { name, location, toolType, inService },
		});

		resetName();
		resetLocation();
		resetToolType();
	};
	const submitTransactionHandler = (evt) => {
		evt.preventDefault();

		createTransaction({
			variables: { transactionType, member, comment, status, tools, staffID },
		});

		resetComment();
	};

	return (
		<div className="left-view">
			<form className="create-tool" onSubmit={submitToolHandler}>
				<div className="form-control">
					<label htmlFor="name">
						Name:
						<input type="string" value={name} {...bindName} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="toolType">
						Type of Tool:
						<input type="string" value={toolType} {...bindToolType} />
					</label>
				</div>
				<div className="form-control">
					<label htmlFor="location">
						Location:
						<input type="Location" value={location} {...bindLocation} />
					</label>
				</div>
				<div className="form-control" id="checkbox">
					<label htmlFor="inService">
						In Service:
						<ToggleButton
							className="itemButton"
							type="checkbox"
							onChange={inServiceHandler}
							checked={inService}
						/>
					</label>
				</div>
				<div className="form-actions">
					<input type="submit" className="button" value="Create New Tool" />
				</div>
				{toolLoading ? <div>Processing...</div> : null}
			</form>
			<form className="create-transaction" onSubmit={submitTransactionHandler}>
				<div className="form-control">
					<label className="selector-label" htmlFor="member">
						Member:
						<select className="selector" onChange={memberChangeHandler}>
							<option key={1} value="5efcc51cf9eba03f046435c3">
								Obinna
							</option>
							<option key={2} value="5efcce293b30cc0d10bde95c">
								Hayley
							</option>
							<option key={3} value="5efcce5a3b30cc0d10bde95f">
								Test
							</option>
						</select>
					</label>
				</div>
				<div className="form-control">
					<label className="selector-label" htmlFor="transactionType">
						Type:
						<select className="selector" onChange={transactionTypeChangeHandler}>
							<option key={1} value="Tool Checkout">
								Tool Checkout
							</option>
							<option key={2} value="Tool Check-in">
								Tool Check-in
							</option>
							<option key={3} value="Sign-in">
								Sign In
							</option>
							<option key={4} value="Sign-out">
								Sign Out
							</option>
							<option key={5} value="Advanced 3D-Print">
								Advanced 3D-Print
							</option>
							<option key={6} value="Training">
								Training
							</option>
							<option key={7} value="Conduct-Update">
								Conduct Update
							</option>
							<option key={8} value="Cleaning">
								Cleaning
							</option>
							<option key={9} value="Testing">
								Testing
							</option>
						</select>
					</label>
				</div>
				<ToggleButtonGroup
					value={tools}
					onChange={toolHandler}
					type="checkbox"
					aria-label="Tools"
					className="toggle-label">
					<ToggleButton value="5eeb31b77884fa41402f074d" aria-label="Hammer">
						Hammer
					</ToggleButton>
					<ToggleButton value="5eeb31377884fa41402f074c" aria-label="Wire Cutter">
						Wire Cutter
					</ToggleButton>
					<ToggleButton value="5eeb31d87884fa41402f074e" aria_label="DFAB-12">
						DFAB-12
					</ToggleButton>
				</ToggleButtonGroup>
				<div className="form-control">
					<label htmlFor="comment">
						Comment:
						<input type="string" value={comment} {...bindComment} />
					</label>
				</div>
				<div>
					<ToggleButton
						value="Processing"
						checked={status === "Processing"}
						onClick={statusHandler}
						type="checkbox"
						aria_label="Processing">
						Processing
					</ToggleButton>
				</div>
				<div className="form-actions">
					<input type="submit" className="button" value="Create New Transaction" />
				</div>
				{transactionLoading ? <div>Processing...</div> : null}
			</form>
		</div>
	);
};

export default MaintenancePage;
