import { FaUser } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Profile(props){
    return (
        <>
            <div className="w-[300px] border rounded-[12px] flex justify-center items-center flex-col py-[20px] gap-[3px]">
                <FaUser className="text-[50px] border rounded-[50%] p-[5px]" />
                <FaStar className={`text-[30px] cursor-pointer ${props.isFavorite && 'text-yellow-500'}`} onClick={props.changeStar}/>
                <p className="text-[20px]">{props.name}</p>
                <p className="text-[20px]">{props.mobile}</p>
                <p className="text-[20px]">{props.email}</p>
            </div>
        </>
    )
}