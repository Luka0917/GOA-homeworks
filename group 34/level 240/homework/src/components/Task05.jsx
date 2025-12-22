import { useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store";

export default function Task05(){
    const [input, setInput] = useState('');

    const { notes, addNote, removeNote } = useStore(
        useShallow(s => ({
            notes: s.notes,
            addNote: s.addNote,
            removeNote: s.removeNote
        }))
    )

    return (
        <div>
            <input 
                type="text"
                placeholder="Enter Note"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="border rounded-[7px] px-[5px] py-0.5 focus:outline-none"
            />
            <button onClick={() => addNote(input)} className="border border-black rounded-[7px] px-[5px] py-0.5 bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200 ml-[5px]">Submit</button>
            <ol>
                {notes.map((el, i) => (
                    <li key={i}>{el.note} {el.date}</li>
                ))}
            </ol>
        </div>
    )
}