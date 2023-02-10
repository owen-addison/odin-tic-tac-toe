const X_CLASS = "x";
const CIRC_CLASS = "circle";
const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winMessage = document.getElementById("winningMessage");
const winText = document.querySelector("[data-winning-message-text]");
const restartButton = document.getElementById("restartButton");
let circTurn;

const Game = (() => {
  const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass);
  };

  const swapTurns = () => {
    circTurn = !circTurn;
  };

  const setBoardHoverClass = () => {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRC_CLASS);
    if (circTurn) {
      board.classList.add(CIRC_CLASS);
    } else {
      board.classList.add(X_CLASS);
    }
  };

  const endGame = (draw) => {
    if (draw) {
      winText.innerText = "Draw!";
    } else {
      winText.innerText = `${circTurn ? "0s" : "Xs"} Wins!`;
    }
    winMessage.classList.add("show");
  };

  const isDraw = () =>
    [...cellElements].every(
      (cell) =>
        cell.classList.contains(X_CLASS) || cell.classList.contains(CIRC_CLASS)
    );

  const checkWin = (currentClass) =>
    WIN_COMBOS.some((combination) =>
      combination.every((index) =>
        cellElements[index].classList.contains(currentClass)
      )
    );

  const handleMove = (e) => {
    const cell = e.target;
    const currentClass = circTurn ? CIRC_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
      endGame(false);
    } else if (isDraw()) {
      endGame(true);
    } else {
      swapTurns();
      setBoardHoverClass();
    }
  };

  const startGame = () => {
    circTurn = false;
    cellElements.forEach((cell) => {
      cell.classList.remove(X_CLASS);
      cell.classList.remove(CIRC_CLASS);
      cell.removeEventListener("click", handleMove);
      cell.addEventListener("click", handleMove, { once: true });
    });
    setBoardHoverClass();
    winMessage.classList.remove("show");
  };

  startGame();

  restartButton.addEventListener("click", (e) => {
    e.stopPropagation();
    startGame();
  });
})();

const Player = (name, marker) => ({ name, marker });

const player1 = Player("Player 1", X_CLASS);
const player2 = Player("Player 2", CIRC_CLASS);
