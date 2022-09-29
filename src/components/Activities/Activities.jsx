import { useEffect, useState } from "react";
import Activity from "../Activity/Activity";

const Activities = ({ className, handleActivity }) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  return (
    <div
      className={`${className} w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 my-10`}
    >
      {activities.map((act) => (
        <Activity 
          key={act.id} 
          act={act} 
          handleActivity={handleActivity} 
          />
      ))}
    </div>
  );
};

export default Activities;
