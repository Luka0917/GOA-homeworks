import axios from "axios";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Notes({ setNotes, notes, loading }){

    async function deleteNote(id){
        try{
            await axios.delete(`http://localhost:1717/note/${id}`);
            setNotes(prev => prev.filter(el => el.id !== id));
        }catch(err){
            console.log(`Failed to delete note ${err}!`);
            alert('Failed to delete note!');
        }
    }

    async function deleteAllNotes(){
        try{
            await axios.delete('http://localhost:1717/note');
            setNotes([]);
        }catch(err){
            console.log('Failed to delete notes!');
            alert('Failed to delete note!');
        }
    }

    return (
        <div className="bg-[#141E30] bg-gradient-to-l from-[#243B55] to-[#141E30]
                p-10 rounded-4xl shadow-[5px_5px_20px_rgba(255,255,255,0.5)]
                w-[110vh] h-[80vh]
                flex flex-col">
            <p className="text-3xl font-semibold text-white mb-5">Your Notes</p>
            <div className="flex justify-between items-center border-b border-white px-1.5">
                <div className="flex justify-between items-center w-[80%] pr-8.5">
                    <p className="text-white text-xl font-medium ml-2">Title</p>
                    <p className="text-white text-xl font-medium">Date</p>
                </div>
                <p className="text-white text-xl font-medium mr-12"><FaRegTrashCan /></p>
            </div>

            {loading && <p className="text-white text-center text-xl mt-10">Loading notes...</p>}

            {!loading && notes.length === 0 && (
                <p className="text-gray-300 text-center text-xl mt-10">There are no notes yet.</p>
            )}

            <div className="flex justify-center items-center flex-col gap-5 max-h-[500px] overflow-y-auto pr-2 pt-12">
                {notes.map(el => (
                    <div key={el.id} className="flex justify-between items-center bg-[#30475E] px-3 py-4 rounded-xl w-full cursor-pointer">
                        <div className="flex justify-between items-center w-[80%]">
                            <p className="text-xl text-white font-semibold">{el.title}</p>
                            <p className="text-xl text-white font-semibold">{new Date(el.created_at).toLocaleDateString()}</p>
                        </div>
                        <button onClick={() => deleteNote(el.id)} className="flex justify-center items-center gap-2 bg-red-500 py-2 px-4 rounded-xl text-white cursor-pointer hover:bg-red-700 transition duration-300">Remove <FaRegTrashCan /></button>
                    </div>
                ))}
            </div>
            <button onClick={() => deleteAllNotes()} disabled={notes.length === 0}  className={`mt-auto text-lg font-bold py-2 px-5 rounded-lg transition cursor-pointer ${notes.length === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-700 text-white'}`}>Clear</button>
        </div>
    )
}