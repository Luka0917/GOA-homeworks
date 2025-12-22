import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store";
import { FaShoppingCart } from "react-icons/fa";

export default function Task04(){
    const { cart, add, remove, priceCount } = useStore(
        useShallow(s => ({
            cart: s.cart,
            add: s.add,
            remove: s.remove,
            priceCount: s.priceCount
        }))
    )

    const data = [
        { product: 'T-shirt', price: 39.99 },
        { product: 'Phone', price: 799.99 },
        { product: 'Sneakers', price: 129.99 },
        { product: 'Backpack', price: 59.99 },
        { product: 'Headphones', price: 199.99 }
    ];

    return (
        <div className="flex justify-center items-center gap-[100px]">
            <div className="flex justify-center items-center flex-col gap-5">
                {data.map((el, i) => (
                    <div key={i} className="flex justify-between items-center w-[250px] border rounded-[17px] p-2.5">
                        <div className="flex justify-center items-center flex-col">
                            <p>{el.product}</p>
                            <p>{el.price}$</p>
                        </div>
                        <button onClick={() => add(el)} className="border border-black rounded-[7px] px-[5px] py-0.5 bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Add To Cart</button>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-[30px] font-semibold flex justify-center items-center gap-[5px]">Cart <FaShoppingCart /></p>
                    <p className="text-[20px] font-medium">Total: <b className="text-green-700">{priceCount.toFixed(2)}$</b></p>
                </div>
                <div className="flex justify-center items-center flex-col gap-5 mt-5">
                    {cart.map((el, i) => (
                        <div key={i} className="flex justify-between items-center w-[250px] border rounded-[17px] p-2.5">
                            <div className="flex justify-center items-center flex-col">
                                <p>{el.product}</p>
                                <p>{el.price}$</p>
                            </div>
                            <button onClick={() => remove(i)} className="border border-black rounded-[7px] px-[5px] py-0.5 bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Remove From Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}