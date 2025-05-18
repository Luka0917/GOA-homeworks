function App() {
  return (
    <>
      {/* Classwork 1 */}
      <div className="flex justify-center items-center h-screen gap-[10px]">
        {Array(10).fill(<div className="w-[40px] h-[40px] rounded-[5px] bg-red-500"></div>)}
        {Array(10).fill().map((_, i) => <div className="w-[40px] h-[40px] rounded-[5px] bg-green-500"></div>)}
      </div>

      {/* Classwokr 2 */}
    </>
  )
}
export default App