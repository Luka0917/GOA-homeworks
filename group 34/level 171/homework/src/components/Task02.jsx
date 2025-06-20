import { useState, useEffect } from "react";

export default function Task02(){
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
        <div className="flex justify-center items-center flex-col border rounded-[30px] p-[20px] bg-gray-200 text-[#212121]">
            <p className="text-[20px] font-[500]">Time: {seconds}s</p>
            <div className="flex justify-center items-center gap-[20px] mt-[20px]">
                <button onClick={() => setIsRunning(true)} className='border border-[#212121] rounded-[5px] mt-[15px] py-[3px] px-[10px] font-[500] bg-[#212121] text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-[#212121] transition duration-200'>Start</button>
                <button onClick={() => setIsRunning(false)} className='border border-[#212121] rounded-[5px] mt-[15px] py-[3px] px-[10px] font-[500] bg-[#212121] text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-[#212121] transition duration-200'>Stop</button>
                <button onClick={() => setIsRunning(true)} className='border border-[#212121] rounded-[5px] px-[10px] mt-[15px] py-[3px] font-[500] bg-[#212121] text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-[#212121] transition duration-200'>Resume</button>
            </div>
        </div>
    )
}