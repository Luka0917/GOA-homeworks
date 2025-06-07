import User from "./components/User"

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-[50px]">
        <User name='Luka Tatuashvili' age={16} email='tatuashvililuka@gmail.com' phone='579010715' />
        <User name='Giorgi Gvaradze' age={16} email='gvaradzegiorgi@gmail.com' phone='533050967' />
      </div>
    </>
  )
}
export default App