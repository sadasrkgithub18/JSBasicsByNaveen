// Constructor Function: also used to create Obejcts
// Name: Pascal notation: OneTwoThreeFour

function Circle(radius)
{
    this.radius = radius;
    this.draw = function()
    {
        console.log('draw circle with radius: ', radius);
    }
}

// How to call constructor function -- use new kwyword

const a = new Circle(5);
console.log(a);
console.log(a.radius);
a.draw();



