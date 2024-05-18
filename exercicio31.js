/*31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. */

function generateRandomMatrix(numRows, numColuns) {
  const matrix = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numColuns; j++) {
      row.push(Math.floor(Math.random() * 3))
    }
    matrix.push(row)
  }
  return matrix
}
const M = generateRandomMatrix(30, 30)
const A = 1
let count = 0

const X = M.map(row => row.filter(num => {
  if (num === A) count++
  return num !== A
})
)

console.log(`Matrix M:`)
console.log(M)
console.log(`The matrix M without the number ${A} resulted in the matrix X:`)
console.log(X)
