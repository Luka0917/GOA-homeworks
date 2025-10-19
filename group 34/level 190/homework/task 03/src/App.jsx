import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Card3 from "./components/Card3"

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-[12px] overflow-hidden flex justify-center items-center">
          <Card1 />
          <Card2 />
          <Card3 />
        </div>
      </div>
    </>
  )
}
export default App