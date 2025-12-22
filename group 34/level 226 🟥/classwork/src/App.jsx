import { useState } from "react"

function App() {
  const [divs, setDivs] = useState([]);

  function handleForm(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const x = Number(formData.get('x'));
    const y = Number(formData.get('y'));
    const newDivs = [];
    for(let row = 0; row < x; row++){
      const rowDivs = [];
      for(let col = 0; col < y; col++){
        rowDivs.push(<div key={`${row}-${col}`} className="border w-[50px] h-[50px]"></div>);
      }
      newDivs.push(rowDivs);
    }
    setDivs(newDivs);
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col pt-[50px]">
        <form onSubmit={handleForm} className="flex justify-center items-center flex-col gap-[5px]">
          <div>
            <label htmlFor="x" className="text-[20px] font-medium">Grid X:</label>
            <input type="number" min={1} name="x" id="x" required className="border rounded-[7px] px-[5px] py-0.5 ml-[7px]" />
          </div>
          <div>
            <label htmlFor="y" className="text-[20px] font-medium">Grid Y:</label>
            <input type="number" min={1} name="y" id="y" required className="border rounded-[7px] px-[5px] py-0.5 ml-[7px]" />
          </div>
          <button className="border border-black rounded-xl px-[5px] py-1.5 w-[200px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Submit</button>
        </form>

        <div className="mt-[100px]">
          {divs.map((el, i) => (
            <div key={i} className="flex">
              {el.map(cube => cube)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default App