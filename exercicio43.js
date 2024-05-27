/*43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
 */
const obj1 = {
  id: 1,
  name: "leonan",
  email: "aaaaaaaaaaaaaaaa",
  hobby: ["animes", "tecnologia", "desenhar", "Manhua"],
}
const obj2 = {
  name: "Leonan Bazilio",
  email: "leonanbaziliodev@gmail.com",
  age: 23,
  programmingLanguages: ["Javascript", "Node.js", "Html", "Css", "Java"]
}
const leonan = { ...obj1, ...obj2 }
console.log(leonan)