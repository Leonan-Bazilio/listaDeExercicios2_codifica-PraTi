/*21. Faça uma função que recebe, por parâmetro, a altura (alt) e o gendero de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
 */
const prompt = require("prompt-sync")()

function calculateIdealWeight(height, gender) {
  height = parseFloat(prompt("what is your height in meters?(ex: 1.78) "))
  gender = prompt("what is your gender?(M for Male or F for Female) ").toUpperCase()
  let idealWeight;
  if (gender === "M") {
    idealWeight = 72.7 * height - 58
  } else if (gender === "F") {
    idealWeight = 62.1 * height - 44.7
  } else {
    console.log("invalid value")
    return
  }
  console.log(`your ideal weight is: ${idealWeight}`)
}
calculateIdealWeight()
