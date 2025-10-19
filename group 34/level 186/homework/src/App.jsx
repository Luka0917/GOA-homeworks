import { useState, useContext } from "react"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Main from "./components/Main"

function App() {
  const [theme, setTheme] = useState('bg-[#091540]');
  const [btns, setBtns] = useState([true, false, false]);

  return (
    <>
      <div className={`flex justify-center items-center flex-col h-screen ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />
        <NavBar theme={theme} btns={btns} setBtns={setBtns}/>
        <Main theme={theme}/>
      </div>
    </>
  )
}
export default App