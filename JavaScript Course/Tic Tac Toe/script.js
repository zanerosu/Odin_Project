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

    const addMarker = (player) => {
        value = player;
    };

    const getCellValue = () => value;

    return {
        addMarker,
        getCellValue
    };
}

function GameController(playerOneName = 'Player One', playerTwoName = 'Player Two'){

    const board = Gameboard();
    
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

        console.log(currBoard[0][0].getCellValue());
        //Check vertical
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(r + 2 < 3 && checkLine(currBoard[r][c],currBoard[r + 1][c], currBoard[r + 2][c])){
                    return true
                }
            }
        }

        //Check horizontal
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(c + 2 < 3 && checkLine(currBoard[r][c],currBoard[r][c + 1], currBoard[r][c + 2])){
                    return true
                }
            }
        }
        
        //Check down right
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(c + 2 < 3 && r + 2 < 3 && checkLine(currBoard[r][c],currBoard[r + 1][c + 1], currBoard[r + 2][c + 2])){
                    return true
                }
            }
        }

        //Check down left
        for (let r = 0; r < 3; r++){
            for (let c = 0; c < 3; c++){
                if(c - 2 >= 0 && r + 2 < 3 && checkLine(currBoard[r][c],currBoard[r + 1][c - 1], currBoard[r + 2][c - 2])){
                    return true
                }
            }
        }
        
        //No Winner found
        return
    }

    const playRound = (row, column) =>{
        if (board.markField(row, column, getActivePlayer().marker) === true){
            if(checkWinner()){
                console.log(`${getActivePlayer().name} wins!`)
                activePlayer = players[0];
                board.createNewBoard();
                printNewRound();
            } else{
                switchPlayerTurn();
                printNewRound();
            }
        } else {
            printNewRound();
        }
        
    };

    printNewRound();

    return{
        playRound,
        getActivePlayer
    };
}

const game = GameController();

