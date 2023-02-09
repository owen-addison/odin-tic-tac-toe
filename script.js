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

const Player = (name, sign) => {
  const sayHello = () => console.log("hello!");
  return { name, sign };
};

Game.initGame();

displayController.updateDisplay();
