export default function Task3({obj, func}){
    return (
        <>
            <div className='h-[266px] border-2 rounded-[24px] p-[20px] flex justify-center items-center flex-col gap-[30px]'>
                <p className='text-[30px] font-[700]'>{obj.name}</p>
                <p className='w-[200px] text-center text-[20px]'>{obj.description}</p>
                <button onClick={func} className='px-[15px] py-[5px] border-2 rounded-[12px] mt-[10px] cursor-pointer hover:bg-black hover:text-white transition-bg duration-300'>Next</button>
            </div>
        </>
    )
}