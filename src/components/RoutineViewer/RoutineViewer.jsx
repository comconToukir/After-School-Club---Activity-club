import ActivityDetails from "../ActivityDetails/ActivityDetails";
import BreakContainer from "../BreakContainer/BreakContainer";
import UserInfo from "../UserInfo/UserInfo";

const RoutineViewer = () => {
  return (
    <div className="font-noto">
      <div className='p-2 sticky top-0 text-gray-700'>
        <UserInfo />
        <BreakContainer />
        <ActivityDetails />
      </div>
    </div>
  );
};

export default RoutineViewer;