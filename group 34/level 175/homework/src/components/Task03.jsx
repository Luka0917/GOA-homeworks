import { useRef, useEffect, useState } from "react"

export default function Task03(){
    const [time, setTime] = useState(0);
    const [isRunning, setISRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if(isRunning){
            intervalRef.current = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000)
        };
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isRunning]);

    return (
        <div className="flex justify-center items-center flex-col border rounded-[7px] p-[20px]">
            <p className="text-[40px] font-[500]">{time}</p>
            <div className="flex justify-center items-center gap-[10px]">
                <button onClick={() => setISRunning(true)} className="mt-[20px] rounded-[7px] px-[10px] py-[5px] text-[20px] font-[500] bg-gray-600 text-gray-100 cursor-pointer hover:bg-gray-500 hover:text-gray-900 transition duration-200">Start</button>
                <button onClick={() => setISRunning(false)} className="mt-[20px] rounded-[7px] px-[10px] py-[5px] text-[20px] font-[500] bg-gray-600 text-gray-100 cursor-pointer hover:bg-gray-500 hover:text-gray-900 transition duration-200">Stop</button>
                <button onClick={() => {setISRunning(false); setTime(0)}} className="mt-[20px] rounded-[7px] px-[10px] py-[5px] text-[20px] font-[500] bg-gray-600 text-gray-100 cursor-pointer hover:bg-gray-500 hover:text-gray-900 transition duration-200">Reset</button>
            </div>
        </div>
    )
}