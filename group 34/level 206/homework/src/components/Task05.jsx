import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

export default function Task05(){
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

    return (
        <div className="flex justify-center items-center flex-col gap-[10px]">
            {isLoggedIn ? <><p className="text-[20px] font-[500]">Welcome, User!</p> <button onClick={() => setIsLoggedIn(false)} className="px-[20px] py-[3px] border border-black rounded-[5px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Log Out</button></> : <button onClick={() => setIsLoggedIn(true)} className="px-[20px] py-[3px] border border-black rounded-[5px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Login</button>}
        </div>
    )
}