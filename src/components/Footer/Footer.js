import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import "./Footer.modules.css";

const NavBar = () => {
	const [staff, setStaff] = useState(false);
	const user = useContext(UserContext);

	useEffect(() => {
		if (!user) return;
		if (!user.groups) return;
		setStaff(user.groups.includes("Staff"));
	}, [user]);
	return (
		<div className="footer">
			<div className="foot-text">Alpha 0.1</div>
		</div>
	);
};

export default NavBar;
