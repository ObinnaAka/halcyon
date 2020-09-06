import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MemberContext } from "../../context/member-context";
import "./Footer.modules.css";

const NavBar = () => {
	const [staff, setStaff] = useState(false);
	const member = useContext(MemberContext);

	useEffect(() => {
		if (!member) return;
		if (!member.groups) return;
		setStaff(member.groups.includes("Staff"));
		console.log(member);
	}, [member]);
	return (
		<div className="footer">
			<div className="foot-text">
				Developed by Texas Inventionworks Members - Carly, Hayley, Kaylee, Obinna
			</div>
			{staff ? (
				<div className="foot-nav">
					<ul className="foot-nav-list">
						<li>
							<NavLink className="foot-nav-item" to="/staff">
								Staff Portal
							</NavLink>
						</li>
						<li>
							<NavLink className="foot-nav-item" to="/student">
								Student Portal
							</NavLink>
						</li>
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default NavBar;
