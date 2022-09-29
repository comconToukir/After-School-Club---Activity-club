const Break = ({ break: { time }, handleBreak }) => {
  return (
    <div
      className="p-2 hover:bg-slate-100 cursor-pointer"
      onClick={() => handleBreak(time)}
    >
      <span className="text-gray-500">{time}m</span>
    </div>
  );
};

export default Break;
