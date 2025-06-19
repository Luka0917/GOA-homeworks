import { useState } from 'react'

export default function Task_02(){
    const [input, setInput] = useState('');
    const [range, setRange] = useState('');
    const [result, setResult] = useState('');

    return (
        <div className='border-2 rounded-[24px] p-[30px] flex justify-center items-center flex-col'>
            <form onSubmit={e => {e.preventDefault(); setResult(input.repeat(range))}} className='flex justify-center flex-col'>
                <label htmlFor="text" className='text-[20px]'>Enter Word/Symbol</label>
                <input type="text" id='text' required value={input} onChange={e => setInput(e.target.value)} className="border rounded-[5px] pl-[5px] focus:outline-none" />

                <label htmlFor="range" className='text-[20px] mt-[15px]'>Enter Range</label>
                <input type="number" id='range' min={1} required value={range} onChange={e => setRange(e.target.value)} className="border rounded-[5px] pl-[5px] focus:outline-none" />

                <button className='border rounded-[5px] font-[500] mt-[20px] py-[2px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200'>Submit</button>
            </form>
            <p className='text-[20px] mt-[20px]'>{result}</p>
        </div>
    )
}