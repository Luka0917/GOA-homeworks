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
                className="border" 
            />
            <button onClick={() => addWord(input)}>Submit</button>
            <ul>
                {wordsArr.map((el, i) => (
                    <li key={i}>{el}</li>
                ))}
            </ul>
        </div>
    )
}