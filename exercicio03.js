/*3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

const prompt = require("prompt-sync")()

const distance = prompt("How far do you want to travel?")
let totalPrice
if (distance <= 200) {
  totalPrice = distance * 0.50
} else {
  totalPrice = 200 * 0.50
  totalPrice += (distance - 200) * 0.45
}
console.log(`The total price of the travel will be ${totalPrice.toFixed(2)} reais`)