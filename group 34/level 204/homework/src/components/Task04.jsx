import { useState } from "react"

export default function Task04(){
    const [count, setCount] = useState(0);

    function getColor(){
        if(count > 5) return 'green';
        if(count < 0) return 'red';
        return 'black'
    }

    return (
        <div className="flex justify-center items-center flex-col gap-[10px]">
            <p style={{color: getColor()}} className="text-[40px] font-[600]">{count}</p>
            <div className="flex justify-center items-center gap-[20px]">
                <button onClick={() => setCount(prev => prev + 1)} className='border border-black rounded-[5px] px-[15px] py-[3px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200'>Increase</button>
                <button onClick={() => setCount(prev => prev - 1)} className='border border-black rounded-[5px] px-[15px] py-[3px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200'>Decrease</button>
                <button onClick={() => setCount(0)} className='border border-black rounded-[5px] px-[15px] py-[3px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200'>Reset</button>
            </div>
        </div>
    )
}