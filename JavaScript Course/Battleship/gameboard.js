export class Gameboard {
  constructor() {
    this.board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    this.ships = [];
    this.allSunk = false; 
  }

  placeShip(row, col, ship, direction) {
    //Check if the column is in bounds.
    if (row >= this.board.length && col >= this.board[0].length) {
      return "Invalid Position!";
    }

    if (direction === "horizontal") {
      //Check horizontal bounds
      if (col + ship.length > 10) {
        return "Ship exceeds horizontal bounds!";
      }

      //Check if ship would ever overlap with another ship
      for (let i = 0; i < ship.length; i++) {
        if (this.board[row][col + i] !== 0) {
          return "Overlap detected!";
        }
      }

      //Insert horizontal ship to board
      for (let i = 0; i < ship.length; i++) {
        this.board[row][col + i] = ship;
      }
      this.ships.push(ship);

    } else if (direction === "vertical") {
      //Check vertical bounds
      if (row + ship.length - 1 >= this.board.length) {
        return "Ship exceeds vertical bounds!";
      }

      for (let i = 0; i < ship.length; i++) {
        if (this.board[row + i][col] !== 0) {
          return "Overlap detected!";
        }
      }
      //Insert vertical ship to board
      for (let i = 0; i < ship.length; i++) {
        this.board[row + i][col] = ship;
      }

      this.ships.push(ship)

    } else{
        return "Invalid Orientation!"
    }
  }

  recieveAttack(row, col) {
      //Check if attack is out of bounds
      if (row > 10 || col > 10){
        return 'Attack out of bounds!'
      }

      //Attack will be invalid if it is where a previous shot landed
      if (this.board[row][col] === 'O' || this.board[row][col] === "X"){
        return "Shot already taken at these coordinates!"
      }

      //Attack will miss if it hits empty space
      if (this.board[row][col] === 0){
        this.board[row][col] = 'O';
        return "Miss!"
      }

      //Attack hits ship and triggers ship's hit method
      else{
        this.board[row][col].hit();
        this.board[row][col] = 'X'
        this.allSunk = this.checkAllSunk();
        if(this.allSunk === true){
          return "Game Over!"
        }
        return "Hit!"
      }
  }

  checkAllSunk(){
    for (let ship of this.ships){
      //If any ship is still standing immediately return false
      if (ship.sunk === false){
        return false;
      }
    }
    //All ships have been sunk
    return true;
  }
}
