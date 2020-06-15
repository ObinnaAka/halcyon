import React, { useState, useEffect } from "react";
import "./SectionButton.css";
import { NavLink } from "react-router-dom";

const ButtonSection = ({ sectionName, route }) => {
	return (
		// Trying to create buttons for the sections for the home screen
		// view in the staff portal.
			<NavLink className="section" to={route}>
				{sectionName}
			</NavLink>
	);
};

export default ButtonSection;
