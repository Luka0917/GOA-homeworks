import { useState, useEffect } from "react";

export default function Task01(){
    const [input, setInput] = useState('');

    useEffect(() => {
        const inputValue = localStorage.getItem('inputValue');
        if(inputValue){
            setInput(inputValue);
        };
    }, []);

    function handleInput(e){
        const value = e.target.value;
        setInput(value);
        localStorage.setItem('inputValue', value);
    }

    return (
        <div className="flex justify-center items-center flex-col border rounded-[12px] p-[20px]">
            <input type="text" placeholder="Enter Text" value={input} onChange={handleInput} className='border rounded-[5px] pl-[5px] focus:outline-none'/>
            <p className="text-[20px] font-[500]">Input: {input}</p>
        </div>
    )
}