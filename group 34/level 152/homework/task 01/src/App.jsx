const people = [
  "Alice Johnson",
  "Michael Smith",
  "Emma Davis",
  "Liam Brown",
  "Olivia Wilson",
  "Noah Taylor",
  "Ava Martinez",
  "Elijah Anderson",
  "Sophia Thomas",
  "James Moore"
];

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-[30px] h-screen">
        {people.map((el, index) => <h1 key={index} className="text-[30px] font-[500]">{el}</h1>)}
      </div>
    </>
  )
}
export default App