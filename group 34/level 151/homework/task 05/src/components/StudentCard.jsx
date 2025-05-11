export default function StudentCard({arr}){
    return (
        <>
            <div className="flex justify-center items-center gap-[50px]">
                {arr.map((el, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center flex-col gap-[5px] border-2 rounded-[32px] p-[20px]">
                            <p className="text-[20px]">{el.name}</p>
                            <p className="text-[20px]">Age: {el.age}</p>
                            <img src={el.img} className="rounded-[12px]" />
                        </div>
                    )
                })}
            </div>
        </>
    )
}