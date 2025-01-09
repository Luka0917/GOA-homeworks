// 1
let varible1 = 1 > 3;
console.log(!varible1);

// 2
let varible2 = true || false;
console.log(!varible2);

// 3
let varible3 = true && false;
console.log(!varible3);

// 4
let varible4 = (true || false) && (true || true);
console.log(!varible4);

// 5
let varible5 = ((true || false) && (true || true)) && ((true || false) && (true || true));
console.log(!varible5);

// 6
let varible6 = ((false && true) || (false && false)) || ((false && true) || (false || false));
console.log(!varible6);

// 7
let varible7 = 123 == 456;
console.log(!varible7);

// 8
let varible8 = "Luka" == "luka";
console.log(!varible8);

// 9
let varible9 = (false && true) || (false && false);
console.log(!varible9);

// 10
let varible10 = (((false && true) || (false && false)) || ((false && true) || (false || false)) && ((true || false) && (true || true)) && ((true || false) && (true || true)));
console.log(!varible10);