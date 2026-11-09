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
// const employee =  new Employee()
class Manager extends Employee {
    calculatePay2() {
        return this.baseSalary + 5000;
    }
}
class Developer extends Employee {
    calculatePay2() {
        return this.baseSalary + 3000;
    }
}
export {};
