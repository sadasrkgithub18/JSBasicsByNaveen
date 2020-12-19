// Factory Function : It produces objects

function createCircle(radius)
{

    const circle =
    {
       radius : radius,
       draw : function()
       {
           console.log('Draw Function');
       }

    }

    return circle;
}

const c1 = createCircle(5);
console.log(c1);

console.log(c1.radius);
c1.draw();


const c2 = createCircle(10);
console.log(c2.radius);


console.log('===========================');

function createCircleTwo(radius)
{
    return {
       radius,
       draw()
       {
           console.log('Draw Function');
       }
    }
}

const c3 = createCircleTwo(5);
console.log(c3);

console.log(c3.radius);
c3.draw();


const c4 = createCircleTwo(10);
console.log(c4);

console.log(c4.radius);
c4.draw();


