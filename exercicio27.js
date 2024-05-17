/*27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final. */

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
const M = generateRandomMatrix(6, 6)
const A = 2
const V = []

for (let i = 0; i < M.length; i++) {
  for (let j = 0; j < M[i].length; j++) {
    V.push(M[i][j] * A)
  }
}

console.log(`Matrix M:`)
console.log(M)
console.log(`Array V:`)
console.log(V)