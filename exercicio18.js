/*18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */
const prompt = require("prompt-sync")()
const listOfEmployees = []
function registerEmployees() {
  const employee = {}
  employee.name = prompt("Enter the employee's name:")
  employee.position = prompt("Enter the employee's position:")
  employee.salary = parseFloat(prompt("Enter the employee's salary:"))

  console.log(`\nEmployee record:\nName: ${employee.name}\nPosition: ${employee.position}\nSalary: $ ${employee.salary.toFixed(2)}`)
  return employee
}
listOfEmployees.push(registerEmployees())
console.log(listOfEmployees)

