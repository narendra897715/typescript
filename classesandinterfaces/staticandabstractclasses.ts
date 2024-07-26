class DepartmentB {
    static fiscalyear = 2020;
    protected employees : string[] = [];
    constructor(public id: string, public name: string) {
  
    }

    static createEmployee(name : string) {
      return {name : name};
    }
    addEmployee(employee : string) {
      this.employees.push(employee);
    }
  
    printEmployeesInfo() {
      console.log(this.employees);
    }
  }

  DepartmentB.createEmployee("max");

  //note 
  //static methods cant be accessed by instance of class it can only be accessed with classname
  // static properties can only be accessed within static menthods it cant accessed or use within non-static method

//  Abstract classes

abstract class DepartmentAb {
    constructor(public name : string, public id : string) {

    }

    abstract describe() : void;
}

//class dep = new DepartmentAb("max", "dp1");
//this will error because abstract class cannot be instantiated it can only be extracted with extends keyword

class Itdepartment extends DepartmentAb {
    constructor(id : string) {
        super("max", id);
    }

    describe(): void {
        console.log('this department id is ' + this.id);
    }
}

const itdep = new Itdepartment('id1');
itdep.describe();

// abstract methods are used when that method need to be overridden in all child classes which extends parent class 
// if one method in class is abstract class should be abstract