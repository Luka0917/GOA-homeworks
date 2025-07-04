export default function Task02({clickCount}){
    return (
        <div className="w-[100%] h-screen flex justify-center items-center flex-col">
            <p className="text-[18px]">Task 02</p>
            <p className="text-[30px] font-[500]">Click Count: {clickCount}</p>
        </div>
    )
}