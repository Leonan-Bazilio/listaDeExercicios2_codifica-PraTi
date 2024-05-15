/*3. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

const prompt = require("prompt-sync")()

const a = prompt("Enter side 1 of the triangle: ")
const b = prompt("Enter side 2 of the triangle: ")
const c = prompt("Enter side 3 of the triangle: ")

if (a < b + c && b < a + c && c < a + b) {
  console.log("It is possible construct a triangle with these 3 values")
} {
  console.log("It is not possible construct a triangle with these 3 values")
}