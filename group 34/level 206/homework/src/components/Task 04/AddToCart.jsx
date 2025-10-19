import { useContext } from "react"
import { CartContext } from "../../context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";

export default function AddToCart(){
    const {products, setCart} = useContext(CartContext);

    return (
        <div className="flex justify-center flex-col gap-[20px]">
            {products.map((el, i) => (
                <div key={i} className="flex justify-center items-center gap-[20px] border rounded-[12px] p-[15px]">
                    <div>
                        <p className="text-[17px]">{el.name}</p>
                        <p className="text-green-700 font-[500] text-[20px]">${el.price}</p>
                    </div>
                    <button onClick={() => setCart(prev => [...prev, {name: el.name, price: el.price}])} className="flex justify-center items-center gap-[5px] border border-black rounded-[5px] px-[10px] py-[3px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Add To Cart <FaShoppingCart /></button>
                </div>
            ))}
        </div>
    )
}