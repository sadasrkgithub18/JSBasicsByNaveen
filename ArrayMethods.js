let fruits = ['Apple','Banana','Grapes'];
console.log(fruits);

fruits.pop();  // Removes last item from array
console.log(fruits);

fruits.shift(); // Removes first item from array
console.log(fruits);

fruits.push('Cherry');  // Adds element at the end of the array
console.log(fruits);

fruits.unshift('Lemon'); // Adds element at the begining of the array
console.log(fruits);


delete fruits[1];
console.log(fruits);

fruits[1] = 'Orange';
console.log(fruits);

fruits.splice(1,2);
console.log(fruits);

fruits.splice(2,0,'Orange','Cherry');
console.log(fruits);

console.log('============================');


let citrusFruits = fruits.slice(0,2);
console.log(fruits);
console.log(citrusFruits);

console.log('============================');

let evenNumbers = [2,4,6];
let oddNumbers  = [1,3,5];
let primeNumbers= [2,3,7];

let numbers = evenNumbers.concat(oddNumbers, primeNumbers);
console.log(numbers);





