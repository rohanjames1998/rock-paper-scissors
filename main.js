


function getComputerChoice() {
    const rng = Math.floor(Math.random() * 3) + 1;
  
    if (rng == 1) {
      return "rock";
    }
    if (rng == 2) {
      return "paper";
    }
  
    return "scissor";
  }

  const buttons = document.querySelectorAll(".game-button");
  buttons.forEach(item => addEventListener("click", e => {
    const selection = e.target.value;
    game(selection);
}));


function game(selection){

    let playerSelection = selection;
    let computerSelection = getComputerChoice();
    let displayMsg = "Score 5 Points to Win!!";
    let playerScore = 0;
    let computerScore = 0;

    // This switch function compares computer selection with player selection, increase the scores, and update display message for each round through round() function.
    switch(true){

    case playerSelection == computerSelection:
            displayMsg = "It's a Tie >_<";
         round(displayMsg, computerScore, playerScore);
          break;

     case playerSelection == "rock" && computerSelection == "paper":

      displayMsg = "You Lose! Paper beats Rock.";
      computerScore++;
      round(displayMsg, computerScore, playerScore);
      break;

    case playerSelection == "rock" && computerSelection == "scissor":

      displayMsg = "You Win! Rock beats Scissor.";
      playerScore++;
      round(displayMsg, computerScore, playerScore);
      break;

    case playerSelection == "paper" && computerSelection == "rock":

      displayMsg = "You Win! Paper beats Rock.";
      playerScore++;
      round(displayMsg, computerScore, playerScore);
      break;

    case playerSelection == "paper" && computerSelection == "scissor":

      displayMsg = "You Lose! Scissor beats Paper.";
      computerScore++;
      round(displayMsg, computerScore, playerScore);
      break;

    case playerSelection == "scissor" && computerSelection == "paper":

      displayMsg = "You Win! Scissor beats Paper.";
      playerScore++;
      round(displayMsg, computerScore, playerScore);
      break;

    case playerSelection == "scissor" && computerSelection == "rock":

      displayMsg = "You Lose! Rock beats Scissor.";
      computerScore++;
      round(displayMsg, computerScore, playerScore);
      break;
    }
    end(displayMsg, playerScore, computerScore);
}


// This function does 3 things:
  //Display all scores and messages;
  // Count rounds and choose a winner


