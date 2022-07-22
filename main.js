// Getting computer choice.

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

// Adding event listener to each button
const buttons = document.querySelectorAll(".game-button");
buttons.forEach((item) =>
  addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const selection = e.target.value;
    game(selection);
  })
);

// Main function that plays the game.
function game(selection) {
  let playerSelection = selection;
  let computerSelection = getComputerChoice();
  let displayMsg = document.querySelector(".displayMsg");

  // This switch function compares computer selection with player selection, increase the scores, and update display message for each round through round() function.
  switch (true) {
    case playerSelection == computerSelection:
      displayMsg.textContent = "It's a Tie >_<";

      break;

    case playerSelection == "rock" && computerSelection == "paper":
       displayMsg.textContent = "You Lose! Paper beats Rock.";
  round();


      break;

    case playerSelection == "rock" && computerSelection == "scissor":
       displayMsg.textContent = "You Win! Rock beats Scissor.";
  round();

       

      break;

    case playerSelection == "paper" && computerSelection == "rock":
       displayMsg.textContent = "You Win! Paper beats Rock.";

      break;

    case playerSelection == "paper" && computerSelection == "scissor":
       displayMsg.textContent = "You Lose! Scissor beats Paper.";

      break;

    case playerSelection == "scissor" && computerSelection == "paper":
       displayMsg.textContent = "You Win! Scissor beats Paper.";       

      break;

    case playerSelection == "scissor" && computerSelection == "rock":
       displayMsg.textContent = "You Lose! Rock beats Scissor.";       

      break;

      
  }

}
// This function does 3 things:
//Display all scores;
// Count until someone reaches 5 points;
// Call end function after finishing;

function round() {

  let playerScore = document.querySelector(".playerScore");
  let computerScore = document.querySelector(".computerScore");
  let displayMsg = document.querySelector(".displayMsg");


  
  if (displayMsg.textContent.includes("You Win")){
    playerScore.textContent++; 
  }

  if (displayMsg.textContent.includes("Lose")){
    computerScore.textContent++;
  }
  

  
}




function end() {
  console.log("End");
}
