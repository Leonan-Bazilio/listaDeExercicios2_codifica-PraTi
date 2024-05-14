/*12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
 */

const prompt = require("prompt-sync")()

function fibonacciSequence() {
  let currentTerm = 1
  let fibonacciSequence = []

  for (let i = 0; i < 10; i++) {
    if (fibonacciSequence.length > 1) {
      currentTerm = currentTerm + fibonacciSequence[i - 2]
    }
    fibonacciSequence.push(currentTerm)
  }
  console.log(`The first 10 elements of the Fibonacci sequence are: ${fibonacciSequence.join(", ")}`)
}
fibonacciSequence()
