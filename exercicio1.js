/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/
const prompt = require("prompt-sync")()

const cigarettesPerDay = prompt("How many cigarettes do you smoke per day?")
const yearsOfSmoke = prompt("How many years have you been smoking?")

const numberOfCigarettes = cigarettesPerDay * (yearsOfSmoke * 365 + (Math.floor(yearsOfSmoke / 4)))
const yearsLost = numberOfCigarettes * 10 / (24 * 60)
console.log(`You lost ${yearsLost.toFixed(0)} days of your life because of smoking`)



