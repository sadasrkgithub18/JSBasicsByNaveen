const num = [3,4];
/*
console.log(num);
console.log('Array Length is: '+num.length);

console.log(num[0]);
console.log(num[2]);
*/
/*

// Add an element at the end of the array

num.push(5,6);
console.log(num);

// Add an element at the begining of the array

num.unshift(1,2);
console.log(num);

// Add an element at the middle of the array

num.splice(2,0,'a','b');
console.log(num);

// How to print all the values from the array

for(const key in num)
{
    console.log(num[key]);
}

*/
// Find elements in Array : (Primitive)

const s = [1,2,3,1,4];
console.log(s.indexOf(1));  // 1st Occurence of 1
console.log(s.indexOf(5));
console.log(s.indexOf('a'));
console.log(s.indexOf('1'));
console.log(s.indexOf(1,1));
console.log(s.indexOf(1, s.indexOf(1)+1)); // 2nd Occurence of 1

console.log(s.indexOf(3)!==-1);

console.log(s.includes(3));


// Find elements in Array: (Refrence Type):
// Array can Object...

const courses =[
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];

// console.log(courses.includes({id:1,name:'a'})); //false

const c1 = courses.find(function(course){

    return course.name === 'b';
});


console.log(c1);

console.log(c1.name);
console.log(c1.id);

console.log('===========================');

const c2 = courses.findIndex(function(course){

    return course.name === 'a';
});

console.log(c2);

console.log('===========================');


const c3 = courses.find(course => course.name === 'b');
console.log(c3);
