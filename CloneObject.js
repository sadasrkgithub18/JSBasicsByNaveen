const circle =
{
    radius : 5,
    draw() 
    {
        console.log('draw function');
    }
}


// 1. for in loop

const another = {};
for(let key in circle)
another[key] = circle[key];
console.log(another);

console.log('===================');
//2. Using object.assign method:

const anotherTwo = Object.assign({}, circle);
console.log(anotherTwo);

const anotherThree = Object.assign
(
    {
    color : 'red'
    }, 
    circle);

    console.log(anotherThree);
    anotherThree.draw();

    console.log('===================');

// 3. using spread ... operator
const anotherSpread  = {...circle};
console.log(anotherSpread);
anotherSpread.draw();

