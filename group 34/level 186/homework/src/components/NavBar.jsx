export default function NavBar({theme, btns, setBtns}){
    return (
        <div className="flex justify-between items-center w-[125vh] mt-[20px]">
            <p className={`${theme === 'bg-[#091540]' ? 'text-[#fbfdfeff]' : 'text-neutral-900'} text-[25px] font-[700]`}>Extensions List</p>
            <div className="flex justify-center items-center gap-[20px]">
                <button onClick={() => setBtns([true, false, false])} className={`${btns[0] === true ? 'border-red-500 bg-red-400 text-neutral-900' : (btns[0] === false && theme === 'bg-[#091540]' ? 'border-neutral-600 bg-neutral-700 text-[#fbfdfeff]' : 'border-neutral-600 bg-[#fbfdfeff] text-neutral-900')} border rounded-[30px] px-[10px] py-[2px] text-[16px] cursor-pointer`}>All</button>
                <button onClick={() => setBtns([false, true, false])} className={`${btns[1] === true ? 'border-red-500 bg-red-400 text-neutral-900' : (btns[1] === false && theme === 'bg-[#091540]' ? 'border-neutral-600 bg-neutral-700 text-[#fbfdfeff]' : 'border-neutral-600 bg-[#fbfdfeff] text-neutral-900')} border rounded-[30px] px-[10px] py-[2px] text-[16px] cursor-pointer`}>Active</button>
                <button onClick={() => setBtns([false, false, true])} className={`${btns[2] === true ? 'border-red-500 bg-red-400 text-neutral-900' : (btns[2] === false && theme === 'bg-[#091540]' ? 'border-neutral-600 bg-neutral-700 text-[#fbfdfeff]' : 'border-neutral-600 bg-[#fbfdfeff] text-neutral-900')} border rounded-[30px] px-[10px] py-[2px] text-[16px] cursor-pointer`}>Inactive</button>
            </div>
        </div>
    )
}