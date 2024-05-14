/*13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci. */

const prompt = require("prompt-sync")()

function fibonacciSequence(sizeArray) {
  let currentTerm = 1
  let fibonacciSequence = []

  for (let i = 0; i < sizeArray; i++) {
    if (fibonacciSequence.length > 1) {
      currentTerm = currentTerm + fibonacciSequence[i - 2]
    }
    fibonacciSequence.push(currentTerm)
  }
  console.log(`The first ${sizeArray} elements of the Fibonacci sequence are: ${fibonacciSequence.join(", ")}`)
}
fibonacciSequence(15)