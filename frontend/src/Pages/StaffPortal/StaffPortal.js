import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import "./StaffPortal.css";
import { SectionButton } from "../../components";
import { Scrollbars } from "react-custom-scrollbars";
import { StudentRequests, SignedInStudents, TestPage } from "../../Pages";

function App() {
	const context = useContext(AuthContext);
	const sections = {
		"Student Requests": "/staff/requests",
		"Signed-in Students": "/staff/students",
		"Checked-out Tools": "/staff/toolcheckout",
		"Transaction History": "/staff/transactions",
		"Maintenance Request": "/staff/maintenance",
		"TIW Wiki and Help": "/staff/wiki",
	};

	return (
		<div>
			{!context.token ? (
				<Redirect from="/" to="/auth" exact />
			) : (
				<div className="page">
					<div className="info-bar">
						<h1>Staff Portal</h1>
						<Route path="/staff" component={TestPage} />
					</div>
					<div className="main-view">
						<Scrollbars className="right-scroll">
							<nav className="right-view">
								{Object.entries(sections).map(([section, route]) => (
									<SectionButton
										key={section}
										sectionName={section}
										route={route}
									/>
								))}
							</nav>
						</Scrollbars>
						{/* These scroll views are being used to replace the ugly default scroll bar*/}
						<Scrollbars className="left-scroll">
							{/* This is where the different pages will be rendered, e.g.
					Student Requests.*/}
							<div className="left-view">
								<Route path="/staff/requests" component={StudentRequests} />
								<Route path="/staff/students" component={SignedInStudents} />
							</div>
						</Scrollbars>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
