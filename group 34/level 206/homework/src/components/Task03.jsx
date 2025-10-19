import { useContext } from "react"
import { UserContext } from "../context/UserProvider"

export default function Task03(){
    const {user, setUser} = useContext(UserContext);

    return (
        <div className="flex justify-center flex-col">
            <p><b>Name:</b> {user.name}</p>
            <p><b>Age:</b> {user.age}</p>
            <form action={formData => setUser(prev => ({...prev, name: formData.get('username')}))} className="mt-[20px]">
                <input type="text" placeholder="User Name..." name="username" required className="border rounded-[5px] px-[5px] py-[3px] focus:outline-none" />
                <button className="border border-black rounded-[5px] px-[10px] py-[3px] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200 ml-[10px]">Change Name</button>
            </form>
        </div>
    )
}