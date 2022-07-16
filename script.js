
// This function returns "Rock", "Paper", or "Scissor" randomly.
function getComputerChoice() {
   const rng = Math.floor(Math.random() * 3) + 1;
   
   if (rng === 1){
    return "Rock";
   }
   if (rng === 2){
    return "Paper";
   }
   
   return "Scissor";
}

// This function takes user inputs and compares it to computer choice. This function returns appropriate strings that fit each case. E.g., if player input is rock and computer choice is scissor then we return "You Win! Rock beats Scissor."
function playRound(playerSelection, computerSelection) {

switch (true){
    case playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock":
    return "It's a tie!!";
        break;

    case playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper":
        return "It's a tie!!";
        break;

    case playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase() === "scissor":
            return "It's a Tie!!";
        break;

    case playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "paper":
            return "You Lose! Paper beats Rock.";
            break;
    
    case playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase()=== "scissor":
            return "You Win! Scissor beats Rock.";
            break;
      
    case playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "rock":
                return "You Win! Paper beats Rock.";
                break;

    case playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase()=== "scissor":
            return "You Lose! Scissor beats Paper.";
            break;
    
    case playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase()=== "paper":
                return "You Win! Scissor beats Paper.";
                break;

    case playerSelection.toLowerCase() === "scissor" && computerSelection.toLowerCase()=== "rock":
                 return "You Lose! Rock beats Scissor.";
                 break;
        
}
}





