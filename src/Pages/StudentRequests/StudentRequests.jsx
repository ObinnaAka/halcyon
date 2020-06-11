import React, { Component } from "react";
import { Member } from "../../Classes/Member";
import { RequestItem, Request } from "../../components";
import style from "./StudentRequests.module.css";

const StudentRequests = () => {
	// These are for testing
	let items = ["Chicken Salad", "Lemon Greens", "Chicken Fetters"];
	let member = new Member("Obinna", "Akahara");

	return (
		<div className={style.mainView}>
			<Request
				items={items.slice(0)}
				member={member}
				time={new Date()}
				workstation="DB-12"
			/>
			<Request
				items={items.slice(1)}
				member={member}
				time={new Date()}
				workstation="HQ-1"
			/>
		</div>
	);
};

export default StudentRequests;
