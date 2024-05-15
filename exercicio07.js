/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */


const prompt = require('prompt-sync')()
const carType = prompt("what type of car do you want a rent? (popular or luxury) ").toLowerCase()
const rentalDays = parseInt(prompt("How many days? "))
const kmTraveled = parseFloat(prompt("Enter the number of Kilometer traveled: "))
const popularCarPricePerDay = 90
const luxuryCarPricePerDay = 150

let rentalCost = 0
if (carType === "popular") {
  rentalCost += popularCarPricePerDay * rentalDays
} else if (carType === "luxury") {
  rentalCost += luxuryCarPricePerDay * rentalDays
}

if (carType === "popular") {
  if (kmTraveled <= 100) {
    rentalCost += kmTraveled * 0.20
  } else {
    rentalCost += 100 * 0.20
    rentalCost += (kmTraveled - 100) * 0.10
  }
} else if (carType === "luxury") {
  if (kmTraveled <= 200) {
    rentalCost += kmTraveled * 0.30
  } else {
    rentalCost += 200 * 0.30
    rentalCost += (kmTraveled - 200) * 0.25
  }
}
console.log(`The total price is: R$ ${rentalCost.toFixed(2)}`)
