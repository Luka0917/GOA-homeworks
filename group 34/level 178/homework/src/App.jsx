import Box1 from "./components/Box1"
import Task02 from "./components/Task02"
import { useState, createContext } from "react"

export const TextContext = createContext()

function App() {
  const [theme, setTheme] = useState('bg-white text-black');

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <p className="text-[20px] font-[500]">Box 1</p>
        <TextContext.Provider value={theme}>
          <Box1 />
          <button onClick={() => setTheme(prev => prev === 'bg-white text-black' ? 'bg-black text-white' : 'bg-white text-black')} className="rounded-[7px] mt-[25px] text-[20px] font-[500] px-[10px] py-[3px] bg-fuchsia-500 text-gray-100 cursor-pointer hover:bg-fuchsia-700 transition duration-200">Switch</button>
        </TextContext.Provider>
        <Task02 />
      </div>
    </>
  )
}
export default App