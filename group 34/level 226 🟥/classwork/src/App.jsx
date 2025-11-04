import { useState } from "react"

function App() {
  const [divs, setDivs] = useState([]);

  function handleForm(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const x = Number(formData.get('x'));
    const y = Number(formData.get('y'));
    console.log(x);
    console.log(y);
    const newDivs = [];
    for (let row = 0; row < x; row++) {
      const rowDivs = [];
      for (let col = 0; col < y; col++) {
        rowDivs.push(<div key={`${row}-${col}`} className="border w-[30px] h-[30px]"></div>);
      }
      newDivs.push(rowDivs);
    }

    setDivs(newDivs);
    console.log(newDivs);
  }

  return (
    <>
      <div>
        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="">Grid X:</label>
            <input type="number" min={1} name="x" required className="border" />
          </div>
          <div>
            <label htmlFor="">Grid Y:</label>
            <input type="number" min={1} name="y" required className="border" />
          </div>
          <button>Submit</button>
        </form>

        <div className="border border-purple-500 p-5">
          {divs.map((el, i) => (
            <div key={i} className="flex">
              {el.map((box) => box)}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default App