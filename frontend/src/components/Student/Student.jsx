import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Student.modules.css";
import moment from "moment";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const Request = ({
	firstName,
	lastName,
	date,
	comment,
	itemRecord,
	workstation,
}) => {
	const [open, setOpen] = React.useState(false);
	const [done, setDone] = React.useState(false);
	// const [requestDone, setRequestDone] = React.useState(false);
	// const [itemDone, setItemDone] = React.useState(false);

	// TODO Add setTools to this useState function
	const [tools] = useState(Object.values(itemRecord));

	const handleItemClick = () => {
		setOpen(!open);
	};
	// const handleDoneClick = () => {
	// 	setRequestDone(!requestDone);
	// 	requestDone
	// 		? setDone(!done)
	// 		: setTimeout(function () {
	// 				setDone(!done);
	// 		  }, 3000);
	// 	console.log(tools);
	// };
	// const handleItemDone = () => {
	// 	setItemDone(!itemDone);
	// };

	const listItems = tools.map((item, index) => (
		<ListItem button key={index} className={styles.nested}>
			<ListItemText primary={tools.name} />
		</ListItem>
	));
	return (
		<div className="student_item_div">
			<List className="student_item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText
						className="student_member_name"
						primary={firstName + " " + lastName}
					/>
					<ListItemText className="student_workstation" primary={workstation} />
					<ListItemText
						className="student_time"
						primary={moment.unix(date / 1000).fromNow()}
					/>
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<div className="student_expanded-view">
						<div className="student_expanded-view-left">
							<List disablePadding>{listItems}</List>
						</div>
						<div className="student_expanded-view-right">
							<h3>Name</h3>
							<div>{firstName + " " + lastName}</div>
							<h3>Workstation</h3>
							<div>{workstation}</div>
							<h3>Comment</h3>
							<div>{comment}</div>
						</div>
					</div>
				</Collapse>
			</List>
		</div>
	);
};

export default Request;
