
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
var computerSelection
var  playerSelection

let choices = ["rock", "paper", "scissor"]

function playRound(playerSelection, computerSelection) {
    var computerSelection = getComputerChoice();
    var  playerSelection = prompt("What's your choice?");
   
   let playerSelectionCapitalized = playerSelection.toLowerCase();
  if (computerSelection === playerSelectionCapitalized) {
      return "its a Draw"
  }
 if (computerSelection === "rock" && playerSelectionCapitalized === "scissors") {
       return "You Lose!"
   } else if (computerSelection === "rock" && playerSelectionCapitalized === "paper") {
    return "You Win!"
} else if (computerSelection === "paper" && playerSelectionCapitalized === "scissors") {
    return "You Win!"
} else if (computerSelection === "paper" && playerSelectionCapitalized === "rock") {
    return "You Lose!"
} else if (computerSelection === "scissors" && playerSelectionCapitalized === "paper") {
    return "You Lose!"
} else if (computerSelection === "scissors" && playerSelectionCapitalized === "rock") {
    return "You Win!"
}  else {
    return "null"
} 
 
  }

  let userWins = 0;
  let computerWins = 0; 
  
  function game() {
for (let i = 0; i < 5; i++) {

playRoundResult = playRound(playerSelection, computerSelection);
console.log(playRoundResult);
if (playRoundResult === "You Win!") {
    userWins + 1;
} else if (playRoundResult === "You Lose!") {
    computerWins + 1;
} 
console.log(userWins, computerWins)

 }
}
 
  
console.log(game())

