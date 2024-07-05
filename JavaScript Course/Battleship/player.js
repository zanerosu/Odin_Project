import { Gameboard } from "./gameboard.js";

export class Player{
    constructor(name){
        this.name = name;
        this.playerBoard = new Gameboard();
    };

}