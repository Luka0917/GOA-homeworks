import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]');

  function addPost(){
    if(title === '' || description === '') return;
    setPosts(prev => [...prev, {title, description}]);
    setTitle('');
    setDescription('');
  };

  function up(index){
    if(index === 0) return;
    const newPosts = [...posts];
    [newPosts[index - 1], newPosts[index]] = [newPosts[index], newPosts[index - 1]];
    setPosts(newPosts);
  };

  function down(index){
    if(index === posts.length - 1) return;
    const newPosts = [...posts];
    [newPosts[index + 1], newPosts[index]] = [newPosts[index], newPosts[index + 1]];
    setPosts(newPosts);
  };

  return (
    <div className={`${theme} flex items-center flex-col min-h-screen w-full pt-[30px] transition duration-300 pb-[50px]`}>
      <button 
        onClick={() => setTheme(perv => perv === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 'bg-gradient-to-br from-[#e0eafc] to-[#cfdef3] text-[#24292f]' : 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]')} 
        className={`${theme === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 'bg-[#161b22] hover:bg-[#1f242c]' : 'bg-[#f6f8fa] hover:bg-[#e1e6eb]'} px-[8px] py-[4px] rounded-[8px] absolute top-[30px] right-[30px] cursor-pointer transition-color duration-200`}>
          {
            theme === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 
            (<span className="flex justify-center items-center gap-[8px] text-[18px] font-[500]">L I G H T <MdSunny /></span>) : 
            (<span className="flex justify-center items-center gap-[8px] text-[18px] font-[500]">D A R K <FaMoon /></span>)
          }
      </button>
      <b className="text-[30px]">📌 <b className="text-[#1877f2]">Facebook</b>-ის ბიძაშვილი</b>
      <div className={`${theme === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 'bg-[#161b22]' : 'bg-[#f6f8fa]'} flex justify-center flex-col px-[50px] py-[25px] rounded-[12px] mt-[30px]`}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className='placeholder-[#6e7681] border rounded-[8px] text-[20px] px-[5px] py-[1px] focus:outline-none' />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="placeholder-[#6e7681] border rounded-[8px] text-[20px] px-[5px] py-[1px] focus:outline-none mt-[15px]"></textarea>
        <button onClick={addPost} className="mt-[20px] bg-[#3fb950] text-black text-[17px] font-[600] px-[16px] py-[8px] rounded-[8px] cursor-pointer hover:bg-[#33a344] transition-color duration-200">Post</button>
      </div>
      <div className="flex justify-center items-center flex-col mt-[30px] gap-[25px] px-[100px]">
        {posts.map((el, i) => (
          <div key={i} className={`${theme === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 'bg-[#161b22]' : 'bg-[#f6f8fa]'} flex justify-center flex-col px-[30px] py-[15px] rounded-[12px]`}>
            <b className="text-[20px]">{el.title.charAt(0).toUpperCase() + el.title.slice(1)}</b>
            <p>{el.description}</p>
            <div className="flex justify-center items-center gap-[20px] mt-[15px]">
              <button 
                onClick={() => setPosts(prev => prev.filter((_, index) => index != i))} 
                className={`${theme === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 'bg-[#f85149] hover:bg-[#d7373f]' : 'bg-[#f87171] hover:bg-[#ef4444] text-white'} flex justify-center items-center gap-[5px] font-[500] px-[8px] py-[4px] rounded-[6px] cursor-pointer transition-color duration-200`}>
                <GoTrash /> Remove
              </button>
              <button 
                onClick={() => up(i)} 
                className={`${theme === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 'bg-[#58a6ff] hover:bg-[#2c8cff]' : 'bg-[#60a5fa] hover:bg-[#3b82f6] text-white'} flex justify-center items-center gap-[5px] font-[500] px-[8px] py-[4px] rounded-[6px] cursor-pointer transition-color duration-200`}>
                <FaArrowUp /> Up
              </button>
              <button 
                onClick={() => down(i)} 
                className={`${theme === 'bg-gradient-to-br from-black via-[#121518] to-[#1c1f26] text-[#e6edf3]' ? 'bg-[#d29922] hover:bg-[#b87f1a]' : 'bg-[#fbbf24] hover:bg-[#f59e0b] text-white'} flex justify-center items-center gap-[5px] font-[500] px-[8px] py-[4px] rounded-[6px] cursor-pointer transition-color duration-200`}>
                <FaArrowDown /> Down
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}