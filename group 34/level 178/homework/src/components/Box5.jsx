import { useContext } from "react"
import { TextContext } from "../App"

export default function Box5(){
    const theme = useContext(TextContext)

    return (
        <div className={`flex justify-center items-center flex-col w-[200px] h-[200px] ${theme}`}>
            <p className="text-[20px] font-[500]">Box 6</p>
        </div>
    )
}