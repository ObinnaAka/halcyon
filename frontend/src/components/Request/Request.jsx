import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Request.modules.css";
import moment from "moment";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const Request = ({ items, member, date, requestType, workstation = "-", comment }) => {
	const [open, setOpen] = React.useState(false);
	const [done, setDone] = React.useState(false);
	const [requestDone, setRequestDone] = React.useState(false);
	const [itemDone, setItemDone] = React.useState(false);

	// TODO Add setTools to this useState function
	const [tools] = useState(Object.values(items));

	const handleItemClick = () => {
		setOpen(!open);
	};
	const handleDoneClick = () => {
		setRequestDone(!requestDone);
		requestDone
			? setDone(!done)
			: setTimeout(function () {
					setDone(!done);
			  }, 3000);
		console.log(tools);
	};
	const handleItemDone = () => {
		setItemDone(!itemDone);
	};
	useEffect(() => {}, []);

	const listItems = tools.map((item, index) => (
		<ListItem button key={index} className={styles.nested}>
			<ToggleButton
				className="request_item_button"
				type="checkbox"
				onChange={handleItemDone}
				checked={itemDone}
			/>
			<ListItemText primary={item.name} />
		</ListItem>
	));
	return (
		<div className="request_item_div">
			<ToggleButton
				className="request_done"
				type="checkbox"
				onChange={handleDoneClick}
				checked={requestDone}
			/>
			<List className="request_item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText className="request_item_number" primary={tools.length} />
					<ListItemText className="request_type" primary={requestType} />
					<ListItemText
						className="request_member_name"
						primary={member.firstName + " " + member.lastName}
					/>
					<ListItemText className="request_workstation" primary={workstation} />
					<ListItemText className="request_time" primary={moment(date).fromNow()} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<div className="request_expanded_view">
						<div className="expanded_view_left">
							<List disablePadding>{listItems}</List>
						</div>
						<div className="request_expanded_view_right">
							<h3>Name</h3>
							<div>{member.firstName + " " + member.lastName}</div>
							<h3>Workstation</h3>
							<div>{workstation}</div>
							<h3>Comment</h3>
							<div>{comment}</div>
						</div>
					</div>
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
