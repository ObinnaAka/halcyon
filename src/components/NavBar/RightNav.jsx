import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Auth } from "aws-amplify";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { ListSubheader } from "@material-ui/core";

const U1 = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	z-index: 100;

	li {
		text-color: white;
		padding: 10px 10px;

		a {
			text-decoration: none;
			color: rgba(255, 255, 255, 0.5);
		}
		a:hover {
			text-decoration: none;
			color: white;
		}
		a.active {
			text-decoration: none;
			color: white;
		}
	}
	@media (max-width: 850px) {
		flex-flow: column nowrap;
		background-color: #bf5700;
		position: fixed;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		top: -25px;
		right: 0;
		height: 100vh;
		width: 300px;
		padding-top: 5rem;
		transition: transform 0.3s ease-in-out;
		li {
			padding-top: 1vh;
			color: white;
			text-decoration: none;
		}
	}
`;

const RightNav = ({ sections, open, handleSectionSelect }) => {
	return (
		<U1 open={open}>
			{Object.entries(sections).map(([section, route], index) => (
				<li key={index}>
					<NavLink className="navlink" to={route} onClick={handleSectionSelect}>
						{section}
					</NavLink>
				</li>
			))}
			<button onClick={() => Auth.signOut()}>Sign Out</button>
		</U1>
	);
};

export default RightNav;
