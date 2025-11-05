import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(){
      try{
        const api = await fetch('https://fakestoreapi.com/products');
        if(!api.ok){
          throw new Error('Error!');
        };
        const apiData = await api.json();
        setData(apiData);
      }catch(err){
        console.log(err)
      }
    }
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <div>

      </div>
    </>
  )
}
export default App