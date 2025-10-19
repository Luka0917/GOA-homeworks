import Task01 from "./components/Task01"
import Task02 from "./components/Task02"

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[100px] pt-[20px]">
        <Task01 />
        <Task02 />
      </div>
    </>
  )
}
export default App