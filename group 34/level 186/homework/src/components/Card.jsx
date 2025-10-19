import { useState } from "react";

export default function Card({title, text, image, theme, active}){
    const [isOn, setIsOn] = useState(active);

    function toggleSwitch(){setIsOn(!isOn)};

    return (
        <div className={`${theme === 'bg-[#091540]' ? 'bg-neutral-700 text-[#fbfdfeff]' : 'bg-[#fcfdff] text-[#0f1737]'} flex justify-center items-center flex-col rounded-[24px] px-[15px]`}>
            <div className="flex justify-center items-center gap-[20px]">
                <img src={image}/>
                <div>
                    <p className="font-[700]">{title}</p>
                    <p className={`${theme === 'bg-[#091540]' ? 'text-neutral-300' : 'text-[#7d8086]'} w-[270px] text-[14px] font-[400]`}>{text}</p>
                </div>
            </div>
            <div className="flex justify-between items-center w-[100%] mt-[20px]">
                <button className="border rounded-[30px] px-[10px] py-[1px] text-[16px] cursor-pointer">Remove</button>
                <div onClick={toggleSwitch} className={`w-10 h-5 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300 ${isOn ? "bg-red-500" : "bg-gray-400"}`}>
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-5" : "translate-x-0"}`}/>
                </div>
            </div>
        </div>
    )
}