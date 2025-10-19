import { useState } from 'react';
import { data } from '../data';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Task02(){
    const [chosenProducts, setChosenProducts] = useState([]);
    const [total, setTotal] = useState(0);

    return (
        <div className='flex justify-center items-start gap-[50px]'>
            <div id='main'>
                {data.map(el => (
                    <div key={el.id} className='border rounded-[12px] flex justify-center items-center flex-col gap-[20px]'>
                        <p className='text-[25px] font-[500]'>{el.name}</p>
                        <p className='text-[18px]'>Price: <b className='text-green-700'>${el.price}/kg</b></p>
                        <button onClick={() => {setChosenProducts(prev => [...prev, {name: el.name, price: el.price}]); setTotal(prev => prev + el.price)}} className='border border-black rounded-[5px] px-[10px] py-[2px] flex justify-center items-center gap-[5px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200'>Add To Cart <FaShoppingCart /></button>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center flex-col border rounded-[12px] p-[20px]'>
                <p className='flex justify-center items-center text-[30px]'>Cart <FaShoppingCart /></p>
                <p>Total: <b className='text-green-700'>{total}$</b></p>
                <p className='text-[18px]'>Products:</p>
                <div className='flex justify-center items-center flex-col gap-[20px] mt-[10px]'>
                    {chosenProducts.map((el, i) => (
                        <div key={i} className='flex justify-center item-center gap-[40px] border rounded-[6px] p-[10px] w-[250px]'>
                            <div className='flex justify-center item-center flex-col'>
                                <p className='text-[17px]'>{el.name}</p>
                                <b className='text-green-700'>${el.price}/kg</b>
                            </div>
                            <button onClick={() => {setChosenProducts(prev => prev.filter((_, index) => index !== i)); setTotal(prev => prev - el.price);}} className='border border-black rounded-[5px] h-[30px] px-[10px] py-[2px] flex justify-center items-center gap-[5px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200'>Remove <FaRegTrashCan /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}