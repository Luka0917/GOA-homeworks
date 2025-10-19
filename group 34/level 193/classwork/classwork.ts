// 8kyu

// https://www.codewars.com/kata/583710ccaa6717322c000105/train/typescript

export function simpleMultiplication(num: number): number{
  return num % 2 == 0 ? num * 8 : num * 9
}

// https://www.codewars.com/kata/57a4d500e298a7952100035d/train/typescript

export function hexToDec(hexString: string): number {
  return parseInt(hexString, 16);
}

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/typescript

export function removeChar(str: string): string {
  if(str.length <= 2){
    return ''
  };
  let result: string = '';
  for(let i: number = 1; i < str.length - 1; i++){
    result += str[i]
  };
  return result;
}

// https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b/train/typescript

export function sakuraFall(v: number): number {
  if(v <= 0){
    return 0
  };
  const distance: number = 400;
  return distance / v;
};

// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/typescript

export function switchItUp(intNumber:number):string {
  let words: string[] = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  return words[intNumber];
};