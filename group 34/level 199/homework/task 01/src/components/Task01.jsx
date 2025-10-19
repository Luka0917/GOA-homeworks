import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";

export default function Task01(){
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function apiDataFunc(){
            try{
                const fetchedData = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!fetchedData.ok){
                    throw new Error('Error!');
                };
                const apiData = await fetchedData.json();
                setData(apiData);
            }catch(err){
                setError('Error!')
                console.error(err);
            };
        };
        apiDataFunc();
    }, []);

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[5px]">Task 01</p>
            <button onClick={() => setShow(prev => prev === true ? false : true)} className="flex justify-center items-center border rounded-[5px] px-[20px] py-[5px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Load Users</button>
            <p className="text-[20px] font-[500] text-red-500 mt-[20px]">{error}</p>
            <div id="main-1">
                {
                    show ? (data.map((el, i) => (
                        <div key={i} className="flex justify-center items-center flex-col gap-[20px] border rounded-[24px]">
                            <b className="flex justify-center items-center gap-[5px] text-[20px]">
                                <FaUser />
                                {el.username}
                            </b>
                            <p><b>Name:</b> {el.name}</p>
                            <p className="flex justify-center items-center gap-[5px]">
                                <MdEmail />
                                {el.email}
                            </p>
                            <p className="flex justify-center items-center gap-[5px]">
                                <FaPhone />
                                {el.phone}
                            </p>
                            <p className="flex justify-center items-center gap-[5px] underline">
                                <FaLink />
                                {el.website}
                            </p>
                        </div>
                    ))) : ''
                }
            </div>
        </div>
    )
}