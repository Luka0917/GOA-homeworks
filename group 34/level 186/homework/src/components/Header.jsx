export default function Header({theme, setTheme}){
    return (
        <div className={`${theme === 'bg-[#091540]' ? 'bg-neutral-800' : 'bg-[#fbfdfeff]'} flex justify-between items-center p-[10px] rounded-[13px] w-[125vh]`}>
            <div>
                <img src="./src/assets/images/logo.svg"/>
            </div>
            <button onClick={() => theme === 'bg-[#091540]' ? setTheme('bg-[#dceafdff]') : setTheme('bg-[#091540]')} className={`${theme === 'bg-[#091540]' ? 'bg-neutral-700' : 'bg-neutral-100'} flex justify-center items-center p-[10px] rounded-[7px] cursor-pointer`}>
                <img src={`${theme === 'bg-[#091540]' ? './src/assets/images/icon-sun.svg' : './src/assets/images/icon-moon.svg'}`}/>
            </button>
        </div>
    )
}