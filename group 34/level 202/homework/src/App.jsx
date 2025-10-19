import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { usePrevious } from "./hooks/usePrevious";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [localStorage, setLocalStorage] = useLocalStorage("Data", " ");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  function handleForm(formData){
    const name = formData.get('name');
    setLocalStorage(name);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[100px] pt-[50px]">
        <form action={handleForm}>
          <input type="text" placeholder="Enter Name..." name="name" className="border rounded-[5px] px-[5px] py-[2px] focus:outline-none" />
          <button className="border border-black rounded-[5px] px-[10px] py-[2px] ml-[10px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Submit</button>
        </form>
        <div className="flex justify-center items-center flex-col">
          <p className="text-[20px]">Count: <b>{count}</b></p>
          <p className="text-[20px]">Previous Count: <b>{usePrevious(count)}</b></p>
          <div className="flex justify-center items-center gap-[20px] mt-[20px]">
            <button onClick={() => setCount(prev => prev + 1)} className="border border-black rounded-[5px] px-[10px] py-[2px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Increment</button>
            <button onClick={() => setCount(prev => prev - 1)} className="border border-black rounded-[5px] px-[10px] py-[2px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Decrement</button>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <input type="text" placeholder="Enter Text..." value={input} onChange={e => setInput(e.target.value)} className="border rounded-[5px] px-[5px] py-[2px] focus:outline-none" />
          <p className="text-[20px] mt-[10px]">Normal: <b>{input}</b></p>
          <p className="text-[20px]">DeBounced: <b>{useDebounce(input, 1000)}</b></p>
        </div>
      </div>
    </>
  )
}
export default App