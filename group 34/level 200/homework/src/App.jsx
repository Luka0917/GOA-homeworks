import Task01 from "./components/task 01/Task01"
import Task02 from "./components/task 02/Task02"
import Task03 from "./components/task 03/Task03"
import Task04 from "./components/task 04/Task04"
import Task05 from "./components/task 05/Task05"

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[50px] h-screen">
        <div className="flex justify-center items-center gap-[50px]">
          <div className="flex justify-center items-center flex-col gap-[20px]">
            <p className="text-[20px] font-[500]">Task 01</p>
            <Task01 />
          </div>
          <div className="flex justify-center items-center flex-col gap-[20px]">
            <p className="text-[20px] font-[500]">Task 02</p>
            <Task02 />
          </div>
          <div className="flex justify-center items-center flex-col gap-[20px]">
            <p className="text-[20px] font-[500]">Task 03</p>
            <Task03 />
          </div>
          <div className="flex justify-center items-center flex-col gap-[20px]">
            <p className="text-[20px] font-[500]">Task 04</p>
            <Task04 />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-[20px]">
            <p className="text-[20px] font-[500]">Task 05</p>
            <Task05 />
        </div>
      </div>
    </>
  )
}
export default App