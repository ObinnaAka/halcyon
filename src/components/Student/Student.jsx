import React, { useState, useContext } from "react";

import { API } from "aws-amplify";
import { createNewTransaction } from "../../graphql-optimized/mutations";

import { UserContext } from "../../context/user-context";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Student.modules.css";
import moment from "moment";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const Student = ({
	eid,
	firstName,
	lastName,
	date,
	comment = "-",
	itemRecord,
	workstation = "-",
}) => {
	const [open, setOpen] = React.useState(false);

	const user = useContext(UserContext);
	// TODO Add setTools to this useState function
	const [tools, setTools] = useState(itemRecord ? Object.values(itemRecord) : []);

	const handleItemClick = () => {
		setOpen(!open);
	};

	const checkOut = async () => {
		console.log(user.eid);
		await API.graphql({
			query: createNewTransaction,
			variables: {
				input: {
					userId: eid.replace(/\s/g, "").toLowerCase(),
					tools: workstation.id,
					staffUserId: user.eid,
					transactionType: "Sign Out",
					transactionStatus: "Finished",
				},
			},
		})
			.then(() => alert("User Checked Out"))
			.catch((err) => {
				alert("Check Out Failed");
				console.log(err);
			});
	};
	// TODO We should add the ability to send a message to a student that's checked in.

	const listItems = tools.map((item, index) => (
		<ListItem button key={index} className={styles.nested}>
			<ListItemText primary={tools.name} />
		</ListItem>
	));
	return (
		<div className="student_item_div">
			<List className="student_item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText className="student_user_name" primary={firstName + " " + lastName} />
					<ListItemText className="student_workstation" primary={workstation?.name} />
					<ListItemText className="student_time" primary={moment(date).fromNow()} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<div className="student_expanded-view">
						<div className="student_expanded-view-left">
							<List disablePadding>{listItems}</List>
							<button className="large" onClick={checkOut}>
								Check Out
							</button>
						</div>
						<div className="student_expanded-view-right">
							<h3>Name</h3>
							<div>{firstName + " " + lastName}</div>
							<h3>Workstation</h3>
							<div>{workstation?.name}</div>
							<h3>Comment</h3>
							<div>{comment}</div>
						</div>
					</div>
				</Collapse>
			</List>
		</div>
	);
};

export default Student;
