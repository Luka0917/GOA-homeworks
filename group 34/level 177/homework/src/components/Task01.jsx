import { useState, useEffect } from "react"

export default function Task01(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
            console.log(count);
        }, 1000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div className="flex justify-center items-center flex-col absolute top-[300px]">
            <p className="text-[18px]">Task 01</p>
            <p className="text-[30px] font-[500]">Count: {count}</p>
        </div>
    )
}