/*19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
 */

const prompt = require("prompt-sync")()
function validateTime() {
  let time = prompt("Enter a time (HH:MM:SS):")
  const timeParts = time.split(":")
  if (timeParts.length !== 3) {
    return false
  }
  const hours = parseInt(timeParts[0])
  const minutes = parseInt(timeParts[1])
  const seconds = parseInt(timeParts[2])

  if (isNaN(hours) || hours < 0 || hours > 23
    || isNaN(minutes) || minutes < 0 || minutes > 59
    || isNaN(seconds) || seconds < 0 || seconds > 59) {
    console.log("invalid value or does not meet the requirement")
    return false
  }
  return `${hours}:${minutes}:${seconds}`
}
let arrayDate = []
for (let i = 0; i < 2; i++) {
  arrayDate.push(validateTime())
}
console.log(arrayDate)