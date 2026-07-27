import { useState, useId, useEffect } from "react"
import Navbar from "./components/Navbar"
import { useStore } from "../store/store";
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const { user } = useStore();
  const titleId = useId();
  const descriptionId = useId();

  const fetchTodos = async () => {
      try{
        const result = await axios.get(`http://localhost:3002/todos/${user.id}`);
        setTodos(result.data);
      }catch(err){
        console.error(err);
      }
    }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function addTodo(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');

    if(!title || !description) return alert('we need Title and Description dumbass!');

    try{
      const res = await axios.post('http://localhost:3002/todos', { title, description }, { withCredentials: true });
      console.log(res.data.message);
      fetchTodos();
    }catch(err){
        console.error(err)
    }
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold">Todo list</h1>
          <form onSubmit={addTodo} className="flex flex-col mt-10 w-75">
            <div className="flex flex-col">
              <label htmlFor={titleId} className="text-lg font-medium">Title</label>
              <input type="text" id={titleId} name="title" className="border rounded py-1 px-1" />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor={descriptionId} className="text-lg font-medium">Description</label>
              <textarea id={descriptionId} name="description" className="border rounded h-30 py-1 px-1"></textarea>
            </div>
            <button className="mt-4 text-xl font-medium border rounded py-1.5 bg-purple-500 text-white border-none cursor-pointer hover:bg-purple-700 transition duration-200">Add Todo</button>
          </form>

          <div className="mt-10 mb-20 flex flex-col gap-5">
            {todos.map((el, i) => (
              <div key={i} className="rounded-xl bg-purple-300 w-150 py-2 px-5 cursor-pointer">
                <h3 className="text-2xl font-medium">{el.title}</h3>
                <p>{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default App