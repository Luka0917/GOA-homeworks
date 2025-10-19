import { useState } from "react"

export default function Task05(){
    const [error, setError] = useState('');
    const [post, setPost] = useState([]);

    function handleForm(formData){
        const title = formData.get('title');
        const description = formData.get('description');
        if(title === '' || description === ''){
            setError('Fill All Fields!');
        }else{
            setPost(prev => [...prev, {title: title, description: description}]);
            setError("");
        }
    };

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[5px]">Task 05</p>
            <div className="flex justify-center items-center flex-col border-2 rounded-[12px] p-[20px]">
                <form action={handleForm} className="flex justify-center flex-col">
                    <label htmlFor="title" className="text-[17px]">Title</label>
                    <input type="text" name="title" id="title" className="border rounded-[5px] pl-[4px]" />

                    <label htmlFor="description" className="text-[17px] mt-[7px]">Description</label>
                    <input type="text" name="description" id="description" className="border rounded-[5px] pl-[4px]" />

                    <button className="flex justify-center items-center border rounded-[5px] mt-[15px] cursor-pointer hover:border-black hover:bg-black hover:text-white transition duration-200">Submit</button>
                </form>
                <p className="text-[18px] font-[500] text-red-500 mt-[5px]">{error}</p>
                <div className="flex justify-center items-center flex-col gap-[20px] mt-[20px]">
                    {post.map((el, i) => (
                        <div key={i} className="border rounded-[12px] p-[10px]">
                            <b className="w-[200px] text-[20px]">{el.title}</b>
                            <p className="w-[200px]">{el.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}