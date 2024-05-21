/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor. */


function generateRandomArray(size) {
  const randomArray = []
  for (let j = 0; j < size; j++) {
    randomArray.push(Math.floor(Math.random() * 11))
  }
  return randomArray
}
const randomArray = generateRandomArray(6)

function sumOfElements(randomArray) {
  return randomArray.reduce((acc, current) => acc + current)
}
function multiplicationOfElements(randomArray) {
  let multiplication = 1
  randomArray.map(num => multiplication *= num)
  return multiplication
}
function avgOfElements(randomArray) {
  let sum = randomArray.reduce((acc, current) => acc + current)
  return sum / randomArray.length
}

function ascendingOrder(randomArray) {
  const copiedRandomArray = randomArray.slice()
  return copiedRandomArray.sort((a, b) => a - b)
}

console.log(`${randomArray}, \nSum of elements: ${sumOfElements(randomArray)}, 
\nMultiplication of elements: ${multiplicationOfElements(randomArray)}, 
\nAverage of elements: ${avgOfElements(randomArray).toFixed(2)}, 
\nElements ordered in ascending order: ${ascendingOrder(randomArray)}, 
\n${randomArray}`)