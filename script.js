const gameDisplay = document.querySelector("#gameDisplay");

const gameBoard = (() => {
  const array = ["X", "0", "X", "0", "0", "X", "0", "X", "X"];
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
      div.textContent = " ";
      gameDisplay.appendChild(div);
    }
  };

  const nextTurn = 1;
  return { initGame, nextTurn };
})();

const Player = (name, marker) => {
  const sayHello = () => console.log("hello!");
  return { name, marker };
};

Game.initGame();

displayController.updateDisplay();

/* PSUEDOCODE
    - Players are assigned markers (either "X" or "0")
    - Player 1 picks a position on gameBoard corresponding to particular div - [Player: makeMove()]
    - Check whether div is empty - [Game: checkEmpty()]
    - If true update gameBoard.array and call displayController.updateDisplay(), if false return error - [Game: handleMove()]
    - Check for winner, if winner end game, if no winner continue game - [Game: checkForWinner()]
    - Prompt next player's selection - [Game: changePlayer()]
*/
