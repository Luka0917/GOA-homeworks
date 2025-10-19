import { useState, useEffect } from "react"

export default function Task02(){
    const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        function colorIndex(){
            setIndex(prev => (prev + 1) % colors.length);
        };
        document.addEventListener('click', colorIndex);
        return () => document.removeEventListener('click', colorIndex);
    }, [colors.length]);

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[5px]">Task 02</p>
            <div className="border-2 rounded-[12px] p-[20px]">
                <button className={`${colors[index]} px-[10px] py-[5px] rounded-[8px]`}>Click anywhere to change my color</button>
            </div>
        </div>
    )
}