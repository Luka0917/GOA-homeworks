import { useState } from "react";

export default function Login({setLoggedIn}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function handleForm(e){
        e.preventDefault();
        const data = JSON.parse(localStorage.getItem('data'));
        let correctUsername = false;
        let correctPass = false;
        if(username === data.username){
            correctUsername = true;
        };
        if(password === data.password){
            correctPass = true;
        };
    
        if(!correctUsername){
            setError('Invalid username!');
        }else if(!correctPass){
            setError('Invalid password!');
        };
    
        if(correctUsername && correctPass){
            setLoggedIn(true);
        };
    }

    return (
        <div className='flex justify-center items-center flex-col rounded-[30px] px-[50px] py-[30px] bg-gray-200 text-[#212121]'>
            <p className='text-[30px] font-[500] mb-[20px]'>Login</p>
            <form className='flex justify-center flex-col' onSubmit={handleForm}>
                <label htmlFor="username" className='text-[20px]'>Username</label>
                <input type="text" id="username" required value={username} onChange={e => setUsername(e.target.value)} className='border rounded-[5px] pl-[5px] focus:outline-none'/>

                <label htmlFor="password" className='text-[20px] mt-[7px]'>Password</label>
                <input type="password" id="password" required value={password} onChange={e => setPassword(e.target.value)} className='border rounded-[5px] pl-[5px] focus:outline-none'/>

                <button className='border border-[#212121] rounded-[5px] mt-[15px] py-[3px] font-[500] bg-[#212121] text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-[#212121] transition duration-200'>Login</button>
            </form>
            <p className='text-[20px] font-[500] text-red-500 mt-[20px]'>{error}</p>
        </div>
    )
}