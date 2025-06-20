import { useState, useEffect } from 'react';
import Task01 from './components/Task01';
import Task02 from './components/Task02';

function App() {
  const [Registered, setRegistered] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('data')){
      setRegistered(true);
    };
  }, []);

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-[#212121] gap-[100px]'>
        {Registered ? <p className='text-[30px] font-[600] text-gray-200'>Registered!</p> : <Task01 setRegistered={setRegistered} />}
        <Task02 />
      </div>
    </>
  )
}
export default App