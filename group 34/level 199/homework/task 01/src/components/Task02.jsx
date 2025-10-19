import { useState, useEffect } from "react"

export default function Task02(){
    const [data, setData] = useState([])

    useEffect(() => {
        async function apiDataFunc(){
            try{
                const fetchedData = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!fetchedData.ok){
                    throw new Error('Error!');
                };
                const apiData = await fetchedData.json();
                setData(apiData);
                console.log(apiData);
            }catch(err){
                console.error(err);
            };
        };
        apiDataFunc();
    }, []);

    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-[20px] mb-[5px]">Task 02</p>
            <div id="main-2">
                {
                    data.map((el, i) => (
                        <div key={i} className="flex justify-center items-center flex-col gap-[20px] border rounded-[24px] px-[10px]">
                            <b className="text-center">{el.title}</b>
                            <p className="text-center">{el.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}