// create a 3x3 grid
  // get board
  // insert divs into board
  // make grid visible

  function TicTacToe() {
    this.board = $('.board');
    this.size = 9;
    this.player = true;

    var ttt = this;
    for(var i = 0; i < this.size; i++) {
      var square = $('<div class="square"><div class="xo"></div></div>');
      //square.attr('id', i);
      square.appendTo(this.board);
      square.on('click', function() {
        ttt.playGame(this);
      });
    }
  }

  // on click, add a character to the grid, x or o
    // click also changes color of cell
    // click freezes cell so it can't be clicked again
  TicTacToe.prototype.playGame = function (square) {
    if(this.player) {
      this.makeAMark('X', square);
    }
    else {
      this.makeAMark('O', square);
    }

  };

  TicTacToe.prototype.makeAMark = function (player, position) {
    var xo = $(position).children();
    $(xo).html(player);
    this.player = !this.player;
    $(position).unbind('click');

  };

  // after each click, the character switches, x -> o, o -> x

  // reset button to clear board and restart game

var game = new TicTacToe();






// reset button to clear board and restart game
