/*40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

function generateLotteryNumbers(size) {
  const lotteryNumbers = []
  for (let j = 0; j < size; j++) {
    while (lotteryNumbers.length < size) {
      let num = Math.ceil(Math.random() * 60)
      if (!lotteryNumbers.includes(num)) {
        lotteryNumbers.push(num)
      }
    }
  }
  return lotteryNumbers.sort((a, b) => a - b)
}

const resultLoto = generateLotteryNumbers(6)
console.log(`Numbers of lotery: \n\n${resultLoto} \n\n`)

for (let i = 1; i <= 50; i++) {
  const bet = generateLotteryNumbers(6)
  const isWinner = bet.every(num => resultLoto.includes(num))
  isWinner ? console.log(`Winner: player ${i}`) : console.log(`You didn't win this time player ${i}`)
}