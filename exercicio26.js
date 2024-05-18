/*26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/

function generateRandomMatrix(numRows, numColuns) {
  const matrix = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numColuns; j++) {
      row.push(Math.floor(Math.random() * 101) - 50)
    }
    matrix.push(row)
  }
  return matrix
}
const A = generateRandomMatrix(3, 5)
const B = generateRandomMatrix(3, 5)
const arrayMultiplicatiom = []

for (let i = 0; i < A.length; i++) {
  const row = []
  for (let j = 0; j < A[i].length; j++) {
    row.push(A[i][j] * B[i][j])
  }
  arrayMultiplicatiom.push(row)
}

console.log(`Matrix A:`)
console.log(A)
console.log(`Matrix B:`)
console.log(B)
console.log(`multiplication of A and B: `)
console.log(arrayMultiplicatiom)