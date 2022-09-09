
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
var  playerSelections = document.querySelectorAll('button')

var userWins = 0;
var computerWins = 0; 
var playerCountDisplay = document.getElementById('player');
var computerCountDisplay = document.getElementById('computer');
var resultDisplay = document.getElementById('result');
console.log(resultDisplay)

var roundCount = document.getElementById("round");

console.log(roundCount)


    
    playerSelections.forEach(playerSelection => { 
       
        playerSelection.addEventListener('click', event => {
        let playerButton = playerSelection.id
        result = playRound(playerButton, computerSelection);
        roundCount.innerHTML = result;
        if (userWins === 3) {
            resultDisplay.innerHTML = "YOU WON THE GAME!!"
        } else if (computerWins === 3) {
            resultDisplay.innerHTML = "YOU LOSE THE GAME!!"
        }
      else if (result === "You Win!") {
  
        userWins++;
        
     } else if (result == "You Lose!") {
      computerWins++;
    
     } 

   
     console.log(userWins, computerWins)

      playerCountDisplay.innerHTML = userWins;
      computerCountDisplay.innerHTML = computerWins;

   
   });
  

});

let choices = ["rock", "paper", "scissor"]

function playRound(playerSelection, computerSelection) {
    var computerSelection = getComputerChoice();
     //var  playerSelection = prompt("What's your choice?");
     // var playerSelectionCapitalized = playerSelection.toLowerCase();
  if (computerSelection === playerSelection) {
      return "its a Draw"
  }
 if (computerSelection === "rock" && playerSelection === "scissors") {
       return "You Lose!"
   } else if (computerSelection === "rock" && playerSelection === "paper") {
    return "You Win!"
} else if (computerSelection === "paper" && playerSelection === "scissors") {
    return "You Win!"
} else if (computerSelection === "paper" && playerSelection === "rock") {
    return "You Lose!"
} else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "You Lose!"
} else if (computerSelection === "scissors" && playerSelection === "rock") {
    return "You Win!"
}  else {
    return "null"
} 
 
  }

  

 


  

