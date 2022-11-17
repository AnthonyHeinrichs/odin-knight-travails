const buildBoard = () => {
  const board = [];
  // Create all possible square combinations and return as our board
  for (let x = 0; x < 8; x++) {
    board[x] = [];
    for (let y = 0; y < 8; y++) {
      board[x][y] = `[${x + 1}, ${y+ 1}]`;
    }
  }
  return board;
};

const possibleMoves = ([x, y], board = buildBoard()) => {
  for (let i = 0; i < board.length; ++i) {
    // Return the board with only possible moves by a knight through filtering
    board[i] = board[i].filter(
      (move) =>
        move === `[${x - 2}, ${y - 1}]` ||
        move === `[${x - 1}, ${y - 2}]` ||
        move === `[${x + 1}, ${y - 2}]` ||
        move === `[${x + 2}, ${y - 1}]` ||
        move === `[${x + 2}, ${y + 1}]` ||
        move === `[${x + 1}, ${y + 2}]` ||
        move === `[${x - 1}, ${y + 2}]` ||
        move === `[${x - 2}, ${y + 1}]`
    );
  }
  // Concatenate all sub-elements of the array and return it
  board = board.flat();
  return board;
};

export { possibleMoves }