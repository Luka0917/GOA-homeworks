import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store"; 

export default function Task03(){
    const { theme, toggle } = useStore(
        useShallow(s => ({
            theme: s.theme,
            toggle: s.toggle
        }))
    )

    return (
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} border rounded-[17px] p-5 flex justify-center items-center flex-col gap-2.5`}>
            <p>Hello, World!</p>
            <button onClick={toggle} 
            className={`${theme === 'light' ? 'border-black bg-black text-white hover:bg-white hover:text-black' : 'border-white bg-white text-black hover:bg-black hover:text-white'} border rounded-[7px] px-[5px] py-0.5 cursor-pointer transition duration-200`}>Swith Theme</button>
        </div>
    )
}