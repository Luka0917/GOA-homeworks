import Task01 from "./components/Task01"
import Task02 from "./components/Task02"
import Task03 from "./components/Task03"
import Task04 from "./components/Task04"

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[100px] py-[50px]">
        <Task01 />
        <Task02 />
        <Task03 />
        <Task04 />
      </div>
    </>
  )
}
export default App