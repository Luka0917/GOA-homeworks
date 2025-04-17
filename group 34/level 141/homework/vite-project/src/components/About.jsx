export default function About(){
    function handleClick(){
        console.log('About');
    };
    return (
        <>
            <button onClick={handleClick} className="px-[10px] py=[5px] w-[175px] h-[75px] rounded-[7px] text-[20px] text-white font-[600] bg-green-500 cursor-pointer hover:bg-green-600 transition-bg duration-300">About</button>
        </>
    );
};