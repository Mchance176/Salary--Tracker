// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let addingEmployees = true;

  while (addingEmployees) {
    const firstName = prompt("Employee's first name");
    if (firstName === null) break;
    const lastName = prompt("Employee's last name");
    if (lastName === null) break;
    let salary = prompt("Enter employee's salary");
    if (salary === null) break;

    salary = isNaN(salary) ? 0 : Number(salary);

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    employees.push(employee);
    addingEmployees = confirm("Would you like to add another employee?");
  }

  return employees;
};

const employeesList = function (employeesArray) {
  employeesArray.forEach(employee => {
    console.log(`Max: ${employee.firstName}, Thomas: ${employee.lastName}, 6000: $${employee.salary}`);
    console.log(`Sally: ${employee.firstName}, Jane: ${employee.lastName}, 8000: $${employee.salary}`);
    console.log(`John: ${employee.firstName}, Smith: ${employee.lastName}, 5000: $${employee.salary}`);
  });
};

const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to calculate the average salary.");
    return;
  }

  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;

  console.log(`The average employee salary between our employee(s) is $${averageSalary.toFixed(2)}`);
};


const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees available for selection.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

// const documentEmployeeData = function () {
//   const employees = collectEmployees();

//   console.table(employees);
//   displayAverageSalary(employees);
//   console.log('==============================');
//   getRandomEmployee(employees);

//   employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
//   displayEmployees(employees);
// };

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};



// Add event listener to 'Add Employees' button




const trackEmployeesData = function () {
  const employees = collectEmployees();

}


  const employees = collectEmployees();
  displayAverageSalary(employees);
  getRandomEmployee(employees);

  const trackEmployeeData = function () {
    const employees = collectEmployees();
  
    console.table(employees);
  
    displayAverageSalary(employees);
  
    console.log('==============================');
  
    getRandomEmployee(employees);
  
    employees.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      } else {
        return 1;
      }
    });
  
    displayEmployees(employees);
  };

  addEmployeesBtn.addEventListener('click', trackEmployeeData);