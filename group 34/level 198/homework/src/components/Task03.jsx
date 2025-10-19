import { useState, useEffect } from "react"

export default function Task03(){
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(() => {
                setCount(prev => prev + 1);
            }, 1000);
        };
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[5px]">Task 03</p>
            <div className="border-2 rounded-[12px] p-[20px] flex justify-center items-center flex-col">
                <p className="text-[30px] font-[500] mb-[10px]">{count}</p>
                <div className="flex justify-center items-center gap-[20px]">
                    <button onClick={() => setIsRunning(true)} className="flex justify-center items-center border rounded-[7px] px-[15px] py-[1px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Start</button>
                    <button onClick={() => setIsRunning(false)} className="flex justify-center items-center border rounded-[7px] px-[15px] py-[1px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Stop</button>
                    <button onClick={() => {setIsRunning(false); setCount(0)}} className="flex justify-center items-center border rounded-[7px] px-[15px] py-[1px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Reset</button>
                </div>
            </div>
        </div>
    )
}