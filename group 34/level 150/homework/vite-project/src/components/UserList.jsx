export default function UserList({arr}){
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-[25px]">
                {arr.map((el, index) => (
                    <div key={index} className="border-2 rounded-[12px] p-[20px]">
                        <h2 className="text-[20px] font-[700]">{el.name}</h2>
                        <p className="w-[555px]">{el.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}