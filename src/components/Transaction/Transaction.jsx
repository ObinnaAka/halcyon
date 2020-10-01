import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styles from "./Transaction.modules.css";
import moment from "moment";

const Transaction = ({
	tools,
	requests,
	materials,
	staffUser,
	user,
	date,
	transactionType,
	transactionComment,
}) => {
	const [open, setOpen] = React.useState(false);

	const handleItemClick = () => {
		setOpen(!open);
	};

	return (
		<div className="request">
			<List>
				<ListItem button onClick={handleItemClick}>
					<ListItemText className="request_type" primary={transactionType} />
					<ListItemText
						className="request_user_name"
						primary={staffUser?.firstName + " " + staffUser?.lastName}
					/>
					<ListItemText className="request_time" primary={moment(date).format("MMM DD h:mm A")} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<div className="request_expanded_view">
						<div className="expanded_view_left">
							<List>
								{requests?.map((item) => {
									return (
										<ListItem key={item} className={styles.nested}>
											<ListItemText primary={item} />
										</ListItem>
									);
								})}
								{tools?.map((item) => {
									return (
										<ListItem key={item} className={styles.nested}>
											<ListItemText primary={item.name} />
										</ListItem>
									);
								})}
								{materials?.map((item) => {
									return (
										<ListItem key={item} className={styles.nested}>
											<ListItemText primary={item.name} />
										</ListItem>
									);
								})}
							</List>
						</div>
						<div className="request_expanded_view_right">
							<h3>Name</h3>
							<div>{user?.firstName + " " + user?.lastName}</div>
							<h3>Comment</h3>
							<div>{transactionComment}</div>
						</div>
					</div>
				</Collapse>
			</List>
		</div>
	);
};

export default Transaction;
