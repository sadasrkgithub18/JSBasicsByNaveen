let EmpDetails = function(name,age)
{
    this.name = name;
    this.age = age;

    this.getName = function()
    {
        return this.name;
    };

    this.getAge = function()
    {
        return this.age;
    };
};

let emp1 = new EmpDetails('John' ,30);
let emp2 = new EmpDetails('Peter' , 40);

console.log(emp1.getName());
console.log(emp2.getAge());


console.log('===============================');

let MgrDetails = function(name,age)
{
    this.name = name;
    this.age = age;  
};


MgrDetails.prototype.getName = function()
{
        return this.name;
};


MgrDetails.prototype.getAge = function()
{
        return this.age;
};

let mgr1 = new MgrDetails('John2' ,30);
let mgr2 = new MgrDetails('Peter2' , 45);

console.log(mgr1.getName());
console.log(mgr2.getAge());

