import { useState } from "react";

export default function Counter3(){
    const [count, setCount] = useState(0);

    return (
        <div className="flex justify-center items-center flex-col border-2 rounded-[12px] px-[20px] py-[10px]">
            <p className="text-[50px] font-[500]">{count}</p>
            <div className="flex justify-center items-center gap-[20px]">
                <button 
                    onClick={() => setCount(count + 1)}
                    className="border rounded-[5px] px-[5px] py-[2px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-gray-100 transition duration-200">
                    Increment
                </button>
                <button 
                    onClick={() => console.log(count)}
                    className="border rounded-[5px] px-[5px] py-[2px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-gray-100 transition duration-200">
                    Console.log()
                </button>
            </div>
        </div>
    )
}