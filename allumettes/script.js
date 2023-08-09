let allumettes = 50;
let playerToPlay = "player 1";

let numGuess = document.getElementById("num-remove");

let num2 = 0;

numGuess.onchange = () => (num2 = numGuess.value);

let button = document.getElementById("play-button");

const removeAllumettes = (n) => {
  return n <= 6 ? (allumettes = allumettes - n) : null;
};

const displayLive = () => {
  document.getElementById("num-allumettes").innerHTML =
    "number of remaining allumettes " + allumettes;

  document.getElementById("player-to-play").innerHTML =
    "Player to play is " + playerToPlay;
};
displayLive();

const gamePlay = (n) => {
  removeAllumettes(n);
  if (allumettes > 0) {
    playerToPlay === "player 1"
      ? (playerToPlay = "player 2")
      : (playerToPlay = "player 1");
    displayLive();
    numGuess.value = 1;
    num2 = 1;
  } else {
    document.getElementById("num-allumettes").innerHTML =
      playerToPlay + " wins!!";
  }
};

button.onclick = () => gamePlay(num2);
