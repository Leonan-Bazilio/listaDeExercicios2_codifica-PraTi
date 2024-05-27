/*44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
 */
const leonan = {
  id: 1,
  name: "leonan",
  email: "leonanbaziliodev@gmail.com",
  age: 23,
  hobby: ["animes", "tecnologia", "desenhar", "Manhua"],
  programmingLanguages: ["Javascript", "Node.js", "Html", "Css", "Java"]
}


function qteString(obj) {
  let count = 0
  for (element in obj) {
    if (typeof (obj[element]) == "string") {
      count++
    }
  }
  return count
}

console.log(`There are ${qteString(leonan)} string in this object`)
