import { useState } from "react";
import Profile from "./components/profile";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Alice Johnson",
      mobile: "+1-555-0101",
      email: "alice.johnson@example.com",
      isFavorite: true
    },
    {
      name: "Bob Smith",
      mobile: "+1-555-0102",
      email: "bob.smith@example.com",
      isFavorite: false
    },
    {
      name: "Carol Williams",
      mobile: "+1-555-0103",
      email: "carol.williams@example.com",
      isFavorite: true
    },
    {
      name: "David Brown",
      mobile: "+1-555-0104",
      email: "david.brown@example.com",
      isFavorite: false
    },
    {
      name: "Eva Davis",
      mobile: "+1-555-0105",
      email: "eva.davis@example.com",
      isFavorite: true
    }
  ]);

  function changeStar(id){
    setUsers(prevUsers => prevUsers.map((el, i) =>i === id ? { ...el, isFavorite: !el.isFavorite } : el));
  };
  return (
    <>
      <div className="flex justify-center items-center gap-[10px] h-screen">
        {users.map((el, i) => <Profile key={i} name={el.name} mobile={el.mobile} email={el.email} isFavorite={el.isFavorite} changeStar={() => changeStar(i)} />)}
      </div>
    </>
  )
}
export default App