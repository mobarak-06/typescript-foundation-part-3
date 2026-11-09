class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  set baseSalary(newSalary: number) {
    if (newSalary < 0) {
      throw new Error("salary can not be negative");
    }
    this._baseSalary = newSalary;
  }

  calculatePay(taxRate: number) {
    return this.baseSalary - this.baseSalary * taxRate;
  }

}

class Manager extends Employee {
  override calculatePay() {
      return this.baseSalary + 5000;

  }
}

class Developer extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public type: string,
  ) {
    super(name, _baseSalary);
  }

  override calculatePay(taxRate: number) {
    return this.baseSalary + 50000 - this.baseSalary * taxRate ;
  }
}

const employee = new Employee("Hello", 20000);
const manager = new Manager("Hello2", 20000);
const developer = new Developer("mobarak", 200000, "backend")

console.log(employee.calculatePay(0.1));
console.log(developer.calculatePay(0.1));
