export default function Task4({hero1, hero2, hero3}){
    return (
        <>
            <div className="flex justify-center items-center gap-[50px]">
                <div className="h-[266px] border-2 rounded-[24px] p-[20px] flex justify-center items-center flex-col gap-[15px]">
                    <p className='text-[30px] font-[700]'>{hero1.name}</p>
                    <p className='w-[200px] text-center text-[20px]'>{hero1.description}</p>
                    <p className='w-[220px] text-center text-[20px]'><b>Powers:</b> {hero1.powers}</p>
                </div>
                <div className="h-[266px] border-2 rounded-[24px] p-[20px] flex justify-center items-center flex-col gap-[15px]">
                    <p className='text-[30px] font-[700]'>{hero2.name}</p>
                    <p className='w-[200px] text-center text-[20px]'>{hero2.description}</p>
                    <p className='w-[220px] text-center text-[20px]'><b>Powers:</b> {hero2.powers}</p>
                </div>
                <div className="h-[266px] border-2 rounded-[24px] p-[20px] flex justify-center items-center flex-col gap-[15px]">
                    <p className='text-[30px] font-[700]'>{hero3.name}</p>
                    <p className='w-[200px] text-center text-[20px]'>{hero3.description}</p>
                    <p className='w-[220px] text-center text-[20px]'><b>Powers:</b> {hero3.powers}</p>
                </div>
            </div>
        </>
    )
}