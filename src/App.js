import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import RoutineViewer from './components/RoutineViewer/RoutineViewer';

import { useState } from 'react';

import './App.css';
import QaContainer from './components/QaContainer/QaContainer';

function App() {
  const [timeList, setTimeList] = useState([])
  const [totalTime, setTotalTime] = useState(0)

  const handleActivity = (time) => {
    const newTimeList = [...timeList, time];
    setTimeList(newTimeList);

    const totalActiveTime = newTimeList.reduce(
      (prevTime, currTime) => prevTime + currTime,
      0
    );

    setTotalTime(totalActiveTime);
    localStorage.setItem("activityTime", totalActiveTime);
  }

  return (
    <div>
      <Header />
      <main>
        <h1 className='w-5/6 mt-8 mx-auto px-2 py-1 text-2xl text-title-clr font-semibold font-montserrat border-l-4 border-l-routine-green'>Select Your After School Activities</h1>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_350px]'>
          <Activities className="order-2 md:order-1" handleActivity={handleActivity} />
          <RoutineViewer className="order-1 md-order-2" totalTime={totalTime} />
        </div>
        <div className="w-5/6 mx-auto my-6 font-noto text-gray-700">
          <QaContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
