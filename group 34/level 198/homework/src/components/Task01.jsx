import { useState } from "react"

export default function Task01(){
    const [input, setInput] = useState('');

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[5px]">Task 01</p>
            <div className="border-2 rounded-[12px] p-[20px]">
                <input type="text" placeholder="Enter text..." value={input} onChange={e => setInput(e.target.value)} className="border rounded-[5px] pl-[4px]"/>
                <p><b>Input:</b> {input}</p>
            </div>
        </div>
    )
}