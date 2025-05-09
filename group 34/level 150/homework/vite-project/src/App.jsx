import Users from './components/Users'
import UserList from './components/UserList'

function App() {
  const usersArr = Users()
  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <UserList arr={usersArr} />
      </div>
    </>
  )
}
export default App