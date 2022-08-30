
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
var userWins = 0;
var computerWins = 0; 

let choices = ["rock", "paper", "scissor"]

function playRound(playerSelection, computerSelection) {
    var computerSelection = getComputerChoice();
    var  playerSelection = prompt("What's your choice?");
   
   var playerSelectionCapitalized = playerSelection.toLowerCase();
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
 
  
  function game() {
for (let i = 0; i < 5; i++) { if (userWins < 3 && computerWins < 3) {
    
playRoundResult = playRound(playerSelection, computerSelection);
console.log(playRoundResult);
if (playRoundResult === "You Win!") {
  
    userWins++;
   
 } else if (playRoundResult == "You Lose!") {
  computerWins++;

 } 
 console.log(userWins, computerWins)

 }
}
if (userWins === computerWins) {
   return "the its a draw"
} else if (userWins > computerWins) {
    return "you won the game"

} else if (computerWins > userWins) {
    return "You lose the Game"
}
 
}

  
console.log(game())

