/*
for(let i=0;i<10;i++)
{
    console.log('i Value is: '+i);
    if(i%2===0)
    {
        console.log('Hi this is JavaScript');
    }
}
*/
console.log('=======================');

/*
let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}
*/
console.log('=======================');
/*
let p=1;

do
{
    console.log(p);
    p++;
}
while(p>=10);

*/

// for - in:
// for Objects:

const persons=
{
  name:'SRK',
  age:24
};

for(let key in persons)
{
    console.log(key, persons[key]);
}

console.log('=======================');

// Array

const colors = ['Red','Green','Blue'];

for(let index in colors)
{
    console.log(index, colors[index]);
}
console.log('=======================');

// for - of:
// Used to get the values from array

for(let col of colors)
{
    console.log(col);
}



// break and continue

let k = 0;
while(k<=10)
{
    if(k === 5)
    {
        break;
    }

    

    console.log(k);
    k++;
}