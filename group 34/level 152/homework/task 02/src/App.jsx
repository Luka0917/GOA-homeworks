import Box from "./components/box";

const arr = [
  {bg: 'bg-red-500', num: 12},
  {bg: 'bg-blue-500', num: 34},
  {bg: 'bg-green-400', num: 87},
  {bg: 'bg-yellow-300', num: 29},
  {bg: 'bg-purple-600', num: 63},
  {bg: 'bg-pink-400', num: 75},
  {bg: 'bg-indigo-500', num: 48},
  {bg: 'bg-teal-300', num: 91},
  {bg: 'bg-orange-400', num: 58},
  {bg: 'bg-lime-500', num: 7}
];

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-[30px] h-screen">
        {arr.map((el, index) => <Box bg={el.bg} num={el.num} key={index} />)}
      </div>
    </>
  )
}
export default App