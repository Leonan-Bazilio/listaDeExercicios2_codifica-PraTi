/*24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M. */

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
const M = generateRandomMatrix(6, 8)
console.log(M)
const C = []

for (let i = 0; i < M.length; i++) {
  let countOfNegative = 0
  for (let j = 0; j < M[i].length; j++) {
    if (M[i][j] < 0) {
      countOfNegative++
    }
  }
  C.push(countOfNegative)
}

console.log(`Matrix M:`)
for (row of M) {
  console.log(row.join(", "))
}
console.log(`Array C:\n${C}`)