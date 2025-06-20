import { useState, useEffect } from "react";

export default function MainPage({setRegistered, setLoggedIn}){
    const [data, setData] = useState({});
    useEffect(() => {setData(JSON.parse(localStorage.getItem('data')))}, [])

    return (
        <div className="flex justify-center items-center flex-col rounded-[30px] px-[50px] py-[30px] bg-gray-200 text-[#212121]">
            <p className="text-[30px] font-[500] mb-[20px]">Main Page</p>
            <div className="flex justify-center items-center flex-col">
                <p className="text-[20px]">Username: <b>{data.username}</b></p>
                <button onClick={() => setLoggedIn(false)} className='border border-[#212121] rounded-[5px] mt-[15px] py-[3px] font-[500] bg-[#212121] text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-[#212121] transition duration-200'>Log Out</button>
                <button onClick={() => {setRegistered(false); localStorage.clear()}} className='border border-[#212121] rounded-[5px] mt-[15px] py-[3px] font-[500] bg-[#212121] text-gray-200 cursor-pointer hover:bg-gray-200 hover:text-[#212121] transition duration-200'>Delete Account</button>
            </div>
        </div>
    )
}