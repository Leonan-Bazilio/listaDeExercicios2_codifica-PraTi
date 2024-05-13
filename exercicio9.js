/*9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
 */

const prompt = require('prompt-sync')()

let totalSalaryMale = 0
let totalSalaryFemale = 0

while (true) {
  const salary = parseFloat(prompt("Enter the employee's salary:  "))
  const gender = prompt("Enter the gender of the employee (M for male, F for female): ").toLocaleUpperCase()
  if (gender === 'M') {
    totalSalaryMale += salary
    console.log(totalSalaryMale)
  } else if (gender === 'F') {
    totalSalaryFemale += salary
  }
  const continueInput = prompt("Want to add a new employee? (yes/no) ").toLowerCase()
  if (continueInput === "no") {
    break
  }
}
console.log(`Total salary paid to males is R$ ${totalSalaryMale.toFixed(2)}`)
console.log(`Total salary paid to females is R$ ${totalSalaryFemale.toFixed(2)}`)
