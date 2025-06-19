import { useState } from 'react'

export default function Task_01(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registered, setRegistered] = useState(false);

    return (
        <div className='border-2 rounded-[24px] p-[30px]'>
            {
                registered ? 
                    <p className='text-[30px] font-[600]'>Hello <b>{username}</b></p> 
                : 
                    <form onSubmit={() => setRegistered(true)} className='flex justify-center flex-col'>
                        <label htmlFor="username" className='text-[20px]'>Username</label>
                        <input type="text" id="username" required value={username} onChange={e => setUsername(e.target.value)} className="border rounded-[5px] pl-[5px] focus:outline-none" />

                        <label htmlFor="password" className='text-[20px] mt-[15px]'>Password</label>
                        <input type="password" id="password" required value={password} onChange={e => setPassword(e.target.value)} className="border rounded-[5px] pl-[5px] focus:outline-none" />

                        <button className='border rounded-[5px] font-[500] mt-[20px] py-[2px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200'>Submit</button>
                    </form>   
            }
        </div>
    )
}