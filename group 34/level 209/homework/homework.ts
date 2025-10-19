function identity<E>(el: E): E{
    return el;
};
console.log(identity<Number>(17));
console.log(identity<String>('Luka'));


function logArray<E>(arr: E[]): E[]{
    console.log(arr);
    return arr;
};
console.log(logArray<Number>([1, 2, 3, 4, 5]));


function makePair<T, U>(el1: T, el2: U): [T, U]{
    return [el1, el2];
};
console.log(makePair<Number, String>(12, 'Hello'));


function swap<T, U>(tuple: [T, U]): [U, T]{
    return [tuple[1], tuple[0]];
}
console.log(swap([1, "hello"]));
console.log(swap([true, 99]));


function firstElement<X>(arr: X[]): X{
    return arr[0];
};
console.log(firstElement<Number>([1, 2, 3, 4, 5]));