import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('No')
  return (
    <>
      <div className='flex justify-center items-center flex-col gap-[20px]'>
        <div className='flex justify-center items-center flex-col gap-[20px] border-2 rounded-[24px] mt-[20px] w-[350px] h-[200px]'>
          <p className='text-[50px]'>{count}</p>
          <div className='flex justify-center items-center gap-[20px]'>
            <button onClick={() => setCount(count + 1)} className='border-2 rounded-[5px] py-[5px] px-[10px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>Increase</button>
            <button onClick={() => setCount(count - 1)} className='border-2 rounded-[5px] py-[5px] px-[10px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>Decrease</button>
            <button onClick={() => setCount(0)} className='border-2 rounded-[5px] py-[5px] px-[10px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>Reset</button>
          </div>
        </div>
        <div className='flex justify-center items-center flex-col gap-[20px] border-2 rounded-[24px] w-[350px] h-[200px]'>
          <p className='text-[20px]'><b>Is programmer:</b> {text}</p>
          <button onClick={() => setText(text === 'Yes' ? 'No' : 'Yes')} className='border-2 rounded-[5px] py-[5px] px-[10px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>Change Text</button>
        </div>
      </div>
    </>
  )
}
export default App