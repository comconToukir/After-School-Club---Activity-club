import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ActivityDetails from "../ActivityDetails/ActivityDetails";
import BreakContainer from "../BreakContainer/BreakContainer";
import UserInfo from "../UserInfo/UserInfo";

const RoutineViewer = ({ className, totalTime }) => {
  const [breakTime, setBreakTime] = useState(0);

  const handleBreak = (time) => {
    setBreakTime(time);
    localStorage.setItem("breakTime", time);
  }

  const completeActivities = () => toast.success("Congratulations!!! You have completed today's activity list. Keep Rocking!!!");

  return (
    <div className={`${className}  mt-8 md:mt-0 font-noto w-11/12 sm:w-10/12 md:w-full mx-auto`}>
      <div className='px-4 py-2 sticky top-0 text-gray-700'>
        <UserInfo />
        <BreakContainer handleBreak={handleBreak} />
        <ActivityDetails totalTime={totalTime} breakTime={breakTime} />
        <button onClick={completeActivities} className="text-xl font-semibold w-full mt-6 p-2 bg-blue-200 hover:bg-blue-300 transition-all shadow-sm">Activity Completed</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default RoutineViewer;