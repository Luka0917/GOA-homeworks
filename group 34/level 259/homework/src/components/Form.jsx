import { useId, useState } from "react";
import axios from 'axios';

export default function Form({ setNotes }){
    const titleId = useId();
    const noteId = useId();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    async function formHandle(e){
        e.preventDefault();
        setError('');
        setSuccess('');

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const note = formData.get('note');

        if(!title || !note){
            setError('Title and Note are required!');
            return;
        }

        try{
            const res = await axios.post('http://localhost:1717/note', { title, note });
            setNotes(prev => [{ id: res.data.id, title: res.data.title, note: res.data.note, created_at: new Date().toISOString() }, ...prev]);
            setSuccess('Note added successfully!');
            e.target.reset();
        }catch(err){
            if(err.response) setError(err.response.data.error || 'Server error');
            else setError('Network error')
        }
    }

    return (
        <div className="bg-[#141E30] bg-gradient-to-l from-[#243B55] to-[#141E30] p-10 rounded-4xl shadow-[5px_5px_20px_rgba(255,255,255,0.5)]">
            <p className="text-4xl font-bold text-center text-white">Add New Note</p>
            <form onSubmit={formHandle} className="flex justify-center flex-col mt-10">
                <label htmlFor={titleId} className="text-xl font-semibold text-white">Title</label>
                <input type="text" placeholder="example: My Day" id={titleId} name="title" className="border border-[#F8FAFC] rounded-lg py-2 px-2 mt-0.5 bg-white/30 text-white placeholder:text-white focus:outline-none" />
                <p className="text-gray-400 text-xs text-right mt-1 pr-2">100 Char Max</p>

                <label htmlFor={noteId} className="text-xl font-semibold mt-6 text-white">Note</label>
                <textarea type="text" placeholder="example: today i..." id={noteId} name="note" className="w-100 h-55 border rounded-lg py-2 px-2 mt-0.5 bg-white/30 text-white placeholder:text-white focus:outline-none" />
                <p className="text-gray-400 text-xs text-right mt-1 pr-2">500 Char Max</p>

                <button className="border-2 border-white rounded-lg py-2 mt-10 bg-white font-bold text-[#071952] cursor-pointer hover:bg-transparent hover:text-white transition duration-300">Add Note</button>

                {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                {success && <p className="text-green-500 mt-2 text-center">{success}</p>}
            </form>
        </div>
    )
}