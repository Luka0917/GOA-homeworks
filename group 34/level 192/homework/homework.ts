function task01(num: number): string{
    return num % 2 == 0 ? 'Even' : 'Odd';
}

function task02(age: number): string{
    return age >= 18 ? 'Adult' : 'kid'
}

function task03(str: string): string{
    return str ? 'Not Empty' : 'Empty'
}

function task04(num1: number, num2: number): number{
    return num1 > num2 ? num1 : num2
}

function task05(password: string): string{
    return password.length >= 8 ? 'Strong' : 'Weak'
}