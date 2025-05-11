import UserStatus from "./UserStatus"

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <UserStatus loggedIn={true} />
        <UserStatus loggedIn={false} />
      </div>
    </>
  )
}
export default App