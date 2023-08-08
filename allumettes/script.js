let allumettes = 50;
let playerToPlay = "player 1";

const removeAllumettes = (n) => {
  return n <= 6 ? allumettes - n : null;
};

const gamePlay = (n) => {
  removeAllumettes(n);
  playerToPlay === "player 1"
    ? (playerToPlay = "player 2")
    : (playerToPlay = "player 1");
};

document.getElementById("num-allumettes").innerHTML =
  "number of remaining allumettes " + allumettes;

document.getElementById("player-to-play").innerHTML =
  "Player to play is " + playerToPlay;

let numGuess = document.getElementById("num-remove");

let num2 = 0;

numGuess.onchange = () => (num2 = numGuess.value);

let button = document.getElementById("play-button");

button.onclick = () => gamePlay(num2);
