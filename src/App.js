import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import RoutineViewer from './components/RoutineViewer/RoutineViewer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1 className='w-5/6 mt-8 mx-auto px-2 py-1 text-2xl text-title-clr font-semibold font-noto border-l-4 border-l-routine-green'>Select Your After School Activities</h1>
        <div className='grid grid-cols-[1fr_300px]'>
          <Activities />
          <RoutineViewer />
        </div>
      </main>
    </div>
  );
}

export default App;
