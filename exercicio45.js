/*45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

const animes = ["Summer time rendenring", "Summer time rendenring", "Summer time rendenring", "Bocchi the rock", "Bocchi the rock", "Hunter X Hunter"]
const qteAnimes = {}

for (element of animes) {
  element in qteAnimes ? qteAnimes[element]++ : qteAnimes[element] = 1
}
console.log(qteAnimes)

