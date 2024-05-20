/*36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
 */

function generateLotteryNumbers(size) {
  const lotteryNumbers = []
  for (let j = 0; j < size; j++) {
    while (true) {
      //fiz essa parte para os numeros não se repetirem ja que é um "numero de loteria"
      let num = Math.ceil(Math.random() * 60)
      if (!lotteryNumbers.includes(num)) {
        lotteryNumbers.push(num)
        lotteryNumbers.sort((a, b) => a - b)
        break
      }
    }
  }
  return lotteryNumbers
}
const lotteryNumbers = generateLotteryNumbers(13)
console.log(`The lucky numbers are: \n${lotteryNumbers}`)

let winners = []


if (winners.length > 0) {
  console.log(`\n\nThe players who won were the numbers: ${winners}`)
} else {
  console.log(`\n\nThis time no one wins`)
}


