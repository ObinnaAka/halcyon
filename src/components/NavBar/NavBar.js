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
		justify-content: center;
		padding: 3vw;
	}
`;

const Navbar = ({ sections }) => {
	return (
		<Nav>
			<div className="logo">
				<img src={logo} className="App-logo" alt="logo" />
			</div>
			<Burger sections={sections} />
		</Nav>
	);
};

export default Navbar;
