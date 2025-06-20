import { useState, useEffect } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import MainPage from "./components/MainPage";

function App() {
  const [registered, setRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('data')){
      return setRegistered(true);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-[#212121] text-gray-200">
        {!registered ? (<Register setRegistered={setRegistered} />) : !loggedIn ? (<Login setLoggedIn={setLoggedIn} />) : (<MainPage setRegistered={setRegistered} setLoggedIn={setLoggedIn} />)}
      </div>
    </>
  )
}
export default App