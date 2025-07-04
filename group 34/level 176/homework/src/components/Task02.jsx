export default function Task02(){
    function handleForm(formData){
        const name = formData.get('name');
        localStorage.setItem('name', name);
    };

    return (
        <div className="flex justify-center items-center flex-col border rounded-[20px] p-[20px]">
            <form action={handleForm} className="flex justify-center items-center gap-[10px]">
                <input type="text" name="name" placeholder="Enter name" className="border rounded-[7px] px-[10px] py-[3px]"/>
                <button className="border border-black rounded-[7px] px-[10px] py-[3px] font-[500] bg-black text-white cursor-pointer hover:bg-white hover:text-black transition duration-200">Submit</button>
            </form>
        </div>
    )
}