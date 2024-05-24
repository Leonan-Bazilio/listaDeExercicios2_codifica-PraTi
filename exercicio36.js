/*36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
 */

function generateLotteryNumbers(size) {
  const lotteryNumbers = []
  while (lotteryNumbers.length < size) {
    let num = Math.ceil(Math.random() * 60)
    if (!lotteryNumbers.includes(num)) {
      lotteryNumbers.push(num)
    }
  }
  return lotteryNumbers
}
const lotteryNumbers = generateLotteryNumbers(13)
console.log(`The lucky numbers are: \n${lotteryNumbers}`)

let winners = []

for (let i = 1; i <= 100; i++) {
  const bet = generateLotteryNumbers(13)
  const matches = bet.filter(num => lotteryNumbers.includes(num))
  console.log(`Bettor ${i} you matched ${matches.length} numbers (${matches})`)
  if (matches.length == 13) {
    console.log("Congratulations you are the winner")
    winners.push(i)
  }
}


if (winners.length > 0) {
  console.log(`\n\nThe players who won were the numbers: ${winners}`)
} else {
  console.log(`\n\nThis time no one wins`)
}


