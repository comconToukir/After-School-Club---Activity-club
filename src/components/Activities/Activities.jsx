import { useEffect, useState } from "react";
import Activity from "../Activity/Activity";

const Activities = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])
  return (
    <div className="w-3/4 mx-auto grid grid-cols-3 gap-3 my-10">
      {
        activities.map(act => <Activity key={act.id} act={act} />)
      }
    </div>
  );
};

export default Activities;