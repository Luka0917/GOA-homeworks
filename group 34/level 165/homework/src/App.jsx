import { people } from "./components/data";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const [data, setData] = useState(people);
  const [input, setInput] = useState('');
  const [sortChecked, setSortChecked] = useState(false);
  const [favoriteChecked, setFavoriteChecked] = useState(false);

  let filteredData = data.filter(person =>
    person.name.toLowerCase().includes(input.toLowerCase())
  );

  if(favoriteChecked){
    filteredData = filteredData.filter(person => person.isFavorite);
  }

  if(sortChecked){
    filteredData = [...filteredData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen">
        <div className="flex justify-center items-center gap-[100px] mb-[25px]">
          <input type="text" placeholder="Enter name" value={input} onChange={e => setInput(e.target.value)} className="border rounded-[5px] pl-[5px] py-[2px]"/>
          <div className="flex justify-center items-center gap-[5px]">
            <label htmlFor="sort-names" className="text-[20px]">Sort Names</label>
            <input type="checkbox" id="sort-names" checked={sortChecked} onChange={e => setSortChecked(e.target.checked)}/>
          </div>
          <div className="flex justify-center items-center gap-[5px]">
            <label htmlFor="is-favorite" className="text-[20px]">Is Favorite</label>
            <input type="checkbox" id="is-favorite" checked={favoriteChecked} onChange={e => setFavoriteChecked(e.target.checked)}/>
          </div>
        </div>
        <div id="data-div">
          {filteredData.map(el => <Card key={el.id} id={el.id} name={el.name} email={el.email} phone={el.phone} isFavorite={el.isFavorite} description={el.description} setData={setData}/>)}
        </div>
      </div>
    </>
  )
}
export default App