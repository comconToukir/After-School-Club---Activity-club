import { useEffect, useState } from "react";

const Activities = () => {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setActivities(data))
  }, [])
  return (
    <div>
      {
        activities.map(act => <h1>{act.name}</h1>)
      }
    </div>
  );
};

export default Activities;