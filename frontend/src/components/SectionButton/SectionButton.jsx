import React from "react";
import "./SectionButton.css";
import { NavLink } from "react-router-dom";

const ButtonSection = ({ sectionName, route }) => {
	return (
		// Trying to create buttons for the sections for the home screen
		// view in the staff portal.
		<NavLink key={1} className="section" to={route}>
			{sectionName}
		</NavLink>
	);
};

export default ButtonSection;
