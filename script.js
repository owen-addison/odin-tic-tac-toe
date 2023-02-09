const gameBoard = (() => {
  const array = [];
  return { array };
})();

const playerCreator = (name, sign) => {
  const sayHello = () => console.log("hello!");
  return { name, sign };
};

const flowController = () => {
  const nextTurn = 1;
  return { nextTurn };
};
