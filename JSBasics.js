//Data Types
let nameOne='SRK';
let age = 24;
console.log(nameOne+' '+age);

console.log(50+40);

let range = 4;
range = 5;
console.log('Range is: '+range);

const range2 = 4;
//range2 = 5;
console.log('Range is: '+range2);

const noOfDays = 7;


//Data Types
// 1. Primitive Data Types

// -- String
// -- Number
// -- Boolean
// -- Undefined
// -- Null

// 2. Reference Types
// -- Object
// -- Array
// -- Functins


let s1 = 'First String';
let num = 50;
let salary = 12.33;
let flag = true;
let iSActive = false;
let price;
let model = null;
let wheels= undefined;



// dyamic typing
let d = 'Sada Siva Reddy k';
d = 100;


// Objects

let user={
name:"Tom",
age:30
};

console.log(user);

// 1. dot notation
console.log(user.name);
console.log(user.age);
user.age=50;
console.log(user.age);
console.log(user.name+' '+user.age);


//2. Using Bracket notation
user['name'] = 'Mary';
console.log(user.name);


// Arrays
// list of objects
let language = ['Java','JavaScript'];

console.log(language);
console.log(language.length);

language[2] = 'Ruby';
console.log(language);
console.log(language.length);

console.log(language[2]);

// Functions:

function getName()
{
    console.log('This is my Function');
}

// call the function

getName();

// param based function

function greet(name,age)
{
  console.log('Hello ' +name+' age is: '+age);
}

greet('Naveen',24);
greet('Tome');
greet();


// Return from function

function add(num1, num2)
{
    return num1+num2;
}

let sum  = add(10,20);
console.log(sum);

console.log(add(50,50));


function squareRoot(number)
{
let root = number * number;
return root;
}

console.log(squareRoot(3));
console.log(squareRoot(5));