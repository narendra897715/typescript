class DepartmentA {
  protected employees : string[] = [];
  private student : string[] = [];
  constructor(public id: string, public name: string) {

  }
  addEmployee(employee : string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(this.employees);
  }
}

class ITDepartment extends DepartmentA {
    constructor(id: string, public admins : string[]) {
        super(id, "IT");
    }

}

class AccountDepartment extends DepartmentA {
    public lastReports : string;
    constructor(id : string, private reports : string[]) {
        super(id, "Accounts");
        this.lastReports = reports[0];
    }

    get mostlatestReports() {
        return this.lastReports
    }

    set mostlatestReports(value : string) {
        this.lastReports = value;
    }

    addEmployee(employee : string) {
        if(employee === 'max') {
            return;
        }
        this.employees.push(employee); 
       // this.student.push("hello");  // here we cant access employees property when it is private in base class 
    }
}

const accounting = new AccountDepartment("d3", ['accounts']);
accounting.addEmployee("max");
accounting.addEmployee('mary');
accounting.printEmployeesInfo();

//protected properties can be accessed within class and its child classes.