import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";

const ship1 = new Ship(3);
const ship2 = new Ship(3);
const ship3 = new Ship(3);
const gameboard = new Gameboard();
gameboard.placeShip(0, 0, ship1, "vertical")

gameboard.placeShip(0, 5, ship2, "horizontal")

gameboard.placeShip(3, 5, ship3, "horizontal")

console.log(gameboard.board)

console.log(gameboard.recieveAttack(1, 1));
console.log(gameboard.recieveAttack(0, 1));
console.log(gameboard.recieveAttack(0, 0));
console.log(gameboard.recieveAttack(1, 0));
console.log(gameboard.recieveAttack(2, 0));
console.log(gameboard.ships)
