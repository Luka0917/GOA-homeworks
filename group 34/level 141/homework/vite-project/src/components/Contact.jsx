export default function Contact(){
    function handleClick(){
        console.log('Contact');
    };
    return (
        <>
            <button onClick={handleClick} className="px-[10px] py=[5px] w-[175px] h-[75px] rounded-[7px] text-[20px] text-white font-[600] bg-blue-500 cursor-pointer hover:bg-blue-600 transition-bg duration-300">Contact</button>
        </>
    );
};