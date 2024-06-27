import { Ship } from "./ship";

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

      for (let i = 0; i < ship.length; i++) {
        this.board[row][col + i] = ship;
      }
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

      for (let i = 0; i < ship.length; i++) {
        this.board[row + i][col] = ship;
      }
    } else{
        return "Invalid Orientation!"
    }
  }

  receieveAttack() {}
}
