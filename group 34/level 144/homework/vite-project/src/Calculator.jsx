import { use, useState } from 'react'

export default function Calculator(){
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    function plus(e){
        e.preventDefault();
        setResult(parseInt(num1) + parseInt(num2))
    }
    function minus(e){
        e.preventDefault();
        setResult(parseInt(num1) - parseInt(num2))
    }
    function multiply(e){
        e.preventDefault();
        setResult(parseInt(num1) * parseInt(num2))
    }
    function divide(e){
        e.preventDefault();
        setResult(parseInt(num1) / parseInt(num2))
    }
    return (
        <>
            <div className='border-2 rounded-[24px] flex justify-center items-center flex-col mt-[20px] px-[25px] py-[50px]'>
                <p className='text-[30px] font-[600] mb-[20px]'>Calculator</p>
                <form className='flex justify-center flex-col'>
                    <label htmlFor="num-1">Number 1</label>
                    <input type="number" id="num-1" value={num1} onChange={(e) => setNum1(e.target.value)} className='border-2 px-[10px] py-[5px] rounded-[7px]' />
                    <label htmlFor="num-2">Number 2</label>
                    <input type="number" id="num-2" value={num2} onChange={(e) => setNum2(e.target.value)} className='border-2 px-[10px] py-[5px] rounded-[7px]' />
                    <div className='flex justify-between items-center'>
                        <button onClick={plus} className='px-[15px] py-[5px] bg-black text-white border-2 rounded-[7px] mt-[20px] cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>+</button>
                        <button onClick={minus} className='px-[15px] py-[5px] bg-black text-white border-2 rounded-[7px] mt-[20px] cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>-</button>
                        <button onClick={multiply} className='px-[15px] py-[5px] bg-black text-white border-2 rounded-[7px] mt-[20px] cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>*</button>
                        <button onClick={divide} className='px-[15px] py-[5px] bg-black text-white border-2 rounded-[7px] mt-[20px] cursor-pointer hover:bg-white hover:text-black transition-bg duration-300'>/</button>
                    </div>
                </form>
                <p className='mt-[20px] text-[20px]'><b>Answer:</b> {result}</p>
            </div>
        </>
    )
}