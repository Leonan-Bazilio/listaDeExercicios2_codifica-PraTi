/*22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00. */

const prompt = require("prompt-sync")()

function inhabitantsData() {
  const listOfPeople = []
  do {
    const salary = parseFloat(prompt("What is your monthly salary? "))
    const children = parseInt(prompt("How many kids do you have? "))
    listOfPeople.push({ salary, children })
    console.log("person add a list")
    const continueOrNot = prompt("do you want add more people?(Yes/No) ").toLowerCase()
    if (continueOrNot !== "yes") {
      return listOfPeople
    }
  } while (true)

}
function avgSalary(listOfPeople) {
  const totalSalary = listOfPeople.reduce((acc, current) => acc + current.salary, 0)
  return totalSalary / listOfPeople.length
}

function avgChildren(listOfPeople) {
  const totalKids = listOfPeople.reduce((acc, current) => acc + current.children, 0)
  return totalKids / listOfPeople.length
}
function maxSalary(listOfPeople) {
  let maxValue

  for (person of listOfPeople) {
    if (maxValue == undefined || person.salary > maxValue) {
      maxValue = person.salary
    }
  }
  return maxValue
}

function lowSalaryPercentage(listOfPeople, limitLowSalary) {
  const totalLowSalary = listOfPeople.reduce((acc, current) => {
    if (current.salary < limitLowSalary) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
  return (100 / listOfPeople.length) * totalLowSalary
}



const listInhabitants = inhabitantsData()
console.log(`
\nThe average salary per person is R$ ${avgSalary(listInhabitants).toFixed(2)}, 
\nThe average number of children per person is ${avgChildren(listInhabitants).toFixed(2)}
\nThe highest salary is R$ ${maxSalary(listInhabitants).toFixed(2)}
\nThe percentage of people with a salary below R$ 350 is ${lowSalaryPercentage(listInhabitants, 350).toFixed(2)}%`)
