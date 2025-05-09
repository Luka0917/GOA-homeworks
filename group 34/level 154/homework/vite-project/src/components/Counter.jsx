import { useState } from "react"
import History from "./History";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('text-black');
    const [history, setHistory] = useState([]);

    function changeColor(newCount){
        setCount(newCount)
        if(newCount > 0){
            setColor('text-green-600');
        }else if(newCount < 0){
            setColor('text-red-500');
        }else{
            setColor('text-black');
        }
        setHistory(prevHistory => [newCount, ...prevHistory])
    };
    return (
        <>
            <div className="flex justify-center items-center flex-col border-2 rounded-[24px] p-[20px]">
                <p className={`${color} text-[75px] font-[600] mb-[5px]`}>{count}</p>
                <div className="flex justify-center items-center gap-[20px]">
                    <button onClick={() => changeColor(count + 1)} className="border-2 rounded-[12px] py-[5px] px-[15px] font-[500] cursor-pointer hover:bg-black hover:text-white transition:bg-black duration-300">Increment</button>
                    <button onClick={() => {changeColor(0); setHistory([])}} className="border-2 rounded-[12px] py-[5px] px-[15px] font-[500] cursor-pointer hover:bg-black hover:text-white transition:bg-black duration-300">Reset</button>
                    <button onClick={() => changeColor(count - 1)} className="border-2 rounded-[12px] py-[5px] px-[15px] font-[500] cursor-pointer hover:bg-black hover:text-white transition:bg-black duration-300">Decrement</button>
                </div>
                <History history={history} />
            </div>
        </>
    )
}