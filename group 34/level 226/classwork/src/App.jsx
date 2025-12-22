import { useState } from "react"

function App() {
  const [divs, setDivs] = useState([]);
  const [isPanting, setIsPainting] = useState(false);
  const [color, setColor] = useState('#000000');

  function handleForm(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const x = Number(formData.get('x'));
    const y = Number(formData.get('y'));
    const newGrid = Array.from({ length: x }, () => Array.from({ length: y }, () => "#ffffff"));
    setDivs(newGrid);
  }

  function paintPixel(row, col){ setDivs(prev => prev.map((r, i) => r.map((c, j) => (i === row && j === col ? color : c)))) }

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
          <input type="color" value={color} onChange={e => setColor(e.target.value)} className="w-full h-8" />
          <button className="border border-black rounded-xl px-[5px] py-1.5 w-[200px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Submit</button>
        </form>

        <div className="mt-[100px]">
          {divs.map((row, i) => (
            <div key={i} className="flex">
              {row.map((cell, j) => (
                <div 
                  key={j}
                  onMouseDown={() => {
                    setIsPainting(true);
                    paintPixel(i, j);
                  }}
                  onMouseEnter={() => {
                    if(isPanting) paintPixel(i, j);
                  }}
                  onMouseUp={() => setIsPainting(false)}
                  className="w-10 h-10 border cursor-pointer"
                  style={{ backgroundColor: cell }}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default App