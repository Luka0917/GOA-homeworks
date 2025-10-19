import { useState, createContext } from "react"

export const BgContext = createContext();

export default function BgProvider({children}){
    const [bg, setBg] = useState('light');

    return (
        <BgContext.Provider value={{bg, setBg}}>
            {children}
        </BgContext.Provider>
    )
}