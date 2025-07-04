import { useState } from "react"

export default function Task01(){
    const [count, setCount] = useState(0);
    const [upDown, setUpDown] = useState('Zero');

    return (
        <div className="flex justify-center items-center flex-col border rounded-[20px] p-[20px]">
            <p className="text-[30px] font-[500]">{count}</p>
            <div className="flex justify-center items-center gap-[20px] mt-[20px]">
                <button onClick={() => {setCount(prev => prev + 1); setUpDown('Up')}} className="border border-black rounded-[7px] px-[10px] py-[3px] font-[500] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Increase</button>
                <button onClick={() => {setCount(prev => prev - 1); setUpDown('Down')}} className="border border-black rounded-[7px] px-[10px] py-[3px] font-[500] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Decrease</button>
                <button onClick={() => {setCount(0); setUpDown('Zero')}} className="border border-black rounded-[7px] px-[10px] py-[3px] font-[500] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Reset</button>
            </div>
            <p className="text-[20px] font-[500] mt-[20px]">{upDown}</p>
        </div>
    )
}