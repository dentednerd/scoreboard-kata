function scoreboard(board, name) {
  if (name) {
    board[name]++;
  }
  return board;
}

module.exports = scoreboard;
