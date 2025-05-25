import { useState } from "react";

export default function RandomPhoto(){
    const [imgSrc, setImageSrc] = useState('');
    const [id, setId] = useState('');

    async function photos(){
        try{
            let fetchedData = await fetch('https://fakestoreapi.com/products');
            if(!fetchedData.ok){
                throw new Error('Error!');
            };
            let data = await fetchedData.json();
            let randomData = data[Math.floor(Math.random() * data.length)];
            setImageSrc(randomData.image);
            setId(randomData.id);
        }catch(err){
            console.error(err);
        };
    };

    return (
        <div className="border-2 rounded-[27px] p-[20px] flex justify-center items-center flex-col mb-[30px]">
            <img src={imgSrc} key={id} className="w-[200px] h-[300px]"/>
            <button onClick={photos} className="border-2 rounded-[7px] font-[500] mt-[20px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-300">Knopka</button>
        </div>
    )
}