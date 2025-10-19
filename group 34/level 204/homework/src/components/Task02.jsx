import { useState } from "react"

export default function Task02(){
    const [inputs, setInputs] = useState({name: '', lastname: '', email: ''});

    return (
        <div className="flex justify-center items-center gap-[50px]">
            <div className="flex justify-center items-center flex-col gap-[15px]">
                <input type="text" placeholder="Enter Name..." value={inputs.name} onChange={e => setInputs(prev => ({...prev, name: e.target.value}))} className="border rounded-[5px] px-[3px] py-[1px]" />
                <input type="text" placeholder="Enter Lastname..." value={inputs.lastname} onChange={e => setInputs(prev => ({...prev, lastname: e.target.value}))} className="border rounded-[5px] px-[3px] py-[1px]" />
                <input type="email" placeholder="Enter Email..." value={inputs.email} onChange={e => setInputs(prev => ({...prev, email: e.target.value}))} className="border rounded-[5px] px-[3px] py-[1px]" />
            </div>
            <ul className="flex justify-center flex-col gap-[15px]">
                <li><b>Name:</b> {inputs.name}</li>
                <li><b>Lastname:</b> {inputs.lastname}</li>
                <li><b>Email:</b> {inputs.email}</li>
            </ul>
        </div>
    )
}