import Data from "./components/Data"
import ProfileCard from "./components/ProfileCard"
import { useState } from "react";

function App() {
  const [data, setData] = useState(Data());

  function followingFunc(index){
    const newData = [...data];
    newData[index].following = !newData[index].following;
    setData(newData);
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen gap-[50px]">
        {data.map((el, i) => (
          <ProfileCard key={i} name={el.name} age={el.age} following={el.following} followingBtnFunc={() => followingFunc(i)}/>
        ))}
      </div>
    </>
  )
}
export default App