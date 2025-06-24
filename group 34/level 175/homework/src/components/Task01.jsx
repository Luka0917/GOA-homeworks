import { useRef } from "react"

export default function Task01(){
    const divRef = useRef();

    return (
        <div className="flex justify-between items-center flex-col h-[170vh]">
            <div ref={divRef} className="w-[150px] h-[150px] bg-gray-700 rounded-[17px]"></div>
            <button onClick={() => divRef.current.scrollIntoView({behavior: 'smooth'})} className="rounded-[7px] px-[10px] py-[5px] text-[20px] font-[500] bg-gray-600 text-gray-100 cursor-pointer hover:bg-gray-500 hover:text-gray-900 transition duration-200">Button</button>
        </div>
    )
}