import { useState, useEffect } from "react";

export function useDebounce(state, delay){
    const [deBouncedState, setDeBouncedState] = useState(state);
    useEffect(() => {
        const time = setTimeout(() => {
            setDeBouncedState(state);
        }, delay);
        return () => clearTimeout(time);
    }, [state, delay]);
    return deBouncedState;
};