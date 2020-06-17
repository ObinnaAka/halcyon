import React, { useContext } from "react";
import Clock from "react-live-clock";
import logo from "../../images/tiw_logo.png";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import "./NavBar.modules.css";

const NavBar = () => {
	const context = useContext(AuthContext);
	return (
		<div className="NavBar">
			<div className="logo-navigation">
				<img src={logo} className="App-logo" alt="logo" />
				<Clock
					className="App-clock"
					format={"HH:mm"}
					ticking={true}
					timezone={"US/Central"}
				/>
			</div>
			<nav className="main-navigation">
				<ul className="nav-list">
					{!context.token && (
						<li>
							<NavLink className="nav-item" to="/auth">
								Login
							</NavLink>
						</li>
					)}
					{context.token && (
						<li>
							<NavLink className="nav-item" to="/auth" onClick={context.logout}>
								Logout
							</NavLink>
						</li>
					)}
					<li>
						<NavLink className="nav-item" to="/staff">
							Staff Portal
						</NavLink>
					</li>
					<li>
						<NavLink className="nav-item" to="/student">
							Student Portal
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
