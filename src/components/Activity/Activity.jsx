const Activity = ({ act: { name, picture, timeNeeded, description }}) => {
  return (
    <div className="font-noto text-gray-600 p-2 shadow-sm flex flex-col">
      <img src={picture} alt="" />
      <div className="p-2 mt-2 flex flex-col justify-between flex-grow">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-500 text-sm mb-1">{description}</p>
        <p className="flex-grow mb-2">Active Time: <span className="font-medium text-gray-900">{timeNeeded} min</span></p>
        <button className="bg-blue-200 w-full py-2 font-semibold">Add To Routine</button>
      </div>
    </div>
  );
};

export default Activity;