import Task01 from "./components/Task01"
import Task02 from "./components/Task02"

function App() {
  return (
    <>
      <div className="flex justify-between items-center flex-col p-[50px] h-screen">
        <Task01 />
        <Task02 />
      </div>
    </>
  )
}
export default App