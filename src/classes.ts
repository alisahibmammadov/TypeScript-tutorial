class Department {
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {}
  describe(this: Department) {
    console.log(`Department: ${this.name}, Id: ${this.id}`);
  }
  addEmpoyee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReports: string;
  get mostReportsRecent() {
    if (this.lastReports) {
      return this.lastReports;
    } else {
      throw Error("No reports found.");
    }
  }
  set mostReportsRecent(value: string) {
    if (!value) {
      throw Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReports = reports[0];
  }

  addEmpoyee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReports = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const it = new ItDepartment("d1", ["Max"]);
it.describe();
it.addEmpoyee("Max");
it.addEmpoyee("Manu");
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("d2", []);
accounting.mostReportsRecent = "Alisahib"
accounting.addReport("Something went wrong...");
console.log(accounting.mostReportsRecent);
accounting.addEmpoyee("Max");
accounting.addEmpoyee("Manu");
accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "Alisahib", describe: accounting.describe };
// accountingCopy.describe();
