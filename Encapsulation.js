class Employee
{
    setEmpDetails(name,id,phoneNo)
    {
        this.name = name;
        this.id   = id;
        this.phoneNo = phoneNo;
    }

    getEmpName()
    {
        return this.name;
    }

    getEmpID()
    {
        return this.id;
    }

    getEmpPhoneNum()
    {
        return this.phoneNo;
    }
}


let emp1 = new Employee();

emp1.setEmpDetails('John', 1001, 242488);
console.log(emp1.getEmpName());
console.log(emp1.getEmpID());
console.log(emp1.getEmpPhoneNum());

