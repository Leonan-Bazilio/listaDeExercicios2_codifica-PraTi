/*30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
 */

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
const M = generateRandomMatrix(5, 5)
let sumRows = []
let sumColuns = []

for (let i = 0; i < M.length; i++) {
  let sum = 0
  for (let j = 0; j < M[i].length; j++) {
    sum += M[i][j]
    if (sumColuns[j]) {
      sumColuns[j] += M[i][j]
    } else {
      sumColuns[j] = M[i][j]
    }
  }
  sumRows.push(sum)
}

console.log(`Matrix M:`)
console.log(M)
console.log(`The array wich sum of the rows is: ${sumRows}`)
console.log(`The array wich sum of the coluns is: ${sumColuns}`)
