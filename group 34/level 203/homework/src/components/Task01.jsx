import { useState } from "react"

export default function Task01(){
    const [todo, setTodo] = useState([]);

    function handleForm(formData){
        setTodo(prev => [...prev, formData.get('todoText')])
    };

    return (
        <div className="bg-gray-700 pt-[20px] pb-[30px] px-[30px] rounded-[12px] text-gray-200 flex justify-center items-center flex-col">
            <p className="text-[40px] font-[700] mb-[20px]">ToDo</p>
            <form action={handleForm} className="flex justify-between items-center w-[280px]">
                <input type="text" name="todoText" placeholder="Enter Text..." className="border rounded-[5px] px-[5px] py-[3px] focus:outline-none" />
                <button className="border border-black rounded-[5px] px-[10px] py-[3px] bg-black text-white cursor-pointer hover:bg-transparent hover:text-black transition duration-200">Submit</button>
            </form>
            <div>
                <ul className="flex justify-center items-center flex-col gap-[10px] mt-[20px]">
                    {todo.map((el ,i) => (<li key={i} className="flex justify-between items-center text-[17px] text-white text-center font-[500] w-[280px] bg-gray-500 px-[20px] py-[10px] rounded-[5px]">{el} <button onClick={() => {setTodo(prev => prev.filter((_, index) => index !== i))}} className="border border-black rounded-[5px] px-[10px] py-[1px] bg-black text-white ml-[10px] cursor-pointer hover:bg-transparent hover:text-black transition duration-200">Remove</button></li>))}
                </ul>
            </div>
        </div>
    )
}