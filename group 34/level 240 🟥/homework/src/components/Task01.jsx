import { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store"; 

export default function Task01(){
    const [input, setInput] = useState('');

    const { wordsArr, addWord } = useStore(
        useShallow(s => ({
            wordsArr: s.wordsArr,
            addWord: s.addWord
        }))
    )

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter Word" 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                className="border rounded-[7px] px-[5px] py-0.5 focus:outline-none" 
            />
            <button onClick={() => addWord(input)} className="border border-black rounded-[7px] px-[5px] py-0.5 bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200 ml-[5px]">Submit</button>
            <ul className="absolute ml-[5px]">
                {wordsArr.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
            </ul>
        </div>
    )
}