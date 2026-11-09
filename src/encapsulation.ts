class Employee {
  constructor(
    public name: string,
    private _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
    }


    get salaryWithBonus(): number { 
        return this._baseSalary + 5000
    }

    set baseSalary(newSalary: number) {

        if (newSalary < 0) {
            throw new Error("salary can not be negative")
        }
    this._baseSalary = newSalary;
  }
}

const employee1 = new Employee("mobarak", 50000);
const employee2 = new Employee("riaj", 50000);


// employee1.baseSalary = 500

console.log(employee1.salaryWithBonus);
