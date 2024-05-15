/*16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
 */

function generateArrayRandomNumbers(listOfNumber, arraySize) {
  for (i = 0; i < arraySize; i++) {
    listOfNumber.push(Math.floor(Math.random() * 100))
  }
}
const listOfNumber = []
generateArrayRandomNumbers(listOfNumber, 20)
console.log(listOfNumber)
console.log(listOfNumber.sort((a, b) => a - b))

