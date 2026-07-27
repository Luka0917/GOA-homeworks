import { useId } from "react"
import axios from 'axios';

export default function SignUp(){
    const usernameId = useId();
    const passwordId = useId();

    async function SignUpForm(e){
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');

        try{
            const res = await axios.post('http://localhost:3002/signup', { username, password }, { withCredentials: true });
            const data = res.data;
            console.log(data.message);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div className="flex justify-center items-center flex-col mt-20">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <form onSubmit={SignUpForm} className="flex flex-col mt-10 w-75">
                <div className="flex flex-col mt-3">
                    <label htmlFor={usernameId} className="text-lg font-medium">Username</label>
                    <input type="text" id={usernameId} name='username' className="border rounded py-1 px-1" />
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor={passwordId} className="text-lg font-medium">Password</label>
                    <input type="text" id={passwordId} name='password' className="border rounded py-1 px-1" />
                </div>
                <button className="mt-4 text-xl font-medium border rounded py-1.5 bg-purple-500 text-white border-none cursor-pointer hover:bg-purple-700 transition duration-200">Sign In</button>
            </form>
        </div>
    )
}