import { useRef } from "react"

export default function Task02(){
    const usernameRef = useRef();
    const ageRef = useRef();

    function handleForm(e){
        e.preventDefault();
        const formEl = e.currentTarget;
        const formData = new FormData(formEl);
        const username = formData.get('username');
        const age = formData.get('age');
        if(username === '' || age === ''){
            usernameRef.current.focus();
        }else if(age === ''){
            ageRef.current.focus();
        }else{
            usernameRef.current.value = '';
            ageRef.current.value = '';
        };
    };

    return (
        <div className="flex justify-center items-center flex-col border rounded-[7px] p-[20px]">
            <form onSubmit={handleForm} className="flex justify-center flex-col">
                <label htmlFor="username" className="text-[20px]">Username</label>
                <input type="text" name="username" id="username" ref={usernameRef} className="border rounded-[7px] px-[10px] py-[5px]"/>

                <label htmlFor="age" className="text-[20px] mt-[10px]">Age</label>
                <input type="number" name="age" id="age" ref={ageRef} className="border rounded-[7px] px-[10px] py-[5px]"/>

                <button className="mt-[20px] rounded-[7px] px-[10px] py-[5px] text-[20px] font-[500] bg-gray-600 text-gray-100 cursor-pointer hover:bg-gray-500 hover:text-gray-900 transition duration-200">Submit</button>
            </form>
        </div>
    )
}