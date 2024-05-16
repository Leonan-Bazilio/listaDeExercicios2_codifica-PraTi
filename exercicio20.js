/*20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS). */
const prompt = require("prompt-sync")(0)
let employees = []
function registerEmployee() {
  const employee = {}
  employee.registration = prompt("Enter a registration number: ")
  employee.nameEmployee = prompt("Enter a name: ")
  employee.grossSalary = prompt("Enter a gross salary: ")
  employee.inssRate = parseFloat(prompt("Enter a INSS rate: "))
  employee.netSalaly = employee.grossSalary - ((employee.grossSalary * employee.inssRate / 100)).toFixed(2)
  employees.push(employee)
}
function showEmployees() {
  for (employee of employees) {
    console.log(`
  Registration: ${employee.registration}
  Name: ${employee.nameemployee}
  Gross salary: R$ ${employee.grossSalary}
  INSS rate: ${employee.inssRate}
  Net salary: R$ ${employee.netSalaly}`)
  }
}
registerEmployee()
showEmployees()





