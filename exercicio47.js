/* 47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/
const numbers = { a: 1, b: 2, c: 3, d: 37 }

function squareNumbers(objNum) {
  for (keyNum in objNum) {
    objNum[keyNum] = objNum[keyNum] ** 2
  }
  return objNum
}
console.log(squareNumbers(numbers))