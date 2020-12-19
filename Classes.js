class Employee
{
    setDetails(name,id)
    {
        this.name = name;
        this.id   = id;
    }
}

let emp1 = new Employee();
emp1.setDetails('John', 1294);
console.log(emp1.name);
console.log(emp1.id);


console.log('===========================');

class Manager
{
    constructor(name,id)
    {
        this.name = name;
        this.id = id;
    }
}


let empM1 = new Manager('John', 1000);
let empM2 = new Manager('Peter', 2000);

console.log(empM1.name);
console.log(empM1.id);

console.log(empM2.name);
console.log(empM2.id);

// New Comment added