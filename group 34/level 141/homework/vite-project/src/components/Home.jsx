export default function Home(){
    function handleClick(){
        console.log('Home');
    };
    return (
        <>
            <button onClick={handleClick} className="px-[10px] py=[5px] w-[175px] h-[75px] rounded-[7px] text-[20px] text-white font-[600] bg-red-500 cursor-pointer hover:bg-red-600 transition-bg duration-300">Home</button>
        </>
    );
};