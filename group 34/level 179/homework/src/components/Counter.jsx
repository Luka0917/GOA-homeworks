import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center items-center flex-col border rounded-[12px] p-[20px]">
            <p className="text-[30px] font-[500]">Counter</p>
            <p className="text-[20px] mt-[10px]">Count: {count}</p>
            <div className="flex justify-center items-center gap-[20px] mt-[20px]">
                <button onClick={() => setCount(prev => prev + 1)} className="border rounded-[5px] px-[10px] py-[3px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Increment</button>
                <button onClick={() => setCount(prev => prev - 1)} className="border rounded-[5px] px-[10px] py-[3px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Decrement</button>
                <button onClick={() => setCount(0)} className="border rounded-[5px] px-[10px] py-[3px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Reset</button>
            </div>
        </div>
    )
}