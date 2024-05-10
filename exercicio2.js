/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const prompt = require("prompt-sync")()

const speedOfCar = prompt("How fast is car going?")
if (speedOfCar > 80) {
  const valorOfFined = (speedOfCar - 80) * 5
  console.log(`You were fined ${valorOfFined} reais for driving at ${speedOfCar} km/h when the limit was 80 km/h`)
}