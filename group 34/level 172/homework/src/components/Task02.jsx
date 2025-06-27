import { useState } from "react";

export default function Task02(){
    const [data, setData] = useState([]);

    function handleForm(formData){
        const name = formData.get('name');
        const car = formData.get('cars');
        const pet = formData.getAll('pets');
        const color = formData.get('colors');
        setData([name, car, pet, color]);
    }

    return (
        <div className="flex justify-center items-center gap-[50px]">
            <form action={handleForm} className="flex justify-center flex-col border-2 rounded-[24px] px-[20px] py-[40px]">
                <label htmlFor="name" className="text-[20px]">Name</label>
                <input type="text" id="name" name="name" required className="border rounded-[7px] focus:outline-none px-[10px] py-[3px]"/>

                <p className="text-center text-[25px] font-[500] mt-[20px]">Cars</p>
                <div className="flex justify-center items-center gap-[5px]">
                    <label htmlFor="mercedes" className="text-[20px]">Mercedes</label>
                    <input type="radio" id="merecedes" name="cars" value="mercedes" required/>
                </div>

                <div className="flex justify-center items-center gap-[5px]">
                    <label htmlFor="bmw" className="text-[20px]">BMW</label>
                    <input type="radio" id="bmw" name="cars" value="bmw" required/>
                </div>

                <div className="flex justify-center items-center gap-[5px]">
                    <label htmlFor="nissan" className="text-[20px]">Nissan</label>
                    <input type="radio" id="nissan" name="cars" value="nissan" required/>
                </div>

                <p className="text-center text-[25px] font-[500] mt-[20px]">Pets</p>
                <div className="flex justify-center items-center gap-[5px]">
                    <label htmlFor="cat" className="text-[20px]">Cat</label>
                    <input type="checkbox" id="cat" name="pets" value="cat"/>
                </div>

                <div className="flex justify-center items-center gap-[5px]">
                    <label htmlFor="dog" className="text-[20px]">Dog</label>
                    <input type="checkbox" id="dog" name="pets" value="dog"/>
                </div>

                <div className="flex justify-center items-center gap-[5px]">
                    <label htmlFor="hamster" className="text-[20px]">Hamster</label>
                    <input type="checkbox" id="hamster" name="pets" value="hamster"/>
                </div>

                <label htmlFor="color" className="text-[20px] font-[500] text-center mt-[20px]">Color</label>
                <select name="colors" id="color" required defaultValue="pickAColor" className="border rounded-[7px] px-[10px] py-[3px]">
                    <option value="pickAColor" disabled>--- Pick a Color ---</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>

                <button className="border rounded-[7px] px-[10px] py-[3px] mt-[20px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Submit</button>
            </form>

            <div className="flex justify-center items-center flex-col border-2 rounded-[24px] px-[20px] py-[40px]">
                <p className="text-[20px]"><b>Name:</b> {data[0]}</p>
                <p className="text-[20px]"><b>Car:</b> {data[1]}</p>
                <p className="text-[20px]"><b>Pet:</b> {data[2]}</p>
                <p className="text-[20px]"><b>Color:</b> {data[3]}</p>
            </div>
        </div>
    )
}