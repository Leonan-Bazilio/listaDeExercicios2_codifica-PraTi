/*42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
 */
const leonan = {
  id: 1,
  name: "leonan",
  email: "leonanbaziliodev@gmail.com",
  age: 23,
  hobby: ["animes", "tecnologia", "desenhar", "Manhua"],
  programmingLanguages: ["Javascript", "Node.js", "Html", "Css", "Java"]
}
for (element in leonan) {
  if (Array.isArray(leonan[element])) {
    console.log(leonan[element])
  }
}