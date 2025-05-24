import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center flex-col flex-wrap h-screen gap-[20px]">
        {/* Classwork 1 */}
        <div className="flex justify-center items-center flex-col gap-[10px] border-2 rounded-2xl p-[10px]">
          <p className="text-[20px]">Classwork 1</p>
          <div className="flex justify-center items-center gap-[10px]">{Array(10).fill(<div className="w-[40px] h-[40px] rounded-[5px] bg-red-500"></div>)}</div>
          <div className="flex justify-center items-center gap-[10px]">{Array(10).fill().map((_, i) => <div key={i} className="w-[40px] h-[40px] rounded-[5px] bg-green-500"></div>)}</div>
        </div>

        {/* Classwork 2 */}
        <div className="flex justify-center items-center flex-col gap-[10px] border-2 rounded-2xl p-[10px]">
          <p className="text-[20px]">Classwork 2</p>
          <div className="flex justify-center items-center gap-[10px]">{Array(10).fill().map((_, i) => i % 2 == 0 ? <div key={i} className="w-[40px] h-[40px] rounded-[5px] bg-blue-500"></div> : <div className="w-[40px] h-[40px] rounded-[5px] bg-red-500"></div>)}</div>
        </div>

        {/* Classwork 3 */}
        <div className="flex justify-center items-center flex-col gap-[10px] border-2 rounded-2xl p-[10px]">
          <p className="text-[20px]">Classwork 3</p>
          <div className="flex justify-center items-center gap-[10px]">{Array(10).fill(<div className="w-[40px] h-[40px] rounded-[5px] bg-red-500"></div>)}</div>
        </div>

        {/* Classwork 4 */}
        <div className="flex justify-center items-center flex-col gap-[10px] border-2 rounded-2xl p-[10px]">
          <p className="text-[20px]">Classwork 4</p>
          <p className="font-[500]">Count: {count}</p>
          <div className="flex justify-center items-center gap-[10px]">{Array(10).fill().map((_, i) => <button onClick={() => setCount(prev => prev += i)} key={i} className="border rounded-[5px] px-[5px] py-[3px] cursor-pointer hover:bg-black hover:text-white transition duration-300">Add: {i}</button>)}</div>
        </div>
      </div>
    </>
  )
}
export default App