function Employee(name, age, baseSalary)
{
    this.name = name;
    this.age  = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000;


    this.calculateFinalSalary = function()
    {
        let finalSalary = this.baseSalary + this.monthlyBonus;
        console.log('Final Salary is: '+finalSalary);
    }

    this.getEmpDetails = function()
    {
        console.log('Name: '+this.name+' | Age :'+ this.age);
    }
}

let emp1 = new Employee('John',30,20000);
emp1.getEmpDetails();
emp1.monthlyBonus = 10000;
emp1.calculateFinalSalary();


console.log('========================================');


function EmployeeTwo(name, age, baseSalary)
{
    this.name = name;
    this.age  = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;


    let calculateFinalSalary = function()
    {
        let finalSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is: '+finalSalary);
    }

    this.getEmpDetails = function()
    {
        console.log('Name: '+this.name+' | Age :'+ this.age);
        calculateFinalSalary();
    }
}

let emp3 = new EmployeeTwo('John',30,20000);
emp3.getEmpDetails();
