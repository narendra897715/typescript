class Department {
   Depname : string;
   DepId : string;

   constructor(n : string, id: string) {
     this.Depname = n;
     this.DepId = id;
   }
}

const activeDep = new Department("computers", 'd1');

console.log(activeDep);

// access modifier

class Department1 {
    Depname : string;
    DepId : string;
    private employees : string[] = [];
 
    constructor(n : string, id: string) {
      this.Depname = n;
      this.DepId = id;
    }

    addEmployees(employee : string) {
      this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
 }

 const activeDep1 = new Department1("electronics", "d2");
 activeDep1.addEmployees("max");
 activeDep1.printEmployees();

 //activeDep1.employees.push("mad"); uncommenting this line will give error because employees property is private it can only be accessbily inside class.

 // short hand syntax

 class Department3 {
    private employees : string[] = [];
    constructor(public Depname : string, public DepId : string) {

    }

    printDepartmentName() {
        console.log(this.Depname);
    }
 }

 const dep3 = new Department3("mechanical", 'd3');
 dep3.printDepartmentName();

 // in short hand initialization we dont define properties inside class and initiliaze them inside constructor directly we can define and intilize with shorthand initilization
// mentioning access modifier is mandatory for shorthand initilization

// readonly
class Department4 {
    private employees : string[] = [];
    constructor(public readonly Depname : string, public DepId : string) {

    }

    printDepartmentName() {
       // this.Depname = 'Civil'; this line throws error because depname is readonly property.
        console.log(this.Depname);
    }
 }

