/* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
 */

const prompt = require('prompt-sync')()
let sum = 0
let lowerValue
let numberOfValues = 0
let numberOfEvens = 0



do {
  const currentNumber = parseInt(prompt("Which number whould you like to add? "))
  sum += currentNumber
  if (lowerValue > currentNumber || lowerValue == undefined) {
    lowerValue = currentNumber
  }
  numberOfValues++
  if (currentNumber % 2 === 0 && currentNumber !== 0) {
    numberOfEvens++
  }

  const continueAddNumber = prompt("Do you want to continue?(yes/no): ").toLowerCase()
  if (continueAddNumber === "no") {
    break
  }
} while (true)
console.log(`The sum of all numbers is: ${sum}\n The smallest number is: ${lowerValue}\n The average of the numbers is: ${(sum / numberOfValues).toFixed(2)}\n The number of evens is: ${numberOfEvens}`)
