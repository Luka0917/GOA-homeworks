import { useState, useEffect, useRef } from "react"

export default function Task03(){
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    const isFocused = useRef(false);

    useEffect(() => {
        function handleKeyDown(){
            if (isFocused.current){
                setCount(prev => prev + 1);
                console.log('Key clicked');
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [])

    return (
        <div className="flex justify-center items-center flex-col absolute bottom-[300px]">
            <p className="text-[18px]">Task 03</p>
            <input type="text" placeholder="Enter..." ref={inputRef} onFocus={() => isFocused.current = true} className="border-2 rounded-[5px] pl-[3px]"/>
            <p>Count: {count}</p>
        </div>
    )
}