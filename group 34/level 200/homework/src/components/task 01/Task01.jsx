import { useState, useEffect } from "react"
import { showHide } from './task01Function'

export default function Task01(){
    const [input, setInput] = useState('');
    const [show, setShow] = useState(true);

    return (
        <div className="flex justify-center items-center gap-[10px] border rounded-[12px] p-[20px]">
            <input type={show ? 'text' : 'password'} value={input} onChange={e => setInput(e.target.value)} className="border px-[5px] py-[2px] rounded-[5px] focus:outline-none" />
            <button onClick={() => showHide(setShow)} className="border border-black px-[15px] py-[2px] rounded-[5px] focus:outline-none bg-black text-white font-[500] cursor-pointer hover:bg-white hover:text-black transition duration-200">{show ? 'Hide' : 'Show'}</button>
        </div>
    )
}