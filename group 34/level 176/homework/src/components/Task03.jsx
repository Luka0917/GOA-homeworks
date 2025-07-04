import { useState, useEffect, useRef } from "react"

export default function Task03(){
  const [directions, setDirections] = useState('middle');
  const scrollStart = useRef(0);

  useEffect(() => {
    function handleScroll(){
      const windowScrollY = window.scrollY;
      if(windowScrollY > scrollStart.current){
        setDirections('Down')
      }else if(windowScrollY < scrollStart.current){
        setDirections('Up');
      }
      scrollStart.current = windowScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="border rounded-[20px] py-[15px] px-[50px] bg-black text-white text-[20px] font-500">
      {directions}
    </div>
  )
}