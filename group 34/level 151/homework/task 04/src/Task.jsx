import { useState } from "react"

export default function Task({task, time}){
    const [taskComplete, setTaskComplete] = useState('In progress')

    return (
        <>
            <div className="flex justify-content items-center gap-[10px] border-2 rounded-[22px] py-[10px] px-[20px]">
                <p className="text-[20px]">{task}, {time} <b>{taskComplete}</b></p>
                <button onClick={() => setTaskComplete('Completed')} className="border-2 rounded-[12px] py-[5px] px-[15px] cursor-pointer hover:bg-black hover:text-white">Complete</button>
            </div>
        </>
    )
}