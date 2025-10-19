import { useEffect, useState } from "react"
import { useDebounce } from "../hooks/useDebounce"

export default function Task03(){
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const debouncedInput = useDebounce(input, 500);

    useEffect(() => {
        if(!debouncedInput) return;
        async function fetcher(){
            try{
                setLoading(true);
                setError(null);
                const fetchedData = await fetch('https://official-joke-api.appspot.com/random_joke');
                if(!fetchedData.ok){
                    throw new Error('Error!');
                }
                const dataJson = await fetchedData.json();
                setData(dataJson);
                setLoading(false);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            };
        };
        fetcher();
    }, [debouncedInput]);

    return (
        <div className="flex justify-center items-center flex-col">
            <input type="text" placeholder="Enter Text..." value={input} onChange={e => setInput(e.target.value)} className="border rounded-[5px] px-[5px] py-[3px] focus:outline-none mb-[10px]" />
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {data && (
                <div className="text-[20px]">
                    <p><b>Setup:</b> {data.setup}</p>
                    <p><b>Punchline:</b> {data.punchline}</p>
                </div>
            )}
        </div>
    )
}