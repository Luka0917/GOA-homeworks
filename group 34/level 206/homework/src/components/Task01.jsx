import { useContext } from "react"
import { BgContext } from "../context/BgProvider" 

export default function Task01(){
    const {bg, setBg} = useContext(BgContext)

    return (
        <div className={`${bg === "light" ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-gray-200 text-black hover:bg-gray-300"} p-[50px] flex justify-center items-center w-[250px] h-[250px] rounded-[36px] m-[50px]`}>
            <button onClick={() => setBg(prev => prev === 'light' ? 'dark' : 'light')} className="border rounded-[5px] px-[15px] py-[3px] cursor-pointer">{bg === 'light' ? 'Light' : 'Dark'}</button>
        </div>
    )
}