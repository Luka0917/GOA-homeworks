import { useParams } from "react-router"
import { users } from "../data.js"

export default function User(){
    const {id} = useParams();
    const user = users.find(el => String(el.id) === id);

    return (
        <div className="flex justify-center items-center flex-col pt-[20px]">
            <b className="text-[40px]">User Page</b>
            <div>
                {user ? (
                    <div className="flex justify-center items-center flex-col bg-gray-600 rounded-[12px] mt-[30px] p-[10px]">
                        <b className="text-[25px] text-gray-100">{user.name}</b>
                        <p className="text-[17px]">{user.description}</p>
                    </div>
                ) : <b className="text-[20px]">User not found</b>}
            </div>
        </div>
    )
}