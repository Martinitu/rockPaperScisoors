
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

let computerSelection = getComputerChoice()
let playerSelection = "Rock"

function playRound(playerSelection, computerSelection) {
   let playerSelectionCapitalized = playerSelection.toLowerCase();
  
 if (computerSelection === "rock" && playerSelectionCapitalized === "scissors") {
       return "You Lose! Rock beats Scissors"
   } else if (computerSelection === "rock" && playerSelectionCapitalized === "paper") {
    return "You Win! Paper beats Rock"
} else if (computerSelection === "paper" && playerSelectionCapitalized === "scissors") {
    return "You Win! Scissors beats Paper"
} else if (computerSelection === "paper" && playerSelectionCapitalized === "rock") {
    return "You Lose! Paper beats Rock"
} else if (computerSelection === "scissors" && playerSelectionCapitalized === "paper") {
    return "You Lose! Scissors beats Paper"
} else if (computerSelection === "scissors" && playerSelectionCapitalized === "rock") {
    return "You Win! Rock beats Scissors"
}  else {
    return "Its a draw!"
} 
 
  }

  
 
  
console.log(playRound(playerSelection, computerSelection))

