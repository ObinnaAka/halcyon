import React, { useState, useContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import "./StaffPortal.modules.css";
import { SectionButton, NavBar, Footer } from "../../components";
import { Scrollbars } from "react-custom-scrollbars";
import { createNewTransaction, createTransaction } from "../../graphql-optimized/mutations";

import {
	StudentRequests,
	CheckedOutTools,
	Maintenance,
	Transactions,
	Scheduling,
	Users,
	Code,
} from "..";
import Home from "./Home/Home";

const StaffPortal = () => {
	const [initialTransactionState, setInitialTransactionState] = useState({});

	const user = useContext(UserContext);

	useEffect(() => {
		if (user) {
			setInitialTransactionState({
				transactionType: "Test",
				userId: user.id,
				staffUserId: user.id,
				transactionStatus: "Processing",
				transactionComment: "Test",
				requests: ["Hammer", "Test"],
			});
		}
	}, [user]);

	const sections = {
		Home: "/main/home",
		Requests: "/main/requests",
		Code: "/main/code",
		Users: "/main/users",
		Tools: "/main/tools",
		Transactions: "/main/transactions",
		Maintenance: "/main/maintenance",
		Wiki: "/main/wiki",
		Trainings: "/main/training",
		Scheduling: "/main/scheduling",
	};

	const stateTester = async () => {
		let res = await API.graphql({
			query: createTransaction,
			variables: { input: initialTransactionState },
		});
		console.log(res);
	};
	const staffCheckIn = async () => {
		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					userId: user.eid,
					tools: "none",
					staffUserId: "tiw",
					transactionType: user.signInStatus ? "Sign Out" : "Sign In",
					transactionStatus: "Finished",
					transactionComment: "",
				},
			},
		})
			.then(() => {
				alert(`User ${user.signInStatus ? "Checked Out" : "Checked In"}!`);
				window.location.reload();
			})
			.catch((err) => {
				alert("This user has not created an account");
				console.log(err);
			});
	};
	return (
		<div>
			{/* {user && user.groups.includes("Staff") ? ( */}
			<React.Fragment>
				<NavBar sections={sections} />
				<div className="page">
					<div className="info-bar">
						<div>
							<button className="large" onClick={staffCheckIn}>
								{user?.signInStatus ? "Staff Check Out" : "Staff Check In"}
							</button>

							<button className="large" onClick={stateTester}>
								Test Request
							</button>
						</div>
					</div>
					<Scrollbars>
						<div className="staff-view">
							<Switch>
								{user && <Route exact path="/main/" render={() => <Redirect to="/main/home" />} />}
								<Route path="/main/home" component={Home} exact />
								<Route path="/main/requests" component={StudentRequests} />
								<Route path="/main/users" component={Users} />
								<Route path="/main/code" component={Code} />
								<Route path="/main/maintenance" component={Maintenance} />
								<Route path="/main/tools" component={CheckedOutTools} />
								<Route path="/main/transactions" component={Transactions} />
								<Route path="/main/scheduling" component={Scheduling} />
							</Switch>
						</div>
					</Scrollbars>
				</div>
				<Footer />
			</React.Fragment>
			{/* ) : (
			 		<Redirect from="/staff/" to="/student/" exact />
			)} */}
		</div>
	);
};
export default StaffPortal;
