export function displayBoard(player){
    const board = player.playerBoard.board;

    const boardContainer = document.querySelector('.gameboard')
    boardContainer.innerHTML = '';

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
                colElement.style.backgroundColor = "gray";
            }              
            rowElement.appendChild(colElement);
        }
        boardContainer.appendChild(rowElement);
    }
}


export function displayOppBoard(player, handleAttack){
    const board = player.playerBoard.board;

    const boardContainer = document.querySelector('.gameboardOpp')
    boardContainer.innerHTML = '';

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
                handleAttack(row, col);
            })
              
            rowElement.appendChild(colElement);
        }
        boardContainer.appendChild(rowElement);
    }
}

export function displayCurrTurn(player){
    const turnName = document.querySelector("#currTurn");
    turnName.textContent = `${player.name}'s Turn!`;
}