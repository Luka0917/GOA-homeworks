import { useEffect } from "react";
import { useState } from "react"

export default function Task03(){
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    function handleChange(e){
        const value = e.target.value;
        if(value.length <= 100){
            setInput(value);
            setError("");
        }else{
            setError("Limit reached!");
        };
    };

    return (
        <div>
            <input type="text" placeholder="Enter Text..." value={input} onChange={handleChange} className="border rounded-[5px] px-[3px] py-[1px]" />
            <p className="text-red-500 text-[20px] text-center mt-[5px]">{error}</p>
        </div>
    )
}