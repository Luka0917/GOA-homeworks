export default function Login({setLogedIn}){
    function handleForm(formdata){
        const username = formdata.get('username');
        const email = formdata.get('email');
        const password = formdata.get('password');
        const data = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem('data', JSON.stringify(data));
        setLogedIn(true);
    };

    localStorage.clear();

    return (
        <div className="flex justify-center items-center flex-col border rounded-[12px] p-[20px]">
            <p className="text-[30px] font-[500]">Login</p>
            <form action={handleForm} className="flex justify-center flex-col">
                <label htmlFor="username" className="text-[20px] mt-[20px]">Username</label>
                <input type="text" id="username" name="username" required className="border rounded-[5px] px-[10px] py-[3px]"/>

                <label htmlFor="email" className="text-[20px] mt-[10px]">Email</label>
                <input type="email" id="email" name="email" required className="border rounded-[5px] px-[10px] py-[3px]"/>

                <label htmlFor="password" className="text-[20px] mt-[10px]">Password</label>
                <input type="password" id="password" name="password" required className="border rounded-[5px] px-[10px] py-[3px]"/>

                <button className="border rounded-[5px] px-[10px] py-[3px] font-[500] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200 mt-[20px]">Login</button>
            </form>
        </div>
    )
}