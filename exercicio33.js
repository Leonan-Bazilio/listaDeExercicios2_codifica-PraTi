/*33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária. */


function generateRandomMatrix(numRows, numColuns) {
  const matrix = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numColuns; j++) {
      row.push(Math.floor(Math.random() * 11))
    }
    matrix.push(row)
  }
  return matrix
}
const M = generateRandomMatrix(3, 3)


function generateAvgSecondaryDiagonal(matrix) {
  let smallNumber = 0
  let highNumber = M.length
  let sum = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i == smallNumber && j == highNumber - 1) {
        sum += matrix[i][j]
        smallNumber++
        highNumber--
      }
    }
  }
  return parseFloat((sum / matrix.length).toFixed(2))

}

const X = M.map((row, i) => row.map((num, j) =>
  i === j ? M[i][j] * generateAvgSecondaryDiagonal(M) : M[i][j]
))

console.log(`Matrix M:`)
console.log(M)
console.log(`The main diagonal of matrix M multiplied by the average of the secondary diagonal of matrix M results in: `)
console.log(X)
