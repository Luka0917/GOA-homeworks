import { useState } from 'react';

export default function ProfileCard({arr}){
    const [followStates, setFollowStates] = useState(Array(arr.length).fill(false));
    const handleFollow = (index) => {
        const newStates = [...followStates];
        newStates[index] = !newStates[index];
        setFollowStates(newStates);
    };
    return (
        <>
            {arr.map((el, index) => (
                <div key={index} className={`${el.avatar} rounded-[24px] p-[20px] flex justify-center items-center flex-col gap-[50px]`}>
                    <p className="text-[25px] font-[700]">{el.name}</p>
                    <p className="w-[200px] text-center text-[20px]">{el.description}</p>
                    <button onClick={() => handleFollow(index)} className="border-2 rounded-[12px] font-[500] py-[5px] px-[15px] cursor-pointer">{followStates[index] ? 'Following' : 'Follow'}</button>
                </div>
            ))}
        </>
    )
}