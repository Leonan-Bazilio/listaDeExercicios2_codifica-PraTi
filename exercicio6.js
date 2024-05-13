/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
 */

const prompt = require("prompt-sync")()

const luckyNumber = Math.ceil(Math.random() * 5)
console.log(luckyNumber)
let chosenNumber = ""
do {
  chosenNumber = prompt("choose a number: ")
  if (chosenNumber != luckyNumber) {
    console.log("wrong choise, try again")
  } else {
    console.log(`Congratulations, you made the correct choice, the lucky number really was ${luckyNumber}`)
  }
} while (chosenNumber != luckyNumber)