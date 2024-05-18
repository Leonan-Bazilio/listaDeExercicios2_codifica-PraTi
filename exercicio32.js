/*32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
 */

function generateRandomMatrix(numRows, numColuns) {
  const Matrix = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numColuns; j++) {
      row.push(Math.floor(Math.random() * 11))
    }
    Matrix.push(row)
  }
  return Matrix
}
const M = generateRandomMatrix(12, 13)
const A = 1
let count = 0

Math.max(...M)


const X = M.map(row => {
  const higherNumber = Math.max(...row)
  return row.map(num => parseFloat((num / higherNumber).toFixed(2)))
})

console.log(`Matrix M:`)
console.log(M)
console.log(`The matrix M without the number ${A} resulted in the matrix X:`)
console.log(X)
