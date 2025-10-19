import { useState } from "react"
import { increment } from './task02Function';
import { decrement } from './task02Function';

export default function Task02(){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    return (
        <div className="flex justify-center items-center flex-col border rounded-[12px] p-[20px]">
            <p className="text-[25px] font-[600] mb-[15px]">{count}</p>
            <div className="flex justify-center items-center gap-[20px]">
                <button onClick={() => increment(setCount, step)} className="border border-black px-[15px] py-[2px] rounded-[5px] focus:outline-none bg-black text-white font-[500] cursor-pointer hover:bg-white hover:text-black transition duration-200">Increment</button>
                <button onClick={() => decrement(setCount, step)} className="border border-black px-[15px] py-[2px] rounded-[5px] focus:outline-none bg-black text-white font-[500] cursor-pointer hover:bg-white hover:text-black transition duration-200">Decrement</button>
            </div>
            <input type="number" value={step} onChange={e => setStep(e.target.value)} className="border px-[5px] py-[2px] rounded-[5px] focus:outline-none mt-[15px]" />
        </div>
    )
}