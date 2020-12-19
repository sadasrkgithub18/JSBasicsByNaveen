// Dynamic Nature of Object in JavaScript
const circle =
{
    radius : 5,
    color  : 'Red',
    log()
    {
       console.log('log', this.radius);
    }
}

console.log(circle);

console.log('=============================');
//add more properties in circle object

circle.price = 100;
circle.isPresent=true;
circle.draw = function(){

}

console.log(circle);

console.log('==========================');

// delete properties from circle object
delete circle.price;
console.log(circle);

delete circle.draw;
console.log(circle);

circle.log();

