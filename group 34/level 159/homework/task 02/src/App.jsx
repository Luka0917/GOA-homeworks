import { useState } from 'react'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-[#F5F5F5]'>
        <div className='flex justify-center items-center flex-col rounded-[24px] px-[20px] py-[40px] bg-[#4DA8DA]'>
          <input type='text' placeholder='Number 1' value={num1} onChange={e => setNum1(e.target.value)} className='border border-white rounded-[5px] text-white pl-[5px] focus:outline-none'/>
          <input type='text' placeholder='Number 2' value={num2} onChange={e => setNum2(e.target.value)} className='border border-white rounded-[5px] text-white pl-[5px] focus:outline-none mt-[10px]'/>
          <div className='flex justify-between items-center gap-[20px] mt-[15px] w-[100%]'>
            <button onClick={() => setResult(Number(num1) + Number(num2))} className='border border-white rounded-[50%] text-white w-[25px] h-[25px] flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#4DA8DA]'>+</button>
            <button onClick={() => setResult(Number(num1) - Number(num2))} className='border border-white rounded-[50%] text-white w-[25px] h-[25px] flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#4DA8DA]'>-</button>
            <button onClick={() => setResult(Number(num1) * Number(num2))} className='border border-white rounded-[50%] text-white w-[25px] h-[25px] flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#4DA8DA]'>*</button>
            <button onClick={() => setResult(Number(num1) / Number(num2))} className='border border-white rounded-[50%] text-white w-[25px] h-[25px] flex justify-center items-center cursor-pointer hover:bg-white hover:text-[#4DA8DA]'>/</button>
          </div>
          <p className='text-white mt-[20px] font-[500]'>Result: {result}</p>
        </div>
      </div>
    </>
  )
}
export default App