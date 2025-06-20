import { useState } from 'react'

export default function Task01({setRegistered}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState('');

    function handleForm(e){
        e.preventDefault();
        let passwordIs8SymbolsLong = false; 
        let haveNumber = false;
        let haveSymbol = false;
        let haveUpper = false;
        let passwordsAreEqual = false;
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
        if(password === rePassword){
            passwordsAreEqual = true;
        }else{
            setError('Passwords do not match!');
        };

        if(!haveNumber){
            setError('Password must have at least one number!');
        }else if(!haveSymbol){
            setError('Password must have at least one special symbol!');
        }else if(!haveUpper){
            setError('Password must have at least one uppercase letter!');
        };

        if(passwordIs8SymbolsLong && haveNumber && haveSymbol && haveUpper && passwordsAreEqual){
            const data = {
                username: username,
                email: email,
                password: password,
            };
            localStorage.setItem('data', JSON.stringify(data));
            setRegistered(true);
        };
    };

    // localStorage.clear();

    return (
        <div className='flex justify-center items-center flex-col rounded-[30px] px-[50px] py-[30px] bg-gray-200 text-[#212121]'>
            <p className='text-[30px] font-[500] mb-[20px]'>Register</p>
            <form className='flex justify-center flex-col' onSubmit={handleForm}>
                <label htmlFor="username" className='text-[20px]'>Username</label>
                <input type="text" id="username" required value={username} onChange={e => setUsername(e.target.value)} className='border rounded-[5px] pl-[5px] focus:outline-none'/>

                <label htmlFor="email" className='text-[20px] mt-[7px]'>Email</label>
                <input type="email" id='email' required value={email} onChange={e => setEmail(e.target.value)} className='border rounded-[5px] pl-[5px] focus:outline-none'/>

                <label htmlFor="password" className='text-[20px] mt-[7px]'>Password</label>
                <input type="password" id='password' required value={password} onChange={e => setPassword(e.target.value)} className='border rounded-[5px] pl-[5px] focus:outline-none'/>

                <label htmlFor="re-password" className='text-[20px] mt-[7px]'>Repeat Password</label>
                <input type="password" id='re-password' required value={rePassword} onChange={e => setRePassword(e.target.value)} className='border rounded-[5px] pl-[5px] focus:outline-none'/>

                <button className='border border-[#212121] rounded-[5px] mt-[15px] py-[3px] font-[500] bg-[#212121] text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-[#212121] transition duration-200'>Register</button>
            </form>
            <p className='text-[20px] font-[500] text-red-500 mt-[20px]'>{error}</p>
        </div>
    )
}