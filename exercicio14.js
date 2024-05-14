/*14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */
const prompt = require("prompt-sync")()
const listOfNames = []
for (let i = 1; i <= 7; i++) {
  const firstName = prompt(`What is the name of person ${i}? `)
  listOfNames.push(firstName)
}

console.log(listOfNames.reverse())