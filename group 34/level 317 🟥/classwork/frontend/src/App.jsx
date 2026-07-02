import { useId } from "react"
import Navbar from "./components/Navbar"

function App() {
  const titleId = useId();
  const descriptionId = useId();

  return (
    <>
      <div>
        <Navbar />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold">Todo list</h1>
          <form action="" className="flex flex-col mt-10 w-75">
            <div className="flex flex-col">
              <label htmlFor={titleId} className="text-lg font-medium">Title</label>
              <input type="text" id={titleId} className="border rounded" />
            </div>
            <div className="flex flex-col mt-3">
              <label htmlFor={descriptionId} className="text-lg font-medium">Description</label>
              <textarea id={descriptionId} className="border rounded h-30"></textarea>
            </div>
            <button className="mt-4 text-xl font-medium border rounded py-1 bg-purple-500 cursor-pointer hover:bg-purple-700 transition duration-200">Add Todo</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default App