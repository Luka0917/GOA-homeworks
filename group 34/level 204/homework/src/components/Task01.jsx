import { useEffect } from "react";
import { useState } from "react"
import { FaPhone } from "react-icons/fa6";

export default function Task01(){
    const [input, setInput] = useState('');
    const [formatted, setFormatted] = useState('');

    useEffect(() => {
        let result = '+955 ';
        for(let i = 0; i < input.length; i++){
            if((i + 1) % 3 === 0 && i !== input.length - 1){
                result += input[i] + ' ';
                continue;
            };
            result += input[i];
        };
        setFormatted(result);
    }, [input]);

    return (
        <div className="flex justify-center items-center flex-col gap-[10px]">
            <input type="text" placeholder="Number..." value={input} onChange={e => setInput(e.target.value)} className="border rounded-[5px] px-[3px] py-[1px]" />
            <p className="flex justify-center items-center gap-[5px]"><FaPhone /> {formatted}</p>
        </div>
    )
}