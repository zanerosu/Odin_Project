import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

export class Player{
    constructor(name){
        this.name = name;
        this.playerBoard = new Gameboard();
        this.Cruiser = new Ship(2);
        this.Submarine = new Ship(3);
        this.Destroyer = new Ship(3);
        this.Battleship = new Ship(4);
        this.Carrier = new Ship(5);
    };

}