import { useState } from "react"
import { fruits } from '../data'
import Functions from "./Functions";

export default function InputSearch(){
    const [input, setInput] = useState('');

    const filtered = Functions(fruits, input);

    return (
        <div className="flex justify-center items-center flex-col mt-[20px]">
            <input type="text" placeholder="Search..." value={input} onChange={e => setInput(e.target.value)} className="border rounded-[5px] px-[7px] py-[2px] focus:outline-none" />
            <div id="main">
                {filtered.map((el, i) => <div key={i} className="flex justify-center items-center text-center font-[500]">{el}</div>)}
            </div>
        </div>
    )
}