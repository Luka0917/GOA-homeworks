import { useContext } from "react"
import { LanguageContext } from "../context/LanguageProvider"

export default function Task02(){
    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <div className="flex justify-center items-center flex-col gap-[10px]">
            <p className="text-[20px] font-[500]">{language === 'eng' ? 'Hello, World!' : 'გამარჯობა, მსოფლიო!'}</p>
            <button onClick={() => setLanguage(prev => prev === 'eng' ? 'geo' : 'eng')} className="px-[20px] py-[3px] border border-black rounded-[5px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">{language === 'eng' ? 'GEO' : 'ENG'}</button>
        </div>
    )
}