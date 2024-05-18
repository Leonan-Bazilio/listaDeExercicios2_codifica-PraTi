/*29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
 */

function generateRandomMatrix(numRows, numColuns) {
  const Matrix = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numColuns; j++) {
      row.push(Math.floor(Math.random() * 101) - 50)
    }
    Matrix.push(row)
  }
  return Matrix
}
const M = generateRandomMatrix(5, 5)
let sum = 0
let sumRow4 = 0
let sumColun2 = 0
let sumDiagonal = 0

for (let i = 0; i < M.length; i++) {
  for (let j = 0; j < M[i].length; j++) {
    sum += M[i][j]
    if (i === 3) {
      sumRow4 += M[i][j]
    }
    if (j === 1) {
      sumColun2 += M[i][j]
    }
    if (i === j) {
      sumDiagonal += M[i][j]
    }
  }
}

console.log(`Matrix M:`)
console.log(M)
console.log(`The sum of row 4 of the Matrix is: ${sumRow4}`)
console.log(`The sum of colun 2 of the Matrix is: ${sumColun2}`)
console.log(`The sum of diagonal of the Matrix is: ${sumDiagonal}`)
console.log(`The sum of all numbers of the Matrix is: ${sum}`)
