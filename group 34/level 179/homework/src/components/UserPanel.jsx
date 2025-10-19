import { useState } from "react"

export default function UserPanel(){
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')));

    return (
        <div className="flex justify-center items-center flex-col border rounded-[12px] p-[20px] mt-[50px]">
            <p className="text-[30px] font-[500]">User Panel</p>
            <p className="text-[20px]">Username: {data.username}</p>
            <p className="text-[20px]">Email: {data.email}</p>
            <p className="text-[20px]">Password: {"*".repeat(data.password.length - 3) + data.password.slice(-3)}</p>
        </div>
    )
}