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

  describe(): string {
    return `${this.name} earns ${this.baseSalary}`;
  }
}

const employee1 = new Employee("mobarak", 50000);
// const employee2 = new Employee("riaj", 50000);

// employee1.baseSalary = 500

console.log(employee1.salaryWithBonus);

console.log(employee1.describe());

class Manager extends Employee {
  //   teamMemberCount: number;
  //   constructor(name: string, _baseSalary: number, teamMemberCount: number) {
  //     super(name, _baseSalary);
  //     this.teamMemberCount = teamMemberCount;
  //   }

  constructor(
    name: string,
    _baseSalary: number,
    public teamMemberCount: number,
  ) {
    super(name, _baseSalary);
  }

  describeWork(): String {
    return `${this.name} manages ${this.teamMemberCount} people`;
    }

    describeManager(): string { 
        return `${this.name} earns1 ${this.baseSalary}`
    }
}

const manager = new Manager("Riaj", 25000, 20);

console.log(manager.describeManager());
