abstract class Employee {
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

    abstract calculatePay2(): number  
}

// const employee =  new Employee()

class Manager extends Employee {
    calculatePay2() { 
      return  this.baseSalary + 5000
    }
}

class Developer extends Employee {
  calculatePay2() {
    return this.baseSalary + 3000;
  }
}
