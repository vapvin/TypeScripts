// TYPE SCRIPT
function createBoard() {
  var cells = [];
  for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 3; col++) {
      cells.push({
        row: row,
        col: col
      });
    }
  }
  return cells;
}
var board = createBoard();
board[0].piece = {
  move: function(from, to) {
    return true;
  }
};

class Tv {
  constructor(remote, btn, number) {
    this.remote = remote;
    this.btn = btn;
    this.number = number;
  }
}

const gal = new Tv("내것", "니것", 97);

console.log(gal);
