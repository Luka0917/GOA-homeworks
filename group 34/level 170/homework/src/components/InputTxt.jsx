import { useState, useEffect } from "react"

export default function InputTxt(){
    const [input, setInput] = useState();

    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <p>{input}</p>
        </div>
    )
}