import { useContext } from "react"
import { CartContext } from "../../context/CartProvider";
import { FaShoppingCart } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function Cart(){
    const {cart, setCart} = useContext(CartContext);

    return (
        <div>
            <p className="flex justify-center items-center gap-[5px] text-[30px] font-[500]">Cart <FaShoppingCart /></p>
            <div className="flex justify-center flex-col gap-[15px] mt-[20px]">
                {cart.map((el, i) => (
                    <div key={i} className="flex justify-center items-center gap-[20px] border rounded-[12px] p-[10px]">
                        <div>
                            <p>{el.name}</p>
                            <p className="text-green-700 font-[500]">${el.price}</p>
                        </div>
                        <button onClick={() => setCart(prev => prev.filter((_, index) => index !== i))} className="flex justify-center items-center gap-[5px] border border-black rounded-[5px] px-[10px] py-[3px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Remove <FaTrashCan /></button>
                    </div>
                ))}
            </div>
        </div>
    )
}