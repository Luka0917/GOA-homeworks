import { FaUser } from "react-icons/fa";
import { useState } from 'react'

export default function MainPage({setIsRegistered}){

    const data = JSON.parse(localStorage.getItem('data'));

    function deleteAcc(){
        localStorage.clear();
        setIsRegistered(false);
    };

    return (
        <div className="flex justify-center items-center flex-col gap-[20px] bg-[#578FCA] text-white px-[30px] py-[40px] rounded-[24px]">
            <FaUser className="border rounded-[50%] flex justify-center items-center w-[50px] h-[50px] p-[5px]"/>
            <p className="text-[20px] font-[500]">{data.username}</p>
            <button onClick={deleteAcc} className="border mt-[15px] rounded-[5px] py-[3px] px-[6px] cursor-pointer hover:bg-white hover:text-[#578FCA] transition duration-300">Delete Account</button>
        </div>
    )
}