import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import Login from "./components/Login"
import Counter from "./components/Counter";
import UserPanel from "./components/UserPanel";

function App() {
  const [logedIn, setLogedIn] = useState(false);
  const [theme, setTheme] = useState('bg-white text-black')

  useEffect(() => {
    if(JSON.parse(localStorage.getItem('data'))){
      setLogedIn(true);
    }
  }, []);

  return (
    <>
      <div className={`flex justify-center items-center flex-col h-screen ${theme}`}>
        <button className="border rounded-[50%] p-[10px] text-[25px] absolute top-[20px] right-[20px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200" onClick={() => {theme == 'bg-white text-black' ? setTheme('bg-black text-white') : setTheme('bg-white text-black')}}>{theme == 'bg-white text-black' ? <FaMoon /> : <MdSunny />}</button>
        {logedIn ? <><Counter /> <UserPanel /></> : <Login setLogedIn={setLogedIn} />}
      </div>
    </>
  )
}
export default App