const gameDisplay = document.querySelector("#gameDisplay");

const gameBoard = (() => {
  const array = ["X", "0", "X", "0", "0", "X", "0", "X", "X"];
  return { array };
})();

const playerCreator = (name, sign) => {
  const sayHello = () => console.log("hello!");
  return { name, sign };
};

const gameController = () => {
  const initGame = () => {
    // Create a div for each section of the board (9 total)
    for (let i = 0; i < 9; i++) {
      const div = document.createElement("div");
      div.setAttribute("id", `div${i}`);
      div.textContent = `${gameBoard.array[i]}`;
      gameDisplay.appendChild(div);
    }
  };

  const nextTurn = 1;
  return { initGame, nextTurn };
};

const game = gameController();

game.initGame();
