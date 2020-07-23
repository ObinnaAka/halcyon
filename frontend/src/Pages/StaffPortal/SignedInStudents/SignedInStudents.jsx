import React, { useState, useEffect } from "react";
import { Student } from "../../../components";
import { API } from "aws-amplify";
import { listMembers } from "../../../graphql/queries";
import { updateMember } from "../../../graphql/mutations";

// import style from "./StudentStudents.module.css";

const StudentStudents = () => {
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetchSignedInStudents();
		// return () => {
		// 	cleanup
		// }
	}, []);

	const fetchSignedInStudents = async () => {
		let newStudents = await API.graphql({
			query: listMembers,
			variables: { input: { signInStatus: true } },
		});
		setStudents([newStudents]);
	};

	return (
		<div className="left-view">
			{students.map((student, index) => (
				<Student
					firstName={student.firstName}
					lastName={student.lastName}
					workstation={student.workstation}
					date={student.updatedAt}
					key={index}
					comment={student.comment}
					itemRecord={student.itemRecord}
				/>
			))}
		</div>
	);
};

export default StudentStudents;
