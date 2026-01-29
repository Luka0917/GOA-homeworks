import { useEffect, useState } from "react"
import Form from "./components/Form"
import Notes from "./components/Notes"
import axios from "axios"

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes(){
      try{
        const res = await axios.get('http://localhost:1717/note');
        setNotes(res.data);
      }catch(err){
        console(`Failed to fetch notes: ${err}`);
      }finally{
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#243B55] to-[#141E30]">
        <div className="flex justify-around items-center w-full">
          <Form setNotes={setNotes} />
          <Notes setNotes={setNotes} notes={notes} loading={loading} />
        </div>
      </div>
    </>
  )
}
export default App