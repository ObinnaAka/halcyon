import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Request.modules.css";

const Request = ({ items, member, time, workstation }) => {
	const [open, setOpen] = React.useState(false);
	const [done, setDone] = React.useState(false);
	const [requestDone, setRequestDone] = React.useState(false);
	const [itemDone, setItemDone] = React.useState(false);

	const handleItemClick = () => {
		setOpen(!open);
	};
	const handleDoneClick = () => {
		setRequestDone(!requestDone);
		(requestDone ? setDone(!done): setTimeout(function () { setDone(!done) }, 3000))
	};
	const handleItemDone = () => {
		setItemDone(!itemDone);
	};

	const listItems = items.slice(1).map((items) => (
		<List component="div" disablePadding>
			<ListItem button className={styles.nested}>
				<ToggleButton className="itemButton" type="checkbox" onChange={handleItemDone} checked={itemDone}/>
				<ListItemText primary={items} />
			</ListItem>
		</List>
	));
	return (
		<div className="itemDiv">
			<ToggleButton className="doneButton" type="checkbox" onChange={handleDoneClick} checked={requestDone}/>
			<List className="item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText primary={items.length} />
					<ListItemText primary={items[0]} />
					<ListItemText primary={member.firstName + " " + member.lastName} />
					<ListItemText primary={time.getHours() + ":" + time.getMinutes()} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					{listItems}
					{/* <List component="div" disablePadding>
					<ListItem button className={styles.nested}>
						<ListItemIcon></ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItem>
				</List> */}
				</Collapse>
			</List>
		</div>
	);
};

export default Request;
