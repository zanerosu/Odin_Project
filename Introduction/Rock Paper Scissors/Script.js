const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            computerScore += 1; 
            return "You Lose! Paper beats Rock!"
        }
        else if (computerSelection === "scissors"){
            playerScore += 1;
            return "You Win! Rock beats Scissors!"
        }
        else{
            return "Tie Round!"
        }
    } else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            computerScore += 1;
            return "You Lose! Scissors beats Paper!"
        }
        else if (computerSelection === "rock"){
            playerScore += 1;
            return "You Win! Paper beats Rock!"
        }
        else{
            return "Tie Round!"
        }
    }  else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            computerScore += 1;
            return "You Lose! Rock beats Scissors!"
        }
        else if (computerSelection === "paper"){
            playerScore += 1;
            return "You Win! Scissors beats Paper!"
        }
        else{
            return "Tie Round!"
        }
    } 
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Type Selection!").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        console.log(`You win! With a score of ${playerScore}, the computer had ${computerScore}.`);
    }
    else if (computerScore > playerScore){
        console.log(`You lose! Computer had a score of ${computerScore}, you had ${playerScore}.`);
    }
    else{
        console.log(`Tie game! You both had ${playerScore} points!`);
    }
}

playGame();



