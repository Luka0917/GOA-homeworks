import { users } from "./data.js"
import { Link } from "react-router"
import Search from "./components/Search.jsx"
import { useState } from "react"

function App() {
  const [usersState, setUsersState] = useState(users);

  return (
    <>
      <div className="flex justify-center items-center flex-col pt-[20px]">
        <b className="text-[40px]">Main Page</b>
        <Search allUsers={users} setUsersState={setUsersState} />
        <div id="main">
          {usersState.map(el => (
            <Link to={`/user/${el.id}`} key={el.id}>
              <div className="flex flex-col bg-gray-600 rounded-[12px] p-[10px]">
                <b className="text-[25px] text-gray-100">{el.name}</b>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default App