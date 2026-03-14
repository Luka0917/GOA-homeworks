import { useState, useEffect, useId } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [history, setHistory] = useState([]);
  const [stats, setStats] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const API = 'http://localhost:1717';
  const titleId = useId();
  const descriptionId = useId();
  const priorityId = useId();

  useEffect(() => {
    const fetchTasks = async () => {
      try{
        const result = await axios.get(`${API}/tasks`);
        setTasks(result.data);
      }catch(err){
        console.error(`Error Fetching products: ${err}`);
      }
    }
    fetchTasks();
  }, [refresh]);

  useEffect(() => {
    const fetchHistory = async () => {
      try{
        const result = await axios.get(`${API}/history`);
        setHistory(result.data);
      }catch(err){
        console.error(`Error Fetching products: ${err}`);
      }
    }
    fetchHistory();
  }, [refresh]);

  useEffect(() => {
    const fetchStats = async () => {
      try{
        const result = await axios.get(`${API}/stats`);
        setStats(result.data);
      }catch(err){
        console.error(`Error Fetching products: ${err}`);
      }
    }
    fetchStats();
  }, [refresh]);

  async function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const priority = formData.get('priority');

    try{
      await axios.post(`${API}/tasks`, { title, description, priority });
      setRefresh(prev => !prev);
    }catch(err){
      console.error(err);
    }
  }

  async function clear(){
    try{
      await axios.delete(`${API}/tasks`);
      setRefresh(prev => !prev);
    }catch(err){
      console.error(err);
    }
  }

  async function deleteTask(id){
    try{
      await axios.delete(`${API}/tasks/${id}`);
      setRefresh(prev => !prev);
    }catch(err){
      console.error(err);
    }
  }

  async function completeTask(id){
    try{
      await axios.post(`${API}/tasks/${id}/complete`);
      setRefresh(prev => !prev);
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div className="flex justify-center items-start py-20 gap-50">
      <div className='flex justify-center items-start flex-col gap-5 sticky top-20'>
        <div className="flex justify-center items-center flex-col border-2 rounded-lg p-5">
          <h2 className="text-2xl font-medium">Add new Task</h2>
          <form onSubmit={handleSubmit} className="flex flex-col mt-5 w-55">
            <label htmlFor={titleId} className="font-medium">Title</label>
            <input type="text" name="title" required id={titleId} className="border rounded pl-1 py-0.5 focus:outline-none" />

            <label htmlFor={descriptionId} className="font-medium mt-3">Description</label>
            <textarea name="description" required id={descriptionId} className="border rounded pl-1 py-0.5 focus:outline-none" />

            <label htmlFor={priorityId} className="font-medium mt-3">Priority</label>
            <select name="priority" required id={priorityId} className="border rounded pl-1 py-0.5 focus:outline-none">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <button className="border border-black rounded mt-5 py-1 font-medium bg-black text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-200">Add task</button>
          </form>
        </div>
        <div>
          <h3 className='text-xl font-medium'>Stats</h3>
          <div>
            <p>Tasks: {stats.tasks_count}</p>
            <p>Completed: {stats.tasks_completed}</p>
            <p>Deleted: {stats.tasks_deleted}</p>
          </div>
        </div>        
      </div>

      <div className='flex flex-col gap-5 w-130'>
        <button onClick={clear} className='flex justify-center items-center font-medium w-15 text-red-500 py-0.5 rounded hover:bg-red-200 cursor-pointer transition-all duration-200'>Clear</button>
        {tasks.map(el => (
          <div key={el.id} className='border rounded py-2 px-3'>
            <div>
              <h3 className='text-xl font-medium'>{el.title}</h3>
              <p>{el.description}</p>
            </div>
            <div className='flex justify-between items-center mt-3'>
              <p className='text-xs'>{el.created_at} <span className='ml-1 text-sm font-medium'>{el.priority}</span></p>
              <div className='flex gap-5'>
                <button onClick={() => deleteTask(el.id)} className='text-red-500 px-2 py-0.5 rounded hover:bg-red-200 cursor-pointer transition-all duration-200'>Remove</button>
                <button onClick={() => completeTask(el.id)} className='rounded px-2 py-0.5 cursor-pointer hover:bg-green-600 hover:text-white transition-all duration-200'>Complete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-col gap-5 w-100'>
        <p className='font-medium'>History</p>
        {history.map(el => (
          <div key={el.id} className='border rounded py-2 px-3'>
            <div>
              <h3 className='text-xl font-medium'>{el.title}</h3>
              <p>{el.description}</p>
            </div>
            <p className='text-xs mt-3'>{el.created_at} <span className='ml-1 text-sm font-medium'>{el.priority}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App;