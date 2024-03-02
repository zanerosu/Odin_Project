const choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}

function checkWin(){
    if (playerScore === 5){
        winner.textContent = `You win! With a score of ${playerScore}, the computer had ${computerScore}.`;
    }
    else if (computerScore === 5){
        winner.textContent =  `You lose! Computer had a score of ${computerScore}, you had ${playerScore}.`;
    }
    else{
        winner.textContent = ``;
    }
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
    const rockBtn = document.querySelector('#rock')
    const paperBtn = document.querySelector('#paper')
    const scissorsBtn = document.querySelector('#scissors')
    let computerSelection = getComputerChoice();

    rockBtn.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        console.log(playRound('rock', computerSelection))
        score.textContent = `Score: You - ${playerScore} Computer - ${computerScore}`
        checkWin()
    })

    paperBtn.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        console.log(playRound('paper', computerSelection))
        score.textContent = `Score: You - ${playerScore} Computer - ${computerScore}`
        checkWin()
    });

    scissorsBtn.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        console.log(playRound('scissors', computerSelection))
        score.textContent = `Score: You - ${playerScore} Computer - ${computerScore}`
        checkWin()
    })
}

const results = document.createElement('div');
const score = document.createElement('p');
const winner = document.createElement('p');

score.textContent = `Score: You - ${playerScore} Computer - ${computerScore}`

results.appendChild(score);
results.appendChild(winner);
document.querySelector('body').appendChild(results)

playGame();
