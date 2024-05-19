/*35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

function generateRandomArray(size) {
  const randomArray = []
  for (let j = 0; j < size; j++) {
    randomArray.push(Math.floor(Math.random() * 11))
  }
  return randomArray
}
const randomArray = generateRandomArray(30)


let even = []
let odd = []

randomArray.map((num) => {
  if (num % 2 === 0) {
    even.push(num)
    if (even.length === 5) {
      console.log(`Array even: ${even}`)
      even = []
    }
  } else {
    odd.push(num)
    if (odd.length === 5) {
      console.log(`Array odd: ${odd}`)
      odd = []
    }
  }
}
)

if (even.length > 0) {
  console.log(`Last array even: ${even}`)
}

if (odd.length > 0) {
  console.log(`Last array odd: ${odd}`)
}
