import ActivityTime from "../ActivityTime/ActivityTime";

const ActivityDetails = ({ totalTime, breakTime }) => {
 

  // because React re-runs the component everytime the state or the props in the components changes, we only need to hook into the changed state or props but do not necessarily need to use the state or props in the component
  const storedBreakTime = JSON.parse(localStorage.getItem("breakTime")) || 0;
  const storedExcTime = JSON.parse(localStorage.getItem("activityTime")) || 0;

  return (
    <div className="mt-6 p-2 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Activity Details</h2>
      <ActivityTime header="Activity" time={`${storedExcTime} minutes`} />
      <ActivityTime header="Break" time={`${storedBreakTime} minutes`} />
    </div>
  );
};

export default ActivityDetails;
