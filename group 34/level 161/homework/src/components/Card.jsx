export default function Card({name, age, city, email, phone, id}){
    return (
        <div className="flex justify-evenly items-center flex-col bg-[#90AACB] w-[250px] h-[375px] text-[#FAF7F0] rounded-[24px]">
            <p className="text-[20px] font-[500]">{name}</p>
            <p className="text-[20px] font-[500]">{age} Years old</p>
            <p className="text-[20px] font-[500]">{city}</p>
            <p className="text-[18px] font-[500]">{email}</p>
            <p className="text-[20px] font-[500]">{phone}</p>
        </div>
    )
}