import Task01 from "./components/Task01"
import Task02 from "./components/Task02"
import Task03 from "./components/Task03"
import Task04 from "./components/Task04"
import Task05 from "./components/Task05"
import Snowfall from 'react-snowfall'

function App() {
  // localStorage.clear();

  return (
    <>
      <div className="flex justify-center items-center flex-col py-[100px] gap-[100px]">
        <Snowfall color="#9CC6DB" />
        <div className="flex justify-around items-center w-full">
          <Task01 />
          <Task02 />
          <Task03 />
        </div>
        <Task04 />
        <Task05 />
      </div>
    </>
  )
}
export default App