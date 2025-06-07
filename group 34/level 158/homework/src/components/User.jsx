import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";

export default function User({name, age, email, phone}){
    return (
        <div className='flex justify-between items-center flex-col border p-[20px] w-[250px] h-[375px]'>
            <FaUser className='flex justify-center items-center border rounded-[50%] text-[50px] p-[5px]'/>
            <p className='text-[20px] font-[500]'>{name}</p>
            <p className='text-[20px] font-[500]'>{age} Years old</p>
            <p className='text-[20px] font-[500]'>{email}</p>
            <p className='text-[20px] font-[500]'>{phone}</p>
        </div>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
};