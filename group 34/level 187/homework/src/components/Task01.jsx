import { useState, useTransition, startTransition } from "react"

export default function Task01(){
    const [inputArr, setInputArr] = useState([]);
    const [isPending, startTransition] = useTransition();

    function handleChange(e){
        const value = e.target.value;
        startTransition(() => {
            const arr = [];
            for(let i = 0; i < 10000; i++){
                arr.push(value);
            };
            setInputArr(arr);
        });
    };

    return (
        <div className="m-[20px]">
            <input type="text" placeholder="Enter Text..." onChange={handleChange} className="border rounded-[5px] px-[10px] py-[2px] focus:outline-none" />
            {isPending ? "Loading..." : inputArr.map((el, i) => <div key={i}>{el}</div>)}
    </div>
    )
}