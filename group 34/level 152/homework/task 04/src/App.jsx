function App() {
  const boolArray = Array.from({ length: 100 }, (_, i) => i % 2 === 0);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <p className="text-[30px] font-[500]">{boolArray.map(el => el ? '1' : '0')}</p>
      </div>
    </>
  )
}
export default App