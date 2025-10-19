import { useToggle } from "./hooks/useToggle"
import { useWindowSize } from "./hooks/useWindowSize"
import { useFetch } from "./hooks/useFetch"

function App() {
  const [dark, toggleDark] = useToggle(false)
  const {width, height} = useWindowSize()
  const [data, loading, error] = useFetch('https://dog.ceo/api/breeds/image/random')

  console.log(data)

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[75px] pt-[20px]">
        <p className="text-[20px] font-[500]">Custom hooks in React are reusable functions that let you extract and share logic between components using existing hooks like useState or useEffect.</p>
        <button onClick={toggleDark} className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} border border-black rounded-[5px] px-[15px] py-[2px] cursor-pointer`}>click me</button>
        <p className="text-[20px] font-[500]">Width: {width} Height: {height}</p>
        <div>
          {error && <p className="text-[20px] font-[500]">{error.message}</p>}
          {data ? <img src={data.message} alt="dog" className="w-[500px] rounded-[24px] shadow-2xl" /> : <p className="text-[20px] font-[500]">Loading...</p>}
        </div>
        <p className="text-[20px] font-[500]">React custom hooks must start with "use", can call other hooks, and should only run at the top level of a component or another hook—not inside loops, conditions, or nested functions.</p>
      </div>
    </>
  )
}
export default App