/*23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos. */

function createIdMatrix(size) {
  const matrix = []

  for (let i = 0; i < size; i++) {
    const row = []
    for (let j = 0; j < size; j++) {
      if (i === j) {
        row.push(1)
      } else {
        row.push(0)
      }
    }
    matrix.push(row)
  }
  return matrix
}
const matriz1 = createIdMatrix(7)
for (row of matriz1) {
  console.log(row.join("  "))
}

