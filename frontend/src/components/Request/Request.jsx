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

const Request = ({ items, member, date, type, workstation }) => {
	const [open, setOpen] = React.useState(false);
	const [done, setDone] = React.useState(false);
	const [requestDone, setRequestDone] = React.useState(false);
	const [itemDone, setItemDone] = React.useState(false);
	const [tools, setTools] = useState(Object.values(items));

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
				className="itemButton"
				type="checkbox"
				onChange={handleItemDone}
				checked={itemDone}
			/>
			<ListItemText primary={item.name} />
		</ListItem>
	));
	return (
		<div className="itemDiv">
			<ToggleButton
				className="doneButton"
				type="checkbox"
				onChange={handleDoneClick}
				checked={requestDone}
			/>
			<List className="item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText primary={tools.length} />
					<ListItemText className="request-type" primary={type} />
					<ListItemText
						className="member-name"
						primary={member.firstName + " " + member.lastName}
					/>
					<ListItemText className="workstation" primary={workstation} />
					<ListItemText
						className="time"
						primary={moment.unix(date / 1000).fromNow()}
					/>
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<div className="expanded-view">
						<div className="expanded-view-left">
							<List disablePadding>{listItems}</List>
						</div>
						<div className="expanded-view-right">
							<h3>Name</h3>
							<div>{member.firstName + " " + member.lastName}</div>
							<h3>Workstation</h3>
							<div>{workstation}</div>
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
