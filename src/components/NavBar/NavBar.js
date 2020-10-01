import React, { useContext } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import logo from "../../images/logo-main.png";
import { UserContext } from "../../context/";

const Nav = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 50px;
	display: flex;
	color: var(--main-text-color);
	align-items: center;
	justify-content: space-between;
	z-index: 99;

	.header {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 3vw;
	}
	.user-name {
		display: flex;
		flex-direction: column;
		flex-wrap: no-wrap;
		margin-left: 1vw;
		min-width: 150px;
		padding-top: -5px;
	}
	.user-name h6 {
		margin: 0;
	}
`;

const Navbar = ({ sections }) => {
	const user = useContext(UserContext);

	return (
		<Nav>
			<div className="header">
				<div className="App-logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="user-name">
					<h6>Hello</h6> {user?.firstName} {user?.lastName}
				</div>
			</div>
			<Burger sections={sections} />
		</Nav>
	);
};

export default Navbar;
