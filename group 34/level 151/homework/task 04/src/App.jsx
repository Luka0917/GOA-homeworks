import Task from "./Task"

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Task task={'Do laundry'} time={'10 min'} />
      </div>
    </>
  )
}
export default App