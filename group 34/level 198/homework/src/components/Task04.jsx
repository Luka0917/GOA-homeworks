import { useState } from "react"

export default function Task05(){
    const [error, setError] = useState('');

    function handleForm(formData){
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        if(username === '' || email === '' || password === ''){
            setError('Fill All Fields!');
        };
        const data = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem('data', JSON.stringify(data));
    };

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[5px]">Task 04</p>
            <div className="flex justify-center items-center flex-col border-2 rounded-[12px] p-[20px]">
                <form action={handleForm} className="flex justify-center flex-col">
                    <label htmlFor="username" className="text-[17px]">Username</label>
                    <input type="text" name="username" id="username" className="border rounded-[5px] pl-[4px]" />

                    <label htmlFor="email" className="text-[17px] mt-[7px]">Email</label>
                    <input type="email" name="email" id="email" className="border rounded-[5px] pl-[4px]" />

                    <label htmlFor="password" className="text-[17px] mt-[7px]">Password</label>
                    <input type="password" name="password" id="password" className="border rounded-[5px] pl-[4px]" />

                    <button className="flex justify-center items-center border rounded-[5px] mt-[15px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Submit</button>
                </form>
                <p className="text-[18px] font-[500] text-red-500 mt-[5px]">{error}</p>
            </div>
        </div>
    )
}