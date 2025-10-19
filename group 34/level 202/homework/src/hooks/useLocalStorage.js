import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue){
    function storedData(){
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    };
    const [data, setData] = useState(storedData);
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);
    return [data, setData];
}