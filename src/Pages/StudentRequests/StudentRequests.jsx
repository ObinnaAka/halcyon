import React, { Component } from "react";
import { Member } from "../../Classes/Member";
import { RequestItem } from "../../components";
import style from "./StudentRequests.module.css";

const StudentRequests = () => {
	// These are for testing
	let items = ["Chicken Salad", "Lemon Greens"];
	let member = new Member("Obinna", "Akahara");

	return (
		<div className={style.mainView}>
			<RequestItem
				items={items.slice(1)}
				member={member}
				time="12:01"
				workstation="DB-12"
			/>
			<RequestItem
				items={items}
				member={member}
				time="12:03"
				workstation="HQ-1"
			/>
		</div>
	);
};

export default StudentRequests;
