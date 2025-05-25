import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function Card(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState([]);

    function submitFunc(e){
        e.preventDefault();
        if(name && description){
            setData(prev => [...prev, {name, description}]);
            setName('');
            setDescription('');
        };
    };

    return (
        <div className="flex justify-center items-center flex-col gap-[20px] mt-[30px]">
            <form onSubmit={submitFunc} className="flex justify-center flex-col border-2 rounded-[27px] py-[40px] px-[20px]">
                <label htmlFor="name" className="font-[500]">Name</label>
                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="border-2 rounded-[7px]"/>
                <label htmlFor="description" className="mt-[10px] font-[500]">Description</label>
                <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} className="border-2 rounded-[7px]"/>
                <button className="border-2 rounded-[7px] font-[500] mt-[20px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-300">Submit</button>
            </form>

            <div className="flex justify-center items-center flex-wrap gap-[20px]">
                {data.map((el, i) => (
                    <div key={i} className="border-2 rounded-[24px] flex justify-around items-center flex-col overflow-hidden w-[175px] h-[225px]">
                        <FaUser className="text-[30px] border rounded-[50%] w-[40px] h-[40px] p-[5px]"/>
                        <p className="text-[20px]">{el.name}</p>
                        <p>{el.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}