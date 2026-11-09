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
    calculatePay(taxRate) {
        return this.baseSalary - this.baseSalary * taxRate;
    }
}
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    type;
    constructor(name, _baseSalary, type) {
        super(name, _baseSalary);
        this.type = type;
    }
    calculatePay(taxRate) {
        return this.baseSalary + 50000 - this.baseSalary * taxRate;
    }
}
const employee = new Employee("Hello", 20000);
const manager = new Manager("Hello2", 20000);
const developer = new Developer("mobarak", 200000, "backend");
console.log(employee.calculatePay(0.1));
console.log(developer.calculatePay(0.1));
export {};
