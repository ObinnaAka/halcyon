import React, { useState, useEffect } from "react";
import { Student } from "../../../components";
import { API } from "aws-amplify";
import { listMembers } from "../../../graphql-optimized/queries";
import { updateMember } from "../../../graphql-optimized/mutations";

// import style from "./SignedInStudents.module.css";

const Students = () => {
	const [students, setStudents] = useState(["loading"]);

	useEffect(() => {
		fetchSignedInStudents();
	}, []);

	const fetchSignedInStudents = async () => {
		console.log("Here!!!");
		let results = await API.graphql({
			query: listMembers,
			variables: { filter: { signInStatus: { eq: true } } },
		});
		console.log(results);
		setStudents(results.data.listMembers.items);
	};

	return (
		<div className="left-view">
			{/* {students.length
				? students[0] !== "loading"
					? students.map((student, index) => (
							<Student
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
				: "No Signed in Students"} */}
			Test
		</div>
	);
};

export default Students;
