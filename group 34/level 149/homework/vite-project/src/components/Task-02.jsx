import { useState } from 'react'

export default function Task2(){
    const [point, setPoint] = useState(0)
    return (
        <>
            <div className='flex justify-center items-center flex-col border-2 rounded-[24px] w-[200px] p-[20px]'>
                <p className='text-[20px] font-[500]'>Count: {point}</p>
                <button className='px-[15px] py-[5px] border-2 rounded-[12px] mt-[10px] cursor-pointer hover:bg-black hover:text-white transition-bg duration-300' onClick={() => setPoint(point + 1)}>Click me!</button>
            </div>
        </>
    )
}