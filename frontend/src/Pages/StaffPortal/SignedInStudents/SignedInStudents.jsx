import React, { useState } from "react";
import { Student } from "../../../components";
// import AuthContext from "../../../context/auth-context";
import gql from "graphql-tag";

import { useSubscription, useQuery } from "@apollo/react-hooks";

// import style from "./SignedInStudents.module.css";

// TODO Create Signed in students function
// ! Add Workstation as a field for Member Object
const SIGNED_IN_STUDENTS = gql`
	query {
		signedInStudents {
			_id
			firstName
			lastName
			itemRecord {
				name
			}
			workstation {
				name
			}
			signinStatus
			updatedAt
		}
	}
`;

const SIGNED_IN_STUDENTS_SUBSCRIPTION = gql`
	subscription {
		onNewStudent {
			_id
			transactionType
			member {
				firstName
				lastName
				itemRecord {
					name
				}
				workstation {
					name
				}
			}
			comment
			updatedAt
		}
	}
`;

const SignedInStudents = (Apollo) => {
	const [students, setStudents] = useState([]);

	useSubscription(SIGNED_IN_STUDENTS_SUBSCRIPTION, {
		onSubscriptionData: ({ subscriptionData }) => {
			console.log(subscriptionData);
			if (subscriptionData) {
				let newStudent = [subscriptionData.data.onNewStudent.member];
				let newStudents = newStudent.concat(students);
				setStudents(newStudents);
			} else {
				return <div className="page">No new students</div>;
			}
		},
	});

	const { loading: queryLoading, error: queryError } = useQuery(SIGNED_IN_STUDENTS, {
		variables: {},
		onCompleted: (data) => {
			console.log(data);
			if (data) {
				const resArray = Object.values(data.signedInStudents);
				setStudents(resArray);
			} else {
				return <div className="page">No new students</div>;
			}
		},
	});

	if (queryLoading) return <div className="page">Loading ...</div>;
	if (queryError) return <div className="page">{`Error! ${queryError}`}</div>;

	return (
		<div className="left-view">
			{students.map((student, index) => (
				<Student
					firstName={student.firstName}
					lastName={student.lastName}
					// ! ItemRecord will need to be formatted to have workstation separate
					// workstation={student.workstation}
					date={student.updatedAt}
					key={index}
					comment={student.comment}
					itemRecord={student.itemRecord}
				/>
			))}
		</div>
	);
};

export default SignedInStudents;
