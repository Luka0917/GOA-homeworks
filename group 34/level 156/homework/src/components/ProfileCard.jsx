export default function ProfileCard({name, age, following, followingBtnFunc}){
    return (
        <div className="flex justify-center items-center flex-col gap-[15px] border rounded-[12px] py-[30px] px-[15px]">
            <p className="text-[20px]">{name}</p>
            <p className="text-[20px]">{age}</p>
            <button onClick={followingBtnFunc} className="border rounded-[7px] py-[5px] px-[10px] cursor-pointer hover:bg-black hover:text-white hover:border-black transition duration-300">{following ? "Following" : "Follow"}</button>
        </div>
    )
}