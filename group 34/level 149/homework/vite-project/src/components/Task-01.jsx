import { useState } from 'react'

export default function Task1(){
    const [bg, setBg] = useState('bg-white');
    const [color, setColor] = useState('text-black');

    function darkMode(){
        setBg('bg-black');
        setColor('text-white');
    };
    function darkModeRe(){
        setBg('bg-white');
        setColor('text-black');
    };
    return (
        <>
            <div className={`flex justify-center items-center flex-col border-2 rounded-[24px] w-[200px] p-[20px] ${bg} ${color}`}>
                <p className='text-[20px] font-[500]'>Change div color</p>
                <div className='flex justify-center items-center gap-[20px] mt-[10px]'>
                    <button className='border-2 rounded-[50%] w-[40px] h-[40px] cursor-pointer' onClick={darkMode}>ON</button>
                    <button className='border-2 rounded-[50%] w-[40px] h-[40px] cursor-pointer' onClick={darkModeRe}>OFF</button>
                </div>
            </div>
        </>
    )
}