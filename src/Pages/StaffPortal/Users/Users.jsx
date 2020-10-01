import React, { useState, useEffect } from "react";
import { Student } from "../../../components";
import { API } from "aws-amplify";
import { listUsers } from "../../../graphql-optimized/queries";
import { updateUser } from "../../../graphql-optimized/mutations";

// import style from "./SignedInStudents.module.css";

const Users = () => {
	const [students, setStudents] = useState(["loading"]);

	useEffect(() => {
		fetchSignedInStudents();
	}, []);

	const fetchSignedInStudents = async () => {
		console.log("Here!!!");
		let results = await API.graphql({
			query: listUsers,
			variables: { filter: { signInStatus: { eq: true } } },
		});
		console.log(results);
		setStudents(results.data.listUsers.items);
	};

	return (
		<div className="left-view">
			<h1>Users on Shift</h1>
			{students.length
				? students[0] !== "loading"
					? students.map((student, index) => (
							<Student
								id={student.id}
								firstName={student.firstName}
								lastName={student.lastName}
								workstation={student.workstation}
								date={student.updatedAt}
								key={index}
								comment={student.comment}
								itemRecord={student.itemRecord}
							/>
					  ))
					: "Loading..."
				: "No Signed in Users"}
		</div>
	);
};

export default Users;
