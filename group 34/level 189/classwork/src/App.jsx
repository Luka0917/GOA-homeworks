import { Link } from "react-router"
import ErrorPage from "./components/ErrorPage"

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Link to="/ErrorPage" className="text-[50px] hover:underline">ErrorPage</Link>
      </div>
    </>
  )
}
export default App