// Value type:
// number, String, boolean, symbol, undefined, null

// Reference type
// Object, Function, Array

let x = 10;
y = x;
x = 20;

console.log('X val is: '+x);
console.log('Y val is: '+y);

console.log('===============================');

let p = {value : 10};
let q = p;

p.value = 20;

console.log(p.value);
console.log(q.value);