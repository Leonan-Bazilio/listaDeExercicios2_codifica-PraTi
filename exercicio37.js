/*37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

function generateRandomAnswers(size, options) {
  const answers = []
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * options.length)
    answers.push(options[randomIndex])
  }
  return answers;
}
const testAnswer = generateRandomAnswers(20, ["A", "B"])
console.log(testAnswer)

const approvedList = []
const disapprovedList = []

for (let i = 1; i <= 50; i++) {
  const studentAnswers = generateRandomAnswers(20, ["A", "B"])
  const matchCount = testAnswer.reduce((acc, current, index) => {
    return current === studentAnswers[index] ? acc + 1 : acc
  }, 0)
  if (matchCount >= 12) {
    console.log(`Congratulations student ${i}, you scored ${matchCount} and passed`)
    approvedList.push(i)
  } else {
    console.log(`study more student ${i}, you only scored ${matchCount} and failed`)
    disapprovedList.push(i)
  }
}

console.log(`
\nApproved list \n${approvedList}
\nDisapproved list \n${disapprovedList}`)