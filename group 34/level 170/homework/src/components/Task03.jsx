import { useState, useEffect } from "react";

export default function Task03(){
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(() => {
                setSeconds(prev => prev + 1);
            }, 1000);
        };
        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="flex justify-center items-center flex-col border rounded-[12px] p-[20px]">
            <p className="text-[20px] font-[500]">Time: {seconds}s</p>
            <div className="flex justify-center items-center gap-[20px] mt-[20px]">
                <button onClick={() => setIsRunning(true)} className="border border-black rounded-[5px] bg-black text-white font-[500] px-[10px] py-[2px] cursor-pointer hover:bg-white hover:text-black transition duration-200">Start</button>
                <button onClick={() => setIsRunning(false)} className="border border-black rounded-[5px] bg-black text-white font-[500] px-[10px] py-[2px] cursor-pointer hover:bg-white hover:text-black transition duration-200">Stop</button>
                <button onClick={() => {setIsRunning(false); setSeconds(0);}} className="border border-black rounded-[5px] bg-black text-white font-[500] px-[10px] py-[2px] cursor-pointer hover:bg-white hover:text-black transition duration-200">Reset</button>
            </div>
        </div>
    )
}