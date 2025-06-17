import { useState } from "react";

export default function Counter1(){
    let count = 0;
    const [_, setRender] = useState(false);

    return (
        <div className="flex justify-center items-center flex-col border-2 rounded-[12px] px-[20px] py-[10px]">
            <p className="text-[50px] font-[500]">{count}</p>
            <div className="flex justify-center items-center gap-[20px]">
                <button 
                    onClick={() => count += 1} 
                    className="border rounded-[5px] px-[5px] py-[2px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-gray-100 transition duration-200">
                    Increment
                </button>
                <button 
                    onClick={() => console.log(count)} 
                    className="border rounded-[5px] px-[5px] py-[2px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-gray-100 transition duration-200">
                    Console.log()
                </button>
                <button 
                    onClick={() => setRender(prev => !prev)} 
                    className="border rounded-[5px] px-[5px] py-[2px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-gray-100 transition duration-200">
                    Render
                </button>
            </div>
        </div>
    )
}