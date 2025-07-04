import Task01 from "./components/Task01"
import Task02 from "./components/Task02"
import Task03 from "./components/Task03"
import Task04 from "./components/Task04"

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-[150vh]">
        <div className="flex justify-between items-center w-[100%] h-[300px] px-[200px]">
          <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[10px]">Task 01</p>
            <Task01 />
          </div>
          <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[10px]">Task 02</p>
            <Task02 />
          </div>
          <div className="flex justify-center items-center flex-col h-screen gap-[50px]">  
            <p className="text-[20px] mb-[10px]">Task 03</p>
            <Task03 />
          </div>
          <div className="flex justify-center items-center flex-col h-screen gap-[50px]">
            <p className="text-[20px] mb-[10px]">Task 04</p>
            <Task04 />
          </div>
        </div>
      </div>
    </>
  )
}
export default App