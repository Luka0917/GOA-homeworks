import Task01 from './components/Task01';
import Task02 from './components/Task02';
import Task03 from './components/Task03';

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen gap-[100px]'>
        <Task01 />
        <Task02 />
        <Task03 />
      </div>
    </>
  )
}
export default App