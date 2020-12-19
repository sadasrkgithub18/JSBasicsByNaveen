// Enumerating properties of an object
// get all the properties of an object

const circle =
{

    radius : 5,
    draw()
    {
        console.log('Draw');
    }
};

// 1. for-in loop
for(let key in circle)
{
    console.log(key, circle[key]);
} 

console.log('========================');

// 2. for-off loop
for(let key of Object.keys(circle))
{
    console.log(key);
}

console.log('========================');

for(let entry of Object.entries(circle))
{
    console.log(entry);
}


// 3. in operator
// check a property in an object

if('Price' in circle)
{
    console.log('Yes');
}

if('draw' in circle)
{
    console.log('Yes');
}

