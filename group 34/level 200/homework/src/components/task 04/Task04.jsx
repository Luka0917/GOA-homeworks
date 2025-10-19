import { useState } from "react"
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { changeTheme } from './task04Function'

export default function Task04(){
    const [theme, setTheme] = useState('light');

    return (
        <div className={`${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'} transition duration-300 flex justify-center items-center flex-col border rounded-[12px] p-[20px] gap-[20px]`}>
            <p className="font-[500] text-[17px]">Hello, World!</p>
            <button onClick={() => changeTheme(setTheme)} className={`${theme === 'light' ? 'border-black bg-black text-white hover:bg-gray-100 hover:text-black' : 'border-white bg-white text-black hover:bg-black hover:text-white'} flex justify-center items-center gap-[5px] border px-[10px] py-[2px] rounded-[5px] focus:outline-none font-[500] cursor-pointer transition duration-200`}>{theme === 'light' ? (<>D A R K <FaMoon /></>) : (<>L I G H T <MdSunny /></>)}</button>
        </div>
    )
}