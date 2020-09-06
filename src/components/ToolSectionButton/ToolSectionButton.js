import React from "react";
import { NavLink } from "react-router-dom";
import "./ToolSectionButton.modules.css";

const ButtonSection = ({ sectionName, route }) => {
	return (
		<NavLink key={sectionName} className="tool section" to={route}>
			{sectionName}
		</NavLink>
	);
};

export default ButtonSection;
