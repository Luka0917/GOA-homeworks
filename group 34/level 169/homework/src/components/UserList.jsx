import { useState, useEffect } from 'react'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function UserList(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function func(){
            try{
                setLoading(true);
                const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!fetchedData.ok){
                    throw new Error('Error!');
                };
                const apiData = await fetchedData.json();
                setData(apiData);
                setLoading(false);
            }catch(err){
                console.error(err);
            };
        };
        func();
    }, []);
    return (
        <>
            {loading ? 'Loading...' : 
                <div className='grid [grid-template-rows:repeat(2,390px)] [grid-template-columns:repeat(5,260px)] gap-[50px]'>
                    {data.map(el => (
                        <div key={el.id} className='flex justify-evenly items-center flex-col bg-[#9AA6B2] rounded-[24px]'>
                            <FaUser className='border rounded-[50%] flex justify-center items-center text-[50px] p-[5px]'/>
                            <p className='text-[20px] font-[500]'>{el.name}</p>
                            <p className='text-[18px] flex justify-evenly items-center gap-[5px]'><MdEmail /> {el.email}</p>
                            <p className='text-[18px] flex justify-evenly items-center gap-[5px]'><FaPhoneAlt /> {el.phone.split(' ')[0]}</p>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}