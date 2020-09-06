import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Redirect, Route } from "react-router-dom";
import { BuyMaterials, Help, Home, Reservations, Trainings } from "..";
import { NavBar, Footer } from "../../components";
import "./StudentPortal.css";
import ToolCheckout from "./ToolCheckout/ToolCheckout";

const StudentPortal = () => {
	const sections = {
		Home: "/student/home",
		Reservations: "/student/reservations",
		Tools: "/student/tools",
		Materials: "/student/materials",
		Help: "/student/help",
		Trainings: "/student/trainings",
	};

	return (
		<div>
			<NavBar sections={sections} />
			<div className="page">
				<Scrollbars className="student-main-scroll">
					<Redirect from="/student" to="/student/home" exact />
					<Route path="/student/home" component={Home} />
					<Route path="/student/reservations" component={Reservations} />
					<Route path="/student/tools" component={ToolCheckout} />
					<Route path="/student/materials" component={BuyMaterials} />
					<Route path="/student/trainings" component={Trainings} />
					<Route path="/student/help" component={Help} />
				</Scrollbars>
			</div>
			<Footer />
		</div>
	);
};

export default StudentPortal;
