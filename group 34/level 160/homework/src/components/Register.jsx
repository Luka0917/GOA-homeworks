import { useState } from 'react'

export default function Register({setIsRegistered}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function submitFunc(e){
        e.preventDefault();
        let correctUsername = false;
        if(username.length < 10){
            correctUsername = true;
        };
        let passwordIs8SymbolsLong = false; 
        let haveNumber = false;
        let haveSymbol = false;
        let haveUpper = false;
        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '{', '}', '[', ']', '\\', '|', ';', ':', "'", '"', '<', '>', ',', '.', '/', '?', '~', '`'];
        if(password.length >= 8){
            passwordIs8SymbolsLong = true;
        }else{
            setError('Password must be at least 8 characters long!');
        };
        for(let i = 0; i < password.length; i++){
            if(password[i] >= '0' && password[i] <= '9'){
                haveNumber = true;
            }else if(symbols.includes(password[i])){
                haveSymbol = true;
            }else if(password[i] === password[i].toUpperCase()){
                haveUpper = true;
            };
        };
        if(!haveNumber){
            setError('Password must have at least one number!');
            return;
        }else if(!haveSymbol){
            setError('Password must have at least one special symbol!');
            return;
        }else if(!haveUpper){
            setError('Password must have at least one uppercase letter!');
            return;
        };
        if(correctUsername && passwordIs8SymbolsLong && haveNumber && haveSymbol && haveUpper){
            const data = {
                username: username,
                email: email,
                password: password,
            };
            localStorage.setItem('data', JSON.stringify(data));
            setIsRegistered(true);
        };
    };

    return (
        <div className='flex justify-center items-center flex-col gap-[20px] bg-[#578FCA] text-white px-[30px] py-[40px] rounded-[24px]'>
            <p className='text-[30px] font-[600]'>Register</p>
            <form className='flex justify-center flex-col' onSubmit={submitFunc}>
                <label htmlFor="username" className='font-[500]'>Username</label>
                <input type="text" id='username' value={username} onChange={e => setUsername(e.target.value)} className='border rounded-[5px] focus:outline-none pl-[5px] py-[3px]'/>

                <label htmlFor="email" className='mt-[10px] font-[500]'>Email</label>
                <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} className='border rounded-[5px] focus:outline-none pl-[5px] py-[3px]' />

                <label htmlFor="password" className='mt-[10px] font-[500]'>Password</label>
                <input type="password" id='password' value={password} onChange={e => setPassword(e.target.value)} className='border rounded-[5px] focus:outline-none pl-[5px] py-[3px]' />

                <button className='border mt-[15px] rounded-[5px] py-[3px] cursor-pointer hover:bg-white hover:text-[#578FCA] transition duration-300'>Register</button>
            </form>
            <p className='font-[500] text-red-500 text-center w-[210px]'>{error}</p>
        </div>
    )
}