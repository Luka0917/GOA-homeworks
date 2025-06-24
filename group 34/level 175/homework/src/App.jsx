import Task01 from './components/Task01'
import Task02 from './components/Task02'
import Task03 from './components/Task03'

function App() {
  return (
    <>
      <div className='flex justify-center items-center py-[50px] gap-[300px]'>
        <div className='flex justify-center items-center flex-col gap-[10px]'>
          <p className='text-[20px] font-[500]'>Task 01</p>
          <Task01 />
        </div>
        <div className='flex justify-center items-center flex-col gap-[10px]'>
          <p className='text-[20px] font-[500]'>Task 02</p>
          <Task02 />
        </div>
        <div className='flex justify-center items-center flex-col gap-[10px]'>
          <p className='text-[20px] font-[500]'>Task 03</p>
          <Task03 />
        </div>
      </div>
    </>
  )
}
export default App