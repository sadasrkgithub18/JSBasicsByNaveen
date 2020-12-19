let numbers = [1,2,3,4,5];
console.log(numbers);

let fruits = ['Apple','Banana','Grapes'];
console.log(fruits);

let cars = new Array('Ford','Toyota','BMW');
console.log(cars);

console.log(cars[1]);
cars[1] = 'Honda';
console.log(cars[1]);

console.log(cars);
fruits.push('Cherry');
console.log(fruits);
console.log(fruits.length);

let x;
for(x in fruits)
{
    console.log(fruits[x]);
}

console.log('==============================');

for(x of fruits)
{
    console.log(x);
}