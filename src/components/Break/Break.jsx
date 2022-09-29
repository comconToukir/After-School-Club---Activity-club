const Break = ({ break: { time } }) => {
  return (
    <div className="p-2 shadow-sm hover:bg-slate-100 cursor-pointer">
      <span>{time}s</span>
    </div>
  );
};

export default Break;