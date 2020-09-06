import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MemberContext } from "../../context/member-context";
import "./StaffPortal.css";
import { SectionButton, NavBar, Footer } from "../../components";
import { Scrollbars } from "react-custom-scrollbars";

import {
	StudentRequests,
	CheckedOutTools,
	Maintenance,
	Transactions,
	Scheduling,
	Students,
} from "..";

const StaffPortal = () => {
	const member = useContext(MemberContext);

	const sections = {
		Requests: "/staff/requests",
		Members: "/staff/members",
		Tools: "/staff/tools",
		Transactions: "/staff/transactions",
		Maintenance: "/staff/maintenance",
		Wiki: "/staff/wiki",
		Trainings: "/staff/training",
		Scheduling: "/staff/scheduling",
	};
	console.log(member);
	return (
		<div>
			{/* {member && member.groups.includes("Staff") ? ( */}
			<React.Fragment>
				<NavBar sections={sections} />
				<div className="page">
					<div className="info-bar">
						<h1>Staff Portal</h1>
					</div>
					<div className="staff-view">
						{/* <Scrollbars className="right-scroll">
						<nav className="right-view">
							{Object.entries(sections).map(([section, route]) => (
								<SectionButton key={section} sectionName={section} route={route} />
							))}
						</nav>
					</Scrollbars> */}
						<Scrollbars>
							<div className="staff list">
								<Switch>
									{member && (
										<Route exact path="/staff/" render={() => <Redirect to="/staff/requests" />} />
									)}
									<Route path="/staff/requests" component={StudentRequests} />
									<Route path="/staff/students" component={Students} />
									<Route path="/staff/maintenance" component={Maintenance} />
									<Route path="/staff/tools" component={CheckedOutTools} />
									<Route path="/staff/transactions" component={Transactions} />
									<Route path="/staff/scheduling" component={Scheduling} />
								</Switch>
							</div>
						</Scrollbars>
					</div>
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
