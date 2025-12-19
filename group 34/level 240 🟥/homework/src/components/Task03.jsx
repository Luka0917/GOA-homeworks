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
        <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <p>Hello, World!</p>
            <button onClick={toggle}>Swith Theme</button>
        </div>
    )
}