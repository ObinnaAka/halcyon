import React, { useContext, useEffect, useState } from "react";
import { MemberContext } from "../../../context/member-context";

const Trainings = () => {
  const [myTrainings, setMyTrainings] = useState([]);

  const member = useContext(MemberContext);
  const [checkedIn, setCheckedIn] = useState(false);

  useEffect(() => {
    if (member) setTrainings();
  }, [member]);

  const setTrainings = () => {
    setMyTrainings(member.trainings ?? []);

    if (member.signInStatus) {
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
