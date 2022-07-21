


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
    round(selection);
}));


function round(selection){

    let playerSelection = selection;
    let computerSelection = getComputerChoice();
    switch(true){

    case playerSelection == computerSelection:
            return "It's a Tie >_<";

     case playerSelection == "rock" && computerSelection == "paper":

      return "You Lose! Paper beats Rock.";
      break;

    case playerSelection == "rock" && computerSelection == "scissor":

      return "You Win! Rock beats Scissor.";
      break;

    case playerSelection == "paper" && computerSelection == "rock":

      return "You Win! Paper beats Rock.";
      break;

    case playerSelection == "paper" && computerSelection == "scissor":

      return "You Lose! Scissor beats Paper.";
      break;

    case playerSelection == "scissor" && computerSelection == "paper":

      return "You Win! Scissor beats Paper.";
      break;

    case playerSelection == "scissor" && computerSelection == "rock":

      return "You Lose! Rock beats Scissor.";
      break;
    }

}

