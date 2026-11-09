class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee1 = new Employee("mobarak", 50000);
const employee2 = new Employee("riaj", 50000);

console.log(employee1);              
console.log(employee2);              
