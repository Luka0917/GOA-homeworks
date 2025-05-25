import Card from "./components/Card";
import RandomPhoto from "./components/RandomPhoto";

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[20px]">
        <Card />
        <RandomPhoto />
      </div>
    </>
  )
}
export default App