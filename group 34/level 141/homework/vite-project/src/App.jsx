import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-[50px]">
        <Home />
        <About />
        <Contact />
      </div>
    </>
  )
}

export default App