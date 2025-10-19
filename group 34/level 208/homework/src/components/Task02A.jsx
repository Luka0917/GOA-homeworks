import { useState } from "react";

export default function Task02A(){
    const [error, setError] = useState(false);
    if(error) throw new Error("Button was clicked! This is a forced error.");

    return (
        <div>
            <button onClick={() => setError(true)} className="border border-black rounded-[7px] px-[20px] py-[3px] bg-black text-white text-[20px] font-[500] cursor-pointer hover:bg-white hover:text-black transition duration-200">Click Me</button>
        </div>
    )
}