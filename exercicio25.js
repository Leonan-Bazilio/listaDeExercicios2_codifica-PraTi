/*25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente. */

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
const M = generateRandomMatrix(15, 20)
const arraySum = []

for (let i = 0; i < M.length; i++) {
  let sum = 0
  for (let j = 0; j < M[i].length; j++) {
    sum += M[i][j]
  }
  arraySum.push(sum)
}

console.log(`Matrix M:`)
for (row of M) {
  console.log(row.join(", "))
}
for (nRow in M) {
  console.log(`the sum of coluns ${nRow + 1} is ${arraySum[nRow]}`)
}