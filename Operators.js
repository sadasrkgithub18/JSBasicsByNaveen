// Arithmetic
// Assignment
// Ternary
// Comparison
// Logical
// Binary

// Arithmetic

/*
let x = 10;
let y = 20;

console.log(x + y);
console.log(x * y);
console.log(x - y);
console.log(x / y);
console.log(x % y);
console.log(5 ** 2);

console.log('=====================');


// ++ and --
let p = 1;
let q = p++;
console.log(p++);
console.log(q);


let p1 = 1;
let q1 = ++p1;
console.log(p1);
console.log(q1);

console.log('=====================');

let m=2;
console.log(m--);
console.log(m);

console.log('=====================');
*/

// assignment
/*
let x = 10;
let c = x+10;
console.log(x+c);

// x = x * 10;
x*= 10;
console.log(x);

let j = 5;
j +=5;
console.log(j);

*/

// Comparison
/*
let x = 10;
console.log(x>=10);

console.log(x===10); // strict equality - type and value

console.log('1'===1);


// loose equality - value
console.log('1'==1); 
console.log(1==1);
console.log(true==1);

*/

// Ternary
/*
let points = 90;
let type = points > 100 ? 'gold' : 'Silver';

console.log(type);
*/


// logical
// AND (&&)
/*
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan);

// OR (||)

// NOT(!)

let isActive = true;

console.log(!isActive);

console.log(!(10>5));
*/

// logical operators with Non Boolean
// falsy (false)
// undefined
// null
// 0
// false
// ' '
// NaN

// truthy values which are not falsy
/*
console.log(false || 'SRK');
console.log(false || 1 || 2);
console.log(true || 1 || 2);
console.log(false || undefined);
console.log(true || null);
*/

// real time ex:
/*
let userColor = 'White';
let dafaultColor = 'blue';
let currentColor = userColor || dafaultColor;

console.log(currentColor);

*/


// Bitwise Operators
/*
console.log(1 | 2);
console.log(1 & 2);
*/

// Operator precedence

// console.log(2+3+5);
// console.log((2+3)*5);


// Swap 2 values

let a = 10;
let b = 20;

let c = a;
    a = b;
    b = c;

console.log('a ->'+a);
console.log('b ->'+b);

