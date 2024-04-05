//Gameboard represents the state of the board.
function Gameboard(){
    const rows = 3;
    const columns = 3;
    const board = [];

    //This method creates the board as a 2d array with each spot being a Cell object.
    const createNewBoard = () =>{
        for (let i = 0; i < rows; i++) {
          board[i] = [];
          for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
          }
        }
    }

    //Creates inital board.
    createNewBoard();

    const getBoard = () => board;

    //Marks desired spot on board as long as it is available.
    const markField = (row, column, playerValue) => {
        //If the board cell has a value of 0 it means it has not been used yet.
        if (board[row][column].getCellValue() === 0){
            board[row][column].addMarker(playerValue);
            return true
        } else{
            alert('This space is already taken!')
            return false
        }
    }

    //Prints board to console.
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getCellValue()));
        console.log(boardWithCellValues);
    }

    return{getBoard, markField, printBoard, createNewBoard};
}

//Cells represent each individual tile on the board. 
//Intially they have a value of 0 and can be changed to 'X' for player 1 or 'O' for player 2.
function Cell(){
    
    let value = 0;
    let isWinner = false;

    const addMarker = (player) => {
        value = player;
    };

    const getCellValue = () => value;

    const setWinningCell = (boolValue) => {
        isWinner = boolValue; 
    };

    const getWinningCell = () => isWinner;


    return {
        addMarker,
        getCellValue,
        setWinningCell,
        getWinningCell
    };
}

//Retrieves any DOM elements from the html page.
function getDomElements(){

    const getBoardDiv = () => document.querySelector('#main-board');
    const getCurrPlayer = () => document.querySelector('#curr-player');
    const getStartGameDiv = () => document.querySelector('#game-start');
    const getStartBtn = () => document.querySelector('#startBtn');
    const getNameForm = () => document.querySelector('#player-names-form');
    const getWinnerMsg = () => document.querySelector('#winner-msg');
    const getReplayBtn = () => document.querySelector('#play-again');

    return {getBoardDiv, getCurrPlayer, getStartGameDiv, getStartBtn, getNameForm, getWinnerMsg, getReplayBtn};
}

function GameController(playerOneName, playerTwoName){
    const board = Gameboard();
    const Elements = getDomElements();

    const boardDiv = Elements.getBoardDiv();
    const winnerMsg = Elements.getWinnerMsg();
    const replayBtn = Elements.getReplayBtn();
    const currPlayer = Elements.getCurrPlayer();
    
    const players = [
        {
            name: playerOneName,
            marker: "X"
        },
        {
            name:playerTwoName,
            marker: "O"
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () =>{
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        currPlayer.style.display = "block"
        currPlayer.textContent = `${getActivePlayer().name}'s turn.`;
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const checkLine = (a, b, c) => {
        a = a.getCellValue();
        b = b.getCellValue();
        c = c.getCellValue();

        return ((a !== 0) && (a === b) && (a === c));
    }

    const checkWinner = () => {
        currBoard = board.getBoard();

        //Check vertical
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(r + 2 < 3 && checkLine(currBoard[r][c],currBoard[r + 1][c], currBoard[r + 2][c])){
                    currBoard[r][c].setWinningCell(true);
                    currBoard[r+1][c].setWinningCell(true);
                    currBoard[r+2][c].setWinningCell(true);
                    return true
                }
            }
        }

        //Check horizontal
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(c + 2 < 3 && checkLine(currBoard[r][c],currBoard[r][c + 1], currBoard[r][c + 2])){
                    currBoard[r][c].setWinningCell(true);
                    currBoard[r][c+1].setWinningCell(true);
                    currBoard[r][c+2].setWinningCell(true);
                    return true
                }
            }
        }
        
        //Check down right
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(c + 2 < 3 && r + 2 < 3 && checkLine(currBoard[r][c],currBoard[r + 1][c + 1], currBoard[r + 2][c + 2])){
                    currBoard[r][c].setWinningCell(true);
                    currBoard[r+1][c+1].setWinningCell(true);
                    currBoard[r+2][c+2].setWinningCell(true);
                    return true
                }
            }
        }

        //Check down left
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(c - 2 >= 0 && r + 2 < 3 && checkLine(currBoard[r][c],currBoard[r + 1][c - 1], currBoard[r + 2][c - 2])){
                    currBoard[r][c].setWinningCell(true);
                    currBoard[r+1][c-1].setWinningCell(true);
                    currBoard[r+2][c-2].setWinningCell(true);
                    return true
                }
            }
        }
        
        //No Winner found
        return
    }

    const checkTie = () => {
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if (currBoard[r][c].getCellValue() === 0){
                    return false
                }
            }
        }

        return true
    }

    const completeGame = () => {
        winnerMsg.style.display = "block"
        console.log(`${getActivePlayer().name} wins!`)
        winnerMsg.textContent = `${getActivePlayer().name} wins!`;
        activePlayer = players[0];
        boardDiv.style.pointerEvents = "none";
        replayBtn.style.display ="block"

        replayBtn.addEventListener('click', () => {
            replayBtn.style.display = "none"
            winnerMsg.style.display = "none"
            currPlayer.style.display = "none"
            boardDiv.style.display = "none"
            getPlayerNames();
        });
    }

    const playRound = (row, column) =>{
        if (board.markField(row, column, getActivePlayer().marker) === true){
            if(checkWinner()){
                renderBoard();
                completeGame();
            } else{
                switchPlayerTurn();
                printNewRound();
                renderBoard();
            }
        } else {
            printNewRound();
            renderBoard();
        }
        
    };
    
    const renderBoard = () => {
        boardDiv.style.display = "grid";
        boardDiv.innerHTML = '';

        currBoard = board.getBoard();
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                const cellDiv = document.createElement("div");
                cellDiv.classList.add('cell');
                if (currBoard[r][c].getCellValue() !== 0){
                    
                    if(currBoard[r][c].getWinningCell() == true){
                        cellDiv.classList.add('winning-square');
                    }
                    cellDiv.textContent = currBoard[r][c].getCellValue();
                    if(checkTie()){
                        completeGame();
                        winnerMsg.textContent = `Tie Game!`;
                    }
                }
                cellDiv.addEventListener('click', () => {
                    playRound(r, c);
                })
                boardDiv.appendChild(cellDiv);
            }
        }
    }

    renderBoard();
    printNewRound();

    return{
        playRound,
        getActivePlayer
    };
}

function getPlayerNames (){
    const Elements = getDomElements();
    const startGameDiv = Elements.getStartGameDiv();
    const nameForm = Elements.getNameForm();
    const boardDiv = Elements.getBoardDiv(); 

    let p1Name = 'Player 1'
    let p2Name = 'Player 2'
    let inputFields = document.querySelectorAll('.name-input');
    
    startGameDiv.style.display = "flex";

    nameForm.addEventListener('submit', (event) => {
        event.preventDefault();
        p1Name = document.querySelector('#P1-Name').value;
        p2Name = document.querySelector('#P2-Name').value;
        startGameDiv.style.display = "none";
        boardDiv.style.pointerEvents = "auto";

        GameController(p1Name, p2Name)
    })
}

getPlayerNames();
