/*5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require("prompt-sync")()

const player1Choice = prompt("Player 1, choose rock, paper, or scissors: ").toLowerCase();
const player2Choice = prompt("Player 2, choose rock, paper, or scissors: ").toLowerCase();

if ((player1Choice === "rock" && player2Choice === "scissors") ||
  (player1Choice === "paper" && player2Choice === "rock") ||
  (player1Choice === "scissors" && player2Choice === "paper")) {
  console.log("Player 1 wins!");
} else if (player1Choice === player2Choice) {
  console.log("There was a draw");
} else {
  console.log("Player 2 wins!");
}