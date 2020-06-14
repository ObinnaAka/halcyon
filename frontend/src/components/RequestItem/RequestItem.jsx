import React, { useState, useEffect } from "react";
import styles from "./RequestItem.module.css";

// items is an array of the tools/items currently being requested. It is an Array
// member is the user making the request. It is a Member object (reference can be found under "Classes/Member")
// time is a timestamp for when the request was made. It is a TimeStamp
// workstation is the place where to have the object delivered. It is a String

const RequestItem = ({ items, member, time, workstation }) => {
	return (
		<div className={styles.item}>
			<div className={styles.itemNumber}>{items.length}</div>
			<div className={styles.itemName}>{items[0]}</div>
            <div className={styles.workstation}>{workstation}</div>
			<div className={styles.memberName}>
				{member.firstName + " " + member.lastName}
            </div>
            <div className={styles.time}>{time}</div>
		</div>
	);
};

export default RequestItem;
