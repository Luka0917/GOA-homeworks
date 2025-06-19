import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className='border rounded-[24px] p-[20px] flex justify-center items-center gap-[20px]'>
          <button 
            onClick={() => setCount(prev => prev + 1)} 
            className='border rounded-[7px] p-[5px] text-[20px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200'>
            Decrement
          </button>
          <p className='text-[50px] font-[500]'>{count}</p>
          <button 
            onClick={() => setCount(prev => prev - 1)} 
            className='border rounded-[7px] p-[5px] text-[20px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200'>
            Increment
          </button>
        </div>
      </div>
    </>
  )
}
export default App