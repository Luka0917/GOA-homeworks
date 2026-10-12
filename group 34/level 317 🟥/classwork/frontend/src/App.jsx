import { useState, useId, useEffect } from "react"
import Navbar from "./components/Navbar"
import { useStore, api } from "../store/store";
import axios from 'axios';
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

function App() {
  const [todos, setTodos] = useState([]);
  const { user, theme } = useStore();
  const titleId = useId();
  const descriptionId = useId();

  const fetchTodos = async () => {
      try{
        const result = await axios.get(`${api}/todos/${user.id}`);
        setTodos(result.data);
      }catch(err){
        console.error(err);
      }
    }

  useEffect(() => { fetchTodos() }, []);

  async function addTodo(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');

    if(!title || !description) return alert('we need Title and Description dumbass!');

    try{
      const res = await axios.post(`${api}/todos`, { title, description }, { withCredentials: true });
      fetchTodos();
    }catch(err){
        console.error(err)
    }
  }

  async function todoComplete(id, completed){
    try{
      const res = await axios.patch(`${api}/todos/${id}`, { completed: completed ? 0 : 1 }, { withCredentials: true });
      fetchTodos();
      console.log(res.data);
    }catch(err){
      console.error(err);
    }
  };

  return (
    <>
      <div className={`${theme === 'light' ? 'bg-[linear-gradient(180deg,oklch(0.985_0.005_90),oklch(0.96_0.015_300))]' : 'bg-[linear-gradient(180deg,oklch(0.15_0.04_265),oklch(0.2_0.05_285))]'} min-h-screen transition-all duration-200`}>
        <Navbar />
        <div className="flex justify-center items-center flex-col mt-20">
          <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-5xl font-medium`}>Todo List</h1>
          <div className={`${theme === 'light' ? 'text-[#62626f] border-[#dddde4] bg-white' : 'text-[#717f96] border-[#272e40] bg-[#0f172b]'} flex justify-center items-center gap-1 border rounded-full w-40 mt-5`}>
            <FaCheck className={theme === 'light' ? 'text-[#4931a8]' : 'text-[#9d5bf4]'} />
            <p>2 open</p> 
            ·
            <p>1 done</p>
          </div>
          <div className={`${theme === 'light' ? 'border-[#dddde4] bg-white' : 'border-[#262f41] bg-[#0f172b]'} border rounded-3xl p-5 mt-10`}>
            <form onSubmit={addTodo} className="flex flex-col gap-3 w-150">
              <input type="text" id={titleId} name="title" placeholder="Title" className={`${theme === 'light' ? 'border-[#e4e4ea] placeholder:text-[#62626f] focus:ring-[#5943b0]' : 'border-[#333a4b] placeholder:text-[#90a1b9] focus:ring-[#9c5bf2] text-white'} border rounded-xl focus:ring-1 focus:outline-none shadow-sm py-1.5 px-2.5`} />
              <textarea 
                id={descriptionId} 
                name="description" 
                placeholder="Description" 
                className={`
                  ${theme === 'light' 
                    ? 'border-[#e4e4ea] placeholder:text-[#62626f] focus:ring-[#5943b0]' 
                    : 'border-[#333a4b] placeholder:text-[#90a1b9] focus:ring-[#9c5bf2] text-white'
                  } 
                  border rounded-xl focus:ring-1 focus:outline-none shadow-sm min-h-35 py-1.5 px-2.5 resize-y
                `}>
              </textarea>
              <button 
                className={`
                  ${theme === 'light' ? 'bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))]' : 'bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))]'} 
                  self-end flex justify-end items-center gap-1.5 py-1.5 px-2 rounded-xl w-27 text-white font-medium cursor-pointer hover:opacity-90 transition-all duration-200
                `}
                >
                  <FaPlus /> Add task
              </button>
            </form>
          </div>
          <div>
            {todos.length > 0 ? (
              <div className="my-10 flex flex-col gap-2">
                {todos.map((el, i) => {
                  const completedButtonClass =
                    el.completed === 1
                      ? theme === 'light'
                        ? 'bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))] border-transparent'
                        : 'bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))] border-transparent'
                      : theme === 'light'
                        ? 'border-[#dddde4] hover:border-[#4b34a9]'
                        : 'border-[#262f41] hover:border-[#9b5af1]';

                  return (
                    <div key={i} className={`${theme === 'light' ? 'border-[#dddde4] bg-white' : 'border-[#262f41] bg-[#0f172b]'} flex justify-between items-center border rounded-3xl w-160.5 py-4 px-10`}>
                      <div className="flex items-center">
                        <button 
                          onClick={() => todoComplete(el.id, el.completed)} 
                          className={`${completedButtonClass} border rounded-full text-white w-6 h-6 flex justify-center items-center cursor-pointer transition-all duration-200`}
                          >
                            {el.completed == 1 && <FaCheck size={15} />}
                        </button>
                        <div className="flex flex-col ml-3">
                          <h3 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-xl font-medium`}>{el.title}</h3>
                          <p className={`${theme === 'light' ? 'text-[#62626f]' : 'text-[#717f96]'}`}>{el.description}</p>
                        </div>
                      </div>
                      <button className={`${theme === 'light' ? 'text-[#62626f] hover:bg-[#efeff7] hover:text-[#e62b34]' : 'text-[#717f96] hover:bg-[#1d293d] hover:text-[#ff6467]'} rounded-full p-2 cursor-pointer transition-all duration-200`}><FaRegTrashCan /></button>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className={`${theme === 'light' ? 'border-[#dddde5] text-[#62626f]' : 'border-[#27283d] text-[#717f96]'} flex justify-center items-center border border-dashed text-sm rounded-3xl w-160 h-30 mt-10`}>Add your first task above.</div>
            )}
          </div>
        </div>
        <span className={`${theme === 'light' ? 'text-[#62626f]' : 'text-[#717f96]'} text-sm fixed bottom-5 right-5 cursor-default select-none`}>₾(U)k4</span>
      </div>
    </>
  )
};
export default App;