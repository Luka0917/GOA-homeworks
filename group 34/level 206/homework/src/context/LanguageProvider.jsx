import { useState, createContext } from "react";

export const LanguageContext = createContext();

export default function LanguageProvider({children}){
    const [language, setLanguage] = useState('eng');
    
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}