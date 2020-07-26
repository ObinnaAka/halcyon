import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Tool.modules.css";
import moment from "moment";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const Student = ({ name, date, workstation, member }) => {
	const [open, setOpen] = React.useState(false);

	// TODO We should add the ability to send a message to a student that's checked in.
	const handleItemClick = () => {
		setOpen(!open);
	};
	return (
		<div className="student_item_div">
			<List className="student_item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText className="tool_name" primary={name} />
					<ListItemText className="workstation" primary={workstation} />
					<ListItemText className="time" primary={moment(date).fromNow()} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<div className="student_expanded-view">
						<div className="student_expanded-view-left">
							<h4>Current Holder:</h4>
							{member.firstName + " " + member.lastName}
						</div>
						<div className="student_expanded-view-right"></div>
					</div>
				</Collapse>
			</List>
		</div>
	);
};

export default Student;
