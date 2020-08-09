import React, { useEffect, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Transaction.modules.css";
import moment from "moment";

// import ListItemIcon from "@material-ui/core/ListItemIcon";

const Transaction = ({ tools, member, date, requestType, workstation = "-", comment }) => {
	const [open, setOpen] = React.useState(false);

	const handleItemClick = () => {
		setOpen(!open);
	};

	return (
		<div className="request_item_div">
			<List className="request_item">
				<ListItem button onClick={handleItemClick}>
					<ListItemText className="request_item_number" primary={tools ? tools.length : 0} />
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
							<List>
								{tools ? (
									tools.length && tools[0] ? (
										tools.map((item) => {
											console.log(item);
											return (
												<ListItem button key={item} className={styles.nested}>
													<ListItemText primary={item} />
												</ListItem>
											);
										})
									) : (
										<List disablePadding>
											<ListItem className={styles.nested}>No tools added</ListItem>
										</List>
									)
								) : (
									"No Tools"
								)}
							</List>
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

export default Transaction;
