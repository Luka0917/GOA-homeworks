import { useState, useEffect } from "react"

export default function Search({allUsers, setUsersState}){
    const [input, setInput] = useState('');

    useEffect(() => {
        const filtered = allUsers.filter(user =>
            user.name.toLowerCase().includes(input.toLowerCase())
        );
        setUsersState(filtered);
    }, [input, allUsers, setUsersState]);

    return (
        <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Search name..." className="border rounded-[5px] mt-[10px] pl-[5px] py-[1px] focus:outline-none"/>
    )
}