import React, { useContext } from "react";
import Clock from "react-live-clock";
import logo from "../../images/tiw_logo.png";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import "./NavBar.modules.css";

// -------------------------------------------------
// Navbar with Login and Logout button. Renders the
// logo, clock and navigation buttons
// -------------------------------------------------

const NavBar = () => {
	const { auth, setAuth } = useContext(AuthContext);
	return (
		<div className="NavBar">
			{/* Left side of NavBar with Clock and Logo */}

			<div className="logo-navigation">
				<img src={logo} className="App-logo" alt="logo" />
				<Clock
					className="App-clock"
					format={"HH:mm"}
					ticking={true}
					timezone={"US/Central"}
				/>
			</div>

			{/* Right side of NavBar  */}

			<nav className="main-navigation">
				<ul className="nav-list">
					{/* This ternary switches the state of the "Login/Logout" button */}
					{!auth.token && (
						<li>
							<NavLink className="nav-item" to="/auth">
								Login
							</NavLink>
						</li>
					)}
					{auth.token && (
						<li>
							<NavLink
								className="nav-item"
								to="/auth"
								onClick={() => setAuth({ token: null, member: null })}
							>
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
