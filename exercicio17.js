/*17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
 */
const prompt = require("prompt-sync")()
function personalData() {
  const namePerson = [];
  const ages = [];

  for (let i = 0; i < 9; i++) {
    const nome = prompt(`insert the name of person ${i + 1} :`);
    const idade = parseInt(prompt(`insert the age of person ${nome}:`));
    namePerson.push(nome);
    ages.push(idade);
  }
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
      console.log(`\nname: ${namePerson[i]}, Age: ${ages[i]}`);
    }
  }

}

personalData()


