import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'
import Presentetion from './components/Presentation'

function App() {
  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen'>
        <div className='flex justify-center items-center gap-[50px] mb-[50px]'>
          <Counter1 />
          <Counter2 />
          <Counter3 />
        </div>
        <Presentetion />
      </div>
    </>
  )
}
export default App