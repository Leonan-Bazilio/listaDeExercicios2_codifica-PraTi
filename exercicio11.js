/*11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência. */
const prompt = require("prompt-sync")()

function calculateArithmeticProgression(firstTerm, ratioAP) {
  let currentTerm = firstTerm
  let sum = 0
  let ArithmeticProgression = []
  for (let i = 1; i <= 10; i++) {
    ArithmeticProgression.push(currentTerm)
    sum += currentTerm
    currentTerm += ratioAP
  }
  console.log(`The first 10 elements of the arithmetic progression are: ${ArithmeticProgression.join(", ")} \nAnd the sum between them is ${sum}`)
}

const firstTerm = parseFloat(prompt("Sected first term of Ap:"))
const ratioAP = parseFloat(prompt("What a ratio of this Ap: "))

calculateArithmeticProgression(firstTerm, ratioAP)

