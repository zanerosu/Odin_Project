export function displayBoard(player){
    const board = player.playerBoard.board;
    const gameBoardDiv = document.querySelector('#gameboards');

    const boardContainer = document.createElement('table');
    boardContainer.classList.add("gameboard")

    board.forEach(row => {
        const rowElement = document.createElement('tr');
        
        row.forEach(col => {
            const colElement = document.createElement('th');
            if (col === 0){
                colElement.style.backgroundColor = "blue";
            }
            else if(col === "X"){
                colElement.style.backgroundColor = "red";
            }
            else if(col === "O"){
                colElement.style.backgroundColor = "black";
            }
            else{
                colElement.style.backgroundColor = "gray";
            }
            rowElement.appendChild(colElement);
        });

        boardContainer.appendChild(rowElement);
    });

    gameBoardDiv.appendChild(boardContainer);
}


export function displayOppBoard(player){
    const board = player.playerBoard.board;
    const gameBoardDiv = document.querySelector('#gameboards');
    
    if (document.querySelector('.gameboardOpp')){
        const oppGameBoard = document.querySelector('.gameboardOpp');
        gameBoardDiv.removeChild(oppGameBoard);
    }

    const boardContainer = document.createElement('table');
    boardContainer.classList.add("gameboardOpp")

    for (let row = 0; row < board.length; row++){
        const rowElement = document.createElement('tr');
        for (let col = 0; col < board[row].length; col++){
            const colElement = document.createElement('th');

            if (board[row][col] === 0){
                colElement.style.backgroundColor = "blue";
            }
            else if(board[row][col] === "X"){
                colElement.style.backgroundColor = "red";
            }
            else if(board[row][col] === "O"){
                colElement.style.backgroundColor = "black";
            }
            else{
                colElement.style.backgroundColor = "blue";
            }

            colElement.addEventListener('click', (e) => {
                player.playerBoard.recieveAttack(row, col);
                displayOppBoard(player);
            })
              
            rowElement.appendChild(colElement);
        }
        boardContainer.appendChild(rowElement);
    }
    gameBoardDiv.appendChild(boardContainer);
}