const ActivityTime = ({ header, time }) => {
  return (
    <div className="grid grid-cols-2 mb-2">
      <h3 className="font-semibold">{header} Time: </h3><span className="font-medium text-gray-400 text-end">{time}</span>
    </div>
  );
};

export default ActivityTime;