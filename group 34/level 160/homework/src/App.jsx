import { useState } from 'react'
import Register from './components/Register'
import MainPage from './components/MainPage';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen bg-[#FBFBFB]'>
        {isRegistered ? <MainPage setIsRegistered={setIsRegistered} /> : <Register setIsRegistered={setIsRegistered} />}
      </div>
    </>
  )
}
export default App