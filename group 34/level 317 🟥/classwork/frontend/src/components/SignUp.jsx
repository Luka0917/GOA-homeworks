import { useId } from "react"

export default function SignUp(){
    const usernameId = useId();
    const passwordId = useId();

    return (
        <div className="flex justify-center items-center flex-col mt-20">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <form className="flex flex-col mt-10 w-75">
                <div className="flex flex-col mt-3">
                    <label htmlFor={usernameId} className="text-lg font-medium">Username</label>
                    <input type="text" id={usernameId} className="border rounded py-1 px-1" />
                </div>
                <div className="flex flex-col mt-3">
                    <label htmlFor={passwordId} className="text-lg font-medium">Password</label>
                    <input type="text" id={passwordId} className="border rounded py-1 px-1" />
                </div>
                <button className="mt-4 text-xl font-medium border rounded py-1.5 bg-purple-500 text-white border-none cursor-pointer hover:bg-purple-700 transition duration-200">Sign In</button>
            </form>
        </div>
    )
}