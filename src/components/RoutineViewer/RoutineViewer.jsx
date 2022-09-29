import ActivityDetails from "../ActivityDetails/ActivityDetails";
import BreakContainer from "../BreakContainer/BreakContainer";
import UserInfo from "../UserInfo/UserInfo";

const RoutineViewer = ({ className, timeList }) => {
  return (
    <div className={`${className}  mt-8 md:mt-0 font-noto w-11/12 sm:w-10/12 md:w-full mx-auto`}>
      <div className='px-4 py-2 sticky top-0 text-gray-700'>
        <UserInfo />
        <BreakContainer />
        <ActivityDetails timeList={timeList} />
        <button className="text-xl font-semibold w-full mt-6 p-2 bg-blue-200 hover:bg-blue-300 shadow-sm">Activity Completed</button>
      </div>
    </div>
  );
};

export default RoutineViewer;