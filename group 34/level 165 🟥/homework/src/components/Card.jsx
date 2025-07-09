import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function Card({id, name, email, phone, description, isFavorite, setData}){
    return (
        <div className="flex justify-center items-center flex-col rounded-[24px] bg-gray-700 gap-[25px]">
            <FaUser className="border rounded-[50%] w-[50px] h-[50px] text-center font-[20px] p-[5px] text-gray-400"/>
            <p className="text-[20px] font-[700] text-gray-200">{name}</p>
            <p className="flex justify-center items-center gap-[5px] font-[500] text-gray-300"><MdEmail /> {email}</p>
            <p className="flex justify-center items-center gap-[5px] text-gray-300"><FaPhoneAlt /> {phone}</p>
            <p className="text-center text-gray-300">{description}</p>
            <button onClick={() => setData(prev => prev.map(el => el.id === id ? {...el, isFavorite: !el.isFavorite} : el))} className="text-[30px] cursor-pointer">{isFavorite ? <FaHeart className="text-red-500"/> : <FiHeart className="text-red-500"/>}</button>
        </div>
    )
}