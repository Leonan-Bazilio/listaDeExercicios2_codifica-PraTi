/*34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações. */

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
const X = []

for (let i = 0; i < M.length; i++) {
  let row = []
  for (let j = 0; j < M[i].length; j++) {
    row.push(M[i][j] * M[i][i])
  }
  X.push(row)
}

console.log(`Matrix M:`)
console.log(M)
console.log(`The elements of each row of matrix M multiplied by the element of the main diagonal of that respective row result in: `)
console.log(X)