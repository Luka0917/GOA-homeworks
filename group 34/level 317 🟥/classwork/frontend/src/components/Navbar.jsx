import { useState } from "react";
import { useStore } from "../../store/store";
import { Link } from "react-router";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";

export default function Navbar(){
    const { theme, themeToggle, user } = useStore();
    const [userWindow, setUserWindow] = useState(false);

    return (
        <div className="flex justify-end items-center gap-7 pt-5 px-75">
            <button onClick={() => themeToggle()} className={`${theme === 'light' ? 'bg-white border-[#dddde4] hover:bg-[#efeff7]' : 'bg-[#0f172b] border-[#272e40] hover:bg-[#1d293d] text-white'} border rounded-full p-1.75 cursor-pointer transition-all duration-200`}>{theme === 'light' ? <FiMoon size={23} /> : <IoSunnyOutline size={23} />}</button>
            <div>
                {user ? (
                    <div>
                        <div onClick={() => setUserWindow(prev => !prev)} className={`${theme === 'light' ? 'border-[#dddde4] bg-white hover:bg-[#efeff7]' : 'border-[#272e40] bg-[#0f172b] hover:bg-[#1d293d]'} flex justify-center items-center gap-3 px-3 py-1.75 border rounded-full cursor-pointer transition-all duration-200`}>
                            <LuUser 
                                size={20}
                                className={`
                                    ${theme === 'light' ? 'bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))]' : 'bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))]'}
                                    text-white rounded-full p-1.5 w-7 h-7
                                `}
                            />
                            <span className={`${theme === 'light' ? 'text-black' : 'text-white'} font-medium`}>{user.username}</span>
                            {userWindow
                                ? <IoIosArrowUp className={theme === 'light' ? 'text-[#62626f]' : 'text-[#717f96]'} /> 
                                : <IoIosArrowDown className={theme === 'light' ? 'text-[#62626f]' : 'text-[#717f96]'} />
                            }
                        </div>
                        {userWindow && (
                            <div className={`${theme === 'light' ? 'bg-white border-[#dddde4]' : 'bg-[#0f172b] border-[#272e40]'} absolute flex flex-col border rounded-2xl py-1 mt-1 right-75 w-50`}>
                                <p className={`${theme === 'light' ? 'text-[#62626f] border-[#efeff7]' : 'text-[#717f96] border-[#1d293d]'} text-xs border-b pb-2.5 py-1.5 px-3`}>Signed in as {user.username}</p>
                                <button 
                                    className={`
                                        ${theme === 'light' ? 'hover:bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))]' : 'text-white hover:bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))]'}
                                        flex items-center gap-2 py-1 px-2 mt-1 mx-1 rounded-xl hover:text-white cursor-pointer transition-all duration-200
                                    `}
                                    >
                                        <FiLogOut /> Log out
                                </button>
                                <button 
                                    className={`
                                        ${theme === 'light' ? 'text-[#e62b34] hover:bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))]' : 'text-[#ff6467] hover:bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))]'} 
                                        flex items-center gap-2 py-1 px-2 mt-0.5 mx-1 rounded-xl hover:text-white cursor-pointer transition-all duration-200
                                    `}
                                    >
                                        <FaRegTrashCan /> Delete account
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-5">
                        <Link to={'/sign_in'} className={`${theme === 'light' ? 'text-[#62626f] hover:text-black' : 'text-[#717f96] hover:text-white'}`}>Sign In</Link>
                        <Link to={'/sign_up'} className={`${theme === 'light' ? 'bg-[linear-gradient(135deg,oklch(0.42_0.18_285),oklch(0.62_0.22_320))]' : 'bg-[linear-gradient(135deg,oklch(0.5_0.2_285),oklch(0.7_0.22_320))]'} text-white px-2 py-1 rounded-xl font-medium hover:opacity-90 transition-all duration-200`}>Sign Up</Link>
                    </div>
                )}
            </div>
        </div>
    )
}