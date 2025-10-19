import { useState, useEffect } from "react";
import { getInitialData, addTocart, removeFromCart } from "./task05function";

export default function Task05(){
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [chosenProducts, setChosenProducts] = useState([]);

    useEffect(() => {
        setData(getInitialData());
    }, []);

    return (
        <div className="flex justify-center items-center border rounded-[12px] p-[20px] gap-[30px]">
            <div className="flex justify-center items-center flex-col gap-[25px]">
                {
                    data.map((el, i) => (
                        <div key={i} className="flex justify-center items-center flex-col">
                            <p className="text-[18px]">{el.product}</p>
                            <p className="text-green-700 font-[500]">{el.price}$</p>
                            <button onClick={() => addTocart(setChosenProducts, setTotalPrice, i)} className="border border-black px-[15px] py-[2px] rounded-[5px] focus:outline-none bg-black text-white font-[500] cursor-pointer hover:bg-white hover:text-black transition duration-200">Add To Cart</button>
                        </div>
                    ))
                }
            </div>
            <div className="border rounded-[6px] p-[10px]">
                <p className="text-[18px]">Cart</p>
                <p>Total price: <b className="text-green-700">{totalPrice}$</b></p>
                <div>
                    <p>Products:</p>
                    <div className="flex justify-center items-center flex-col gap-[25px] mt-[20px]">
                        {
                            chosenProducts.map((el, i) => (
                                <div key={i} className="flex justify-center items-center flex-col">
                                    <p className="text-[18px]">{el.product}</p>
                                    <p className="text-green-700 font-[500]">{el.price}$</p>
                                    <button onClick={() => removeFromCart(setChosenProducts, setTotalPrice, i)} className="border border-black px-[15px] py-[2px] rounded-[5px] focus:outline-none bg-black text-white font-[500] cursor-pointer hover:bg-white hover:text-black transition duration-200">Remove From Cart</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}