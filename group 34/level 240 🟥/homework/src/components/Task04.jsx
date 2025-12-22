import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store"; 

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
            <div>
                {data.map((el, i) => (
                    <div key={i} className="flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <p>{el.product}</p>
                            <p>{el.price}$</p>
                        </div>
                        <button onClick={() => add(el)}>Add To Cart</button>
                    </div>
                ))}
            </div>
            <div>
                <p>Cart</p>
                <p>Total: {priceCount.toFixed(2)}$</p>
                <div>
                    {cart.map((el, i) => (
                        <div key={i}>
                            <div className="flex justify-center items-center flex-col">
                                <p>{el.product}</p>
                                <p>{el.price}$</p>
                            </div>
                            <button onClick={() => remove(i)}>Remove From Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}