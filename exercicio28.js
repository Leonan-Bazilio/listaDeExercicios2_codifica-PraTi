/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

function generateRandomMatrix(numRows, numColuns) {
  const matrix = []
  for (let i = 0; i < numRows; i++) {
    const row = []
    for (let j = 0; j < numColuns; j++) {
      row.push(Math.floor(Math.random() * 10))
    }
    matrix.push(row)
  }
  return matrix
}
const M = generateRandomMatrix(10, 10)
let numbersAbove = ""
let sumAbove = 0
let numbersBelow = ""
let sumBelow = 0


for (let i = 0; i < M.length; i++) {
  for (let j = 0; j < M[i].length; j++) {
    if (j < i) {
      numbersBelow += `${M[i][j]} `
      sumBelow += M[i][j]
    } else if (j > i) {
      sumAbove += M[i][j]
      numbersAbove += `${M[i][j]} `
    }
  }
}

console.log(`Matrix M:`)
for (row of M) {
  console.log(row.join("  "))
}

numbersAbove = numbersAbove.trim().replaceAll(" ", " + ")
numbersBelow = numbersBelow.trim().replaceAll(" ", " + ")


console.log(`The sum of the numbers above the main diagonal:\n${numbersAbove} \nResults in: ${sumAbove}`)
console.log(`The sum of the numbers below the main diagonal:\n${numbersBelow} \nResults in: ${sumBelow}`)