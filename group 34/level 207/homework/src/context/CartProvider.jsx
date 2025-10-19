import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({children}){
    const [cart, setCart] = useState([]);
    const products = [
        {name: "Laptop", price: 1200},
        {name: "Smartphone", price: 800},
        {name: "Headphones", price: 150},
        {name: "Keyboard", price: 75},
        {name: "Mouse", price: 50},
        {name: "Monitor", price: 300},
        {name: "Tablet", price: 600}
    ];

    return (
        <CartContext.Provider value={{products, cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}