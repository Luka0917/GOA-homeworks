export default function ProductList({arr}){
    return (
        <>
            {arr.map(el => (
                <div key={el.id} className="flex justify-center items-center flex-col border-2 rounded-[24px] gap-[50px]">
                    <p className="text-[20px] font-[500]">{el.name}</p>
                    <p className="text-[30px] font-[600]">${el.price}</p>
                    <p className="text-[20px]">In stock: {el.instock ? 'Yes' : 'No'}</p>
                </div>
            ))}
        </>
    )
}