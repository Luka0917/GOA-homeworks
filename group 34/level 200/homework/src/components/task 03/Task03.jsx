import { useState, useEffect } from "react";
import { dataChange, getInitialData } from "./task03Function";

export default function Task03() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        setData(getInitialData());
    }, []);

    function handleChange(e){
        const value = e.target.value;
        setInput(value);
        setData(dataChange(value));
    };

    return (
        <div className="flex justify-center items-center flex-col border rounded-[12px] p-[20px]">
            <input type="text" value={input} onChange={handleChange} className="border px-[5px] py-[2px] rounded-[5px] focus:outline-none mt-[15px]" />
            <div className="flex justify-center items-center flex-col gap-[5px] mt-[10px]">
                {data.map((el, i) => (<p key={i} className="text-[18px]">{el}</p>))}
            </div>
        </div>
    );
}