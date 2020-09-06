import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../../images/tiw_logo_white.png";

const Nav = styled.nav`
	width: 100%;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	overflow: hidden;
	display: flex;
	background-color: #bf5700;
	color: white;
	align-items: center;
	justify-content: space-between;

	.logo {
		width: 10px;
		height: 10px;
		justify-content: center;
		padding: 3vw;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<div className="logo">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
			<Burger />
		</Nav>
	);
};

export default Navbar;

/*import React, {useState} from "react";
import Clock from "react-live-clock";
import logo from "../../images/tiw_logo.jpg";
import { NavLink } from "react-router-dom";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "./NavBar.modules.css";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

// -------------------------------------------------
// Navbar with Login and Logout button. Renders the
// logo, clock and navigation buttons
// -------------------------------------------------

export default function Header(){

  return (
    <header className="staffHeader">
		  <div className="staffBranding">
        <img src={logo} className="appLogo" alt="logo" />
		    <Clock className="appClock" format={"HH:mm"} ticking={true} timezone={"US/Central"}/>
      </div>
      </header><button className="mobileStaffNavButton" onClick="myFunction(this)">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>
      <nav id="staffDesktopNav" class="DeskNav">
        <div className="menuDesktopMenuContainer">
          <ul className="desktopMenu">
		    <li><NavLink className="StudentRequests" to="/staff/requests">
			  	Requests
		    	</NavLink></li>
        <li><NavLink className="SignedInStudents" to="/staff/students">
			  	Members
		    	</NavLink></li>
        
        <li><NavLink className="Maintenance" to="/staff/maintenance">
          Maintenance
          </NavLink></li>
          
        <li><NavLink className="CheckedOutTools" to="/staff/tools">
          Tools
          </NavLink></li>
          
        <li><NavLink className="Transactions" to="/staff/transactions">
          All Transactions
          </NavLink></li>
          
        <li><NavLink className="Scheduling" to="/staff/scheduling">
          Scheduling
          </NavLink></li>

        <li><AmplifySignOut /></li>
        </ul>
        </div>
        </nav>
        </header>

  );
}*/
