// define types

interface Employee {
  employeeId: number;
  employeeName: string;
  salary: number;
}

// variable initialization

let collectionOfEmplyee: Employee[] = [
  {
    employeeId: 1,
    employeeName: "Ali",
    salary: 100000,
  },
  {
    employeeId: 2,
    employeeName: "Hamza",
    salary: 200000,
  },
  {
    employeeId: 3,
    employeeName: "fahad",
    salary: 300000,
  },
];

// filtering

let filterById = collectionOfEmplyee.filter(
  (element: Employee) => element.employeeId === 1
);
// console.log(filterById)

let filterByName = collectionOfEmplyee.filter((element: Employee) =>
  element.employeeName.toLocaleUpperCase().includes("fAHad".toLocaleUpperCase())
);
console.log(filterByName);

let filterBySalary = collectionOfEmplyee.filter(
  (element) => element.salary > 150000
);
// console.log(filterBySalary)
