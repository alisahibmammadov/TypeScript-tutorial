type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privilages: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add(2, 5);
const result2 = add("Schwraz", "Max");
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name:", emp.name);
  if ("privilages" in emp) {
    console.log("Privilages:", emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("Start Date:", emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving Car...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo:" + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input")!
);

userInputElement.value;
