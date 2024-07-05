import { playerOne, playerTwo, createDefault } from "./gameDriver.js";
import { displayBoard, displayOppBoard } from "./DOMManip.js";

createDefault();

displayBoard(playerOne);
displayOppBoard(playerTwo);

