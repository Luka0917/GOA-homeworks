export function increment(setCount, step){
    setCount(prev => prev + Number(step));
};

export function decrement(setCount, step){
    setCount(prev => prev - step);
};