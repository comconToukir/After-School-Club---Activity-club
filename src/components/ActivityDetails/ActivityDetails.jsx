import ActivityTime from "../ActivityTime/ActivityTime";

const ActivityDetails = () => {
  return (
    <div className="mt-6 p-2 shadow-sm">
      <h2 className="text-xl font-semibold mb-3">Activity Details</h2>
      <ActivityTime header="Exercise" time={`200 minutes`} />
      <ActivityTime header="Break" time={`30 minutes`} />
    </div>
  );
};

export default ActivityDetails;