class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("salary can not be negative");
        }
        this._baseSalary = newSalary;
    }
}
const employee1 = new Employee("mobarak", 50000);
const employee2 = new Employee("riaj", 50000);
// employee1.baseSalary = 500
console.log(employee1.salaryWithBonus);
export {};
