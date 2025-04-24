import About from './components/About'
import Iknow from './components/Iknow'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className='flex justify-center items-center flex-col py-[50px] gap-[20px]'>
        <About />
        <Iknow />
        <Contact />
      </div>
    </>
  )
}
export default App