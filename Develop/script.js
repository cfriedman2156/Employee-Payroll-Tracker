// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// TODO: Get user input to create and return an array of employee objects
// Collect employee data
const employeeArray = [];

const collectEmployees = function() {
  
  let firstName = prompt("Enter a first name:")
  let lastName = prompt("Enter a last name:")
  let salary = prompt("Enter a salary:")
  
  if (isNaN(salary)) {
    salary = 0;
  }

  salary = parseInt(salary);

  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  }
  
  employeeArray.push(employee);

  let keepGoing = confirm("Would you like to add another employee?")
  if (keepGoing) {
    collectEmployees()
  }
  
  return employeeArray;
}

console.log(employeeArray);

// Display the average salary
// TODO: Calculate and display the average salary
const displayAverageSalary = function(employeesArray) {
  
  let totalSalary = 0;
  for (let i = 0; i < employeeArray.length; i++) {
    totalSalary += employeeArray[i].salary;
  }

  let avSalary = totalSalary / employeeArray.length;
  avSalary = avSalary.toFixed(2);
  
  console.log(`The Average salary between our ${employeeArray.length} employee(s) is $${avSalary}`)
}

// Select a random employee
// TODO: Select and display a random employee
const getRandomEmployee = function(employeesArray) {
  let randomNumber = Math.floor(Math.random() * employeeArray.length)
  let randomEmployeeFirst = employeeArray[randomNumber].firstName;
  let randomEmployeeLast = employeeArray[randomNumber].lastName;
  let randomEmployee = randomEmployeeFirst + " " + randomEmployeeLast
  
  console.log(`Today's victim of working the night shift is ${randomEmployee}!!!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
