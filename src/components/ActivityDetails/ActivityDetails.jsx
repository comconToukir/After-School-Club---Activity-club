import ActivityTime from "../ActivityTime/ActivityTime";

const ActivityDetails = ({ timeList }) => {
  const totalActiveTime = timeList.reduce(
    (prevTime, currTime) => prevTime + currTime,
    0
  );

  return (
    <div className="mt-6 p-2 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Activity Details</h2>
      <ActivityTime header="Exercise" time={`${totalActiveTime} minutes`} />
      <ActivityTime header="Break" time={`30 minutes`} />
    </div>
  );
};

export default ActivityDetails;
