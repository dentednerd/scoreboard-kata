function updateScoreboard(board, name) {
  if (name) {
    board[name]++;
  }
  return board;
}

module.exports = updateScoreboard;
