import { Player } from "./player.js";
import { Ship } from "./ship.js";
import { displayBoard, displayOppBoard, displayCurrTurn } from "./DOMManip.js";

//Create default players with auto filled boards.
export const playerOne = new Player("P1");
export const playerTwo = new Player("P2");

export function runGame(){
    let currPlayer = playerOne;
    let oppPlayer = playerTwo;

    function switchTurn(){
        const temp = currPlayer;
        currPlayer = oppPlayer;
        oppPlayer = temp; 

        displayCurrTurn(currPlayer);
        displayBoard(currPlayer);
        displayOppBoard(oppPlayer, handleAttack);
    }

    function handleAttack(row, col){
        const result = oppPlayer.playerBoard.recieveAttack(row, col);
        displayBoard(currPlayer);
        displayOppBoard(oppPlayer, handleAttack);

        setTimeout(()=>{
            if(result === "Game Over!"){
                alert(`${currPlayer.name} wins!`);
            } 
            else if(result === "Shot already taken at these coordinates!"){
                alert(result);
            }
            else {
                alert(result)
                switchTurn();
            }
        }, 100);
        
    }

    displayCurrTurn(currPlayer);
    displayBoard(currPlayer);
    displayOppBoard(oppPlayer, handleAttack);
}


export function createDefault(){
    const patrolBoat = new Ship(2);
    const submarine = new Ship(3);
    const destroyer = new Ship(3);
    const battleShip = new Ship(4);
    const carrier = new Ship(5);

    playerOne.playerBoard.placeShip(0, 0, patrolBoat, "vertical");
    playerTwo.playerBoard.placeShip(0, 0, patrolBoat, "vertical");

    playerOne.playerBoard.placeShip(4,4, submarine, "horizontal");
    playerTwo.playerBoard.placeShip(4,4, submarine, "horizontal");

    playerOne.playerBoard.placeShip(6,4, destroyer, "horizontal");
    playerTwo.playerBoard.placeShip(6,4, destroyer, "horizontal");

    playerOne.playerBoard.placeShip(8,0, battleShip, "horizontal");
    playerTwo.playerBoard.placeShip(8,0, battleShip, "horizontal");

    playerOne.playerBoard.placeShip(1,2, carrier, "horizontal");
    playerTwo.playerBoard.placeShip(1,4, carrier, "horizontal");
}


