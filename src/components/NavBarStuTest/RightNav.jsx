import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #bf5700;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
    li {
      padding-top: 6vw;
      color: white;
      text-decoration: none;
    }
  }
`;

const sections = {
  Home: "/student/home",
  Tools: "/student/tools",
  Materials: "/student/materials",
  Reservations: "/student/reservations",
  Help: "/student/help",
  Trainings: "/student/training",
  Scheduling: "/student/scheduling",
  Staff: "/staff",
};

const RightNav = ({ open }) => {
  return (
    <U1 open={open}>
      {Object.entries(sections).map(([section, route]) => (
        <li>
          <NavLink className="navlink" to={route}>
            {section}
          </NavLink>
        </li>
      ))}
      {/* <li>
        <NavLink className="StudentRequests" to="/staff/requests">
          Requests
        </NavLink>
      </li>
      <li>
        <NavLink className="SignedInStudents" to="/staff/students">
          Members
        </NavLink>
      </li>
      <li>
        <NavLink className="Maintenance" to="/staff/maintenance">
          Maintenance
        </NavLink>
      </li>
      <li>
        <NavLink className="CheckedOutTools" to="/staff/tools">
          Tools
        </NavLink>
      </li>
      <li>
        <NavLink className="Transactions" to="/staff/transactions">
          All Transactions
        </NavLink>
      </li>
      <li>
        <NavLink className="Scheduling" to="/staff/scheduling">
          Scheduling
        </NavLink>
      </li>
      <li>
        <AmplifySignOut />
      </li> */}
    </U1>
  );
};

export default RightNav;
