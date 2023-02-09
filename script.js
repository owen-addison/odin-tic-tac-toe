const gameDisplay = document.querySelector("#gameDisplay");

const gameBoard = (() => {
  const array = ["X", "0", "", "0", "0", "X", "0", "X", "X"];
  return { array };
})();

const displayController = (() => {
  const updateDisplay = () => {
    for (let i = 0; i < 9; i++) {
      const div = document.querySelector(`#div${i}`);
      div.textContent = `${gameBoard.array[i]}`;
    }
  };
  return { updateDisplay };
})();

const Game = (() => {
  const initGame = () => {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("div");
      div.setAttribute("id", `div${i}`);
      div.textContent = "";
      gameDisplay.appendChild(div);
    }
  };

  const checkEmpty = (sel) => {
    const div = document.querySelector(`#div${sel}`);
    let check = true;
    if (div.textContent === "") {
      check = true;
    } else if (div.textContent === "X" || div.textContent === "0") {
      check = false;
    }
    return check;
  };

  return { initGame, checkEmpty };
})();

const Player = (name, marker) => {
  const makeMove = () => {
    const move = prompt("Make your move... div#", " ");
    if (Game.checkEmpty(move) === false) {
      alert("Invalid selection! Make another selection");
      makeMove();
    } else if (Game.checkEmpty(move) === true) {
      gameBoard.array[move] = marker;
      displayController.updateDisplay();
    }
  };

  return { name, marker, makeMove };
};

Game.initGame();

const player1 = Player("Player 1", "X");
const player2 = Player("Player 0", "0");

displayController.updateDisplay();

/* PSUEDOCODE
    - Players are assigned markers (either "X" or "0")
    - Player 1 picks a position on gameBoard corresponding to particular div - [Player: makeMove()]
    - Check whether div is empty - [Game: checkEmpty()]
    - If true update gameBoard.array and call displayController.updateDisplay(), if false return error - [Game: handleMove()]
    - Check for winner, if winner end game, if no winner continue game - [Game: checkForWinner()]
    - Prompt next player's selection - [Game: changePlayer()]
*/
