export default function ExpenseDiv({title, price, date}){
    return (
        <div className="flex justify-between items-center border rounded-[12px] w-[350px] px-[10px]">
            <div className=" flex flex-col">
                <p className="text-[20px] font-[500]">{title}</p>
                <p className="text-[17px] font-[500] text-gray-400">{date}</p>
            </div>
            <p className="text-[30px] font-[500] text-green-500">{price}$</p>
        </div>
    )
}