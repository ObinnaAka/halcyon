import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/user-context";

const Trainings = () => {
	const [myTrainings, setMyTrainings] = useState([]);

	const user = useContext(UserContext);
	const [checkedIn, setCheckedIn] = useState(false);

	useEffect(() => {
		if (user) setTrainings();
	}, [user]);

	const setTrainings = () => {
		setMyTrainings(user.trainings ?? []);

		if (user.signInStatus) {
			setCheckedIn(true);
		}

		console.log(myTrainings.length);
	};

	return (
		<div>
			<h1>Coming Soon</h1>
			{/* {myTrainings.length ? (
        <div>
          <h2>Completed Training(s):</h2>
          {myTrainings.map((training) => (
            <label>{training}</label>
          ))}
        </div>
      ) : (
        <h4>You do not have any completed trainings yet!</h4>
      )} */}
		</div>
	);
};

export default Trainings;
