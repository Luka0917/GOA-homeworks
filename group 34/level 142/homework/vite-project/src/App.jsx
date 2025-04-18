import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-[20px] mt-[20px]">
        <Home />
        <About />
        <Contact />
        <Login />
        <Signup />
      </div>
    </>
  )
}
export default App