import { useId, useState, useEffect } from "react"
import { Link, useNavigate } from "react-router";
import { useStore, api } from "../../store/store";
import axios from 'axios';
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { FiHome } from "react-icons/fi";

export default function SignIn(){
    const { setUser, theme, themeToggle } = useStore();
    const [showPassword, setShowPassword] = useState(false);
    const [randomQuote, setRandomQuote] = useState({});
    const usernameId = useId();
    const passwordId = useId();
    const navigate = useNavigate();

    async function signInForm(e){
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        try{
            const res = await axios.post(`${api}/login`, { username, password }, { withCredentials: true });
            const data = res.data;
            setUser(data.user);
            console.log(data.message);
            navigate('/');
        }catch(err){
            console.error(err);
        }
    };

    async function getRandomQuote(){
        try{
            const res = await fetch('https://dummyjson.com/quotes/random');
            const data = await res.json();
            setRandomQuote(data);
        }catch(err){
            console.error(err);
        }
    };

    useEffect(() => { getRandomQuote() }, []);

    return (
        <div className="min-h-screen flex">
            <div 
                className={`
                    ${theme === 'light' ? 'bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))]' : 'bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))]'} 
                    h-screen w-[50%] flex justify-between items-start flex-col py-10 pl-10
                `}
                >
                    <button onClick={() => navigate('/')} className="bg-white/30 text-white p-3 rounded-full cursor-pointer hover:bg-white/40 transition-all duration-200"><FiHome size={23} /></button>
                    <div>
                        <h2 className="text-white text-3xl font-medium w-200">"{randomQuote.quote}"</h2>
                        <p className="text-white opacity-80 mt-5">— {randomQuote.author}</p>
                    </div>
            </div>
            <div className={`${theme === 'light' ? 'bg-[linear-gradient(180deg,oklch(0.985_0.005_90),oklch(0.96_0.015_300))]' : 'bg-[linear-gradient(180deg,oklch(0.15_0.04_265),oklch(0.2_0.05_285))]'} min-h-screen w-[50%] flex justify-center items-center flex-col`}>
                <div className="flex flex-col w-100">
                    <button 
                        onClick={() => themeToggle()} 
                        className={`
                            ${theme === 'light' ? 'bg-white border-[#dddde4] hover:bg-[#efeff7]' : 'bg-[#0f172b] border-[#272e40] hover:bg-[#1d293d] text-white'} 
                            border rounded-full p-1.75 mb-10 self-end cursor-pointer transition-all duration-200
                        `}
                        >
                            {theme === 'light' ? <FiMoon size={23} /> : <IoSunnyOutline size={23} />}
                    </button>
                    <div>
                        <h2 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-3xl font-medium`}>Welcome back</h2>
                        <p className={`${theme === 'light' ? 'text-[#62626f]' : 'text-[#717f96]'} text-sm mt-2`}>Sign in to pick up where you left off.</p>
                    </div>
                </div>
                <form onSubmit={signInForm} className="flex flex-col mt-10 w-100">
                    <div>
                        <label htmlFor={usernameId} className={`${theme === 'light' ? 'text-black' : 'text-white'} text-sm font-medium`}>Username</label>
                        <div className={`${theme === 'light' ? 'border-[#e4e4ea] placeholder:text-[#62626f] focus-within:ring-[#5943b0]' : 'border-[#333a4b] placeholder:text-[#90a1b9] focus-within:ring-[#9c5bf2] text-white'} flex items-center border rounded-xl focus-within:ring-1 shadow-sm py-1.5 px-2.5`}>
                            <input type="text" placeholder="your name" id={usernameId} name="username" className="w-full outline-none" />
                            <FaUser />
                        </div>
                    </div>
                    <div className="mt-3">
                        <label htmlFor={passwordId} className={`${theme === 'light' ? 'text-black' : 'text-white'} text-sm font-medium`}>Password</label>
                        <div className={`${theme === 'light' ? 'border-[#e4e4ea] placeholder:text-[#62626f] focus-within:ring-[#5943b0]' : 'border-[#333a4b] placeholder:text-[#90a1b9] focus-within:ring-[#9c5bf2] text-white'} flex items-center border rounded-xl focus-within:ring-1 shadow-sm py-1.5 px-2.5`}>
                            <input type={showPassword ? 'text' : 'password'} placeholder="••••••••" id={passwordId} name="password" className="w-full outline-none" />
                            <button type="button" onClick={() => setShowPassword(prev => !prev)} className="cursor-pointer">
                                {showPassword
                                    ? <LuEyeOff size={20} /> 
                                    : <LuEye size={20} />
                                }
                            </button>
                        </div>
                    </div>
                    <button className={`${theme === 'light' ? 'bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))]' : 'bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))]'} text-white font-medium mt-5 py-2 rounded-xl cursor-pointer hover:opacity-90 transition-all duration-200`}>Sign in</button>
                </form>
                <p className="mt-10 text-sm">
                    <span className={`${theme === 'light' ? 'text-[#62626f]' : 'text-[#717f96]'}`}>New here?</span>
                    <Link to={'/sign_up'} className={`${theme === 'light' ? 'text-black hover:text-[#4931a8]' : 'text-white hover:text-[#9d5bf4]'} font-medium ml-1 transition-all duration-200`}>Create an account</Link>
                </p>
            </div>
            <span className={`${theme === 'light' ? 'text-[#62626f]' : 'text-[#717f96]'} text-sm absolute bottom-5 right-5 cursor-default select-none`}>₾(U)k4</span>
        </div>
    )
}