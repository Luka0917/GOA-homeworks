import Presentation from './components/Presentation'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <>
      <div className='flex justify-center items-center flex-col h-screen gap-[100px]'>
        <Presentation />
        <ToDoList />
      </div>
    </>
  )
}
export default App