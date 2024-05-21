/*39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
 */

function generateRandomArray(size) {
  const randomArray = []
  for (let j = 0; j < size; j++) {
    randomArray.push(Math.floor(Math.random() * 11) - 5)
  }
  return randomArray
}
const A = generateRandomArray(100)
console.log("Full array:")
console.log(A, A.length)
const B = A.filter(num => num > 0)
console.log("Compressed array (without negative and null numbers):")
console.log(B, B.length)