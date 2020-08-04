import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./StaffPortal.css";
import { SectionButton } from "../../components";
import { Scrollbars } from "react-custom-scrollbars";

import {
	StudentRequests,
	SignedInStudents,
	CheckedOutTools,
	Maintenance,
	Transactions,
	Scheduling,
} from "..";

const StaffPortal = () => {
	const { auth } = useContext(AuthContext);

	const sections = {
		"Student Requests": "/staff/requests",
		"Signed-in Students": "/staff/students",
		"Checked-out Tools": "/staff/tools",
		"Transaction History": "/staff/transactions",
		"Maintenance Request": "/staff/maintenance",
		"TIW Wiki and Help": "/staff/wiki",
		Trainings: "/staff/training",
		Scheduling: "/staff/scheduling",
	};

	return (
		<div>
			<div className="page">
				<div className="info-bar">
					<h1>Staff Portal</h1>

					{/* <Route path="/staff" component={TestPage} /> */}
				</div>
				<div className="main-view">
					<Scrollbars className="right-scroll">
						<nav className="right-view">
							{Object.entries(sections).map(([section, route]) => (
								<SectionButton key={section} sectionName={section} route={route} />
							))}
						</nav>
					</Scrollbars>
					<Scrollbars className="left-scroll">
						<div className="left-view">
							<Route path="/staff/requests" component={StudentRequests} />
							<Route path="/staff/students" component={SignedInStudents} />
							<Route path="/staff/maintenance" component={Maintenance} />
							<Route path="/staff/tools" component={CheckedOutTools} />
							<Route path="/staff/transactions" component={Transactions} />
							<Route path="/staff/scheduling" component={Scheduling} />
						</div>
					</Scrollbars>
				</div>
			</div>
			{/* )} */}
		</div>
	);
};

export default StaffPortal;
