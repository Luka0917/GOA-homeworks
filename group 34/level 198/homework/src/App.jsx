import Task01 from './components/Task01';
import Task02 from './components/Task02';
import Task03 from './components/Task03';
import Task04 from './components/Task04';
import Task05 from './components/Task05';

function App() {
  return (
    <>
      <div className='flex justify-center items-center h-screen gap-[75px]'>
        <Task01 />
        <Task02 />
        <Task03 />
        <Task04 />
        <Task05 />
      </div>
    </>
  )
}
export default App