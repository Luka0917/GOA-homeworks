import { useState, useEffect, useRef } from "react"
import Task01 from "./components/Task01"
import Task02 from "./components/Task02"
import Task03 from "./components/Task03"

function App() {
  const [clickCount, setClickCount] = useState(0);
  const divRef = useRef();
  const countRef = useRef(clickCount);

  useEffect(() => {
    countRef.current = clickCount;
  }, [clickCount]);

  useEffect(() => {
    function divClick(){
      setClickCount(prev => prev + 1);
      console.log(`Click Count | useState |: ${clickCount}`);
      console.log(`Click Count | useRef |: ${countRef.current}`);
      console.log('');
    };
    const div = divRef.current;
    div.addEventListener('click', divClick);
    return () => div.removeEventListener('click', divClick);
  }, []);

  return (
    <>
      <div ref={divRef} className="flex justify-center items-center flex-col h-screen">
        <Task01 />
        <Task02 clickCount={clickCount}/>
        <Task03 />
      </div>
    </>
  )
}
export default App