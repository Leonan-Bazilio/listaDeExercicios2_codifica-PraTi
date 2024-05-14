/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

const prompt = require("prompt-sync")()
const listOfNumber = []
for (let i = 1; i <= 10; i++) {
  const eachNumber = parseFloat(prompt(`What is ${i} number? `))
  listOfNumber.push(eachNumber)
}
console.log("Evens numbers and their respective positions are:\n")
for (let j = 0; j < 10; j++) {
  if (listOfNumber[j] % 2 === 0) {
    console.log(`Number: ${listOfNumber[j]} in position: ${j}`)
  }
}