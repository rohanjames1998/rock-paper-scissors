
// This function returns "Rock", "Paper", or "Scissor" randomly.
function getComputerChoice() {
   const rng = Math.floor(Math.random() * 3) + 1;
   
   if (rng == 1){
    return "Rock";
   }
   if (rng == 2){
    return "Paper";
   }
   
   return "Scissor";
}

// This function takes user inputs and compares it to computer choice. This function returns appropriate strings that fit each case. E.g., if player input is rock and computer choice is scissor then we return "You Win! Rock beats Scissor."
function playRound(playerSelection, computerSelection) {

switch (true){
    case playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "rock":
    return "It's a Tie!!";
        break;

    case playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "paper":
        return "It's a Tie!!";
        break;

    case playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase() == "scissor":
            return "It's a Tie!!";
        break;

    case playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase()== "paper":
            return "You Lose! Paper beats Rock.";
            break;
    
    case playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase()== "scissor":
            return "You Win! Rock beats Scissor.";
            break;
      
    case playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase()== "rock":
                return "You Win! Paper beats Rock.";
                break;

    case playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase()== "scissor":
            return "You Lose! Scissor beats Paper.";
            break;
    
    case playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase()== "paper":
                return "You Win! Scissor beats Paper.";
                break;

    case playerSelection.toLowerCase() == "scissor" && computerSelection.toLowerCase()== "rock":
                 return "You Lose! Rock beats Scissor.";
                 break;
        
}
}




// This function runs the game for 5 rounds and returns the winner in the end.

function game(){

    let playerSelection = prompt("Rock, Paper, or Scissor?");

    let computerSelection = getComputerChoice();

    let tieCounter = 0;
    let winCounter = 0;
    let lossCounter = 0;


    for (let i = 0; i < 5; i++){
        //Message for each round.
        playerSelection = prompt("Rock, Paper, or Scissor?");
        computerSelection = getComputerChoice();
       
        //Calculating each rounds wins, losses, or ties.
        if (playRound(playerSelection, computerSelection).includes("Win")){
            winCounter++;
        }

        if (playRound(playerSelection, computerSelection).includes("Lose")){
            lossCounter++;
        }
        
        if (playRound(playerSelection, computerSelection).includes("Tie")){
            tieCounter++;
        }

        // Each rounds display message

        console.log(`Scores:`);
        console.log(`Player Score = ${winCounter}`);
        console.log(`Computer Score = ${lossCounter}`);
        console.log(`Ties = ${tieCounter}`);
        console.log(playRound());
    }

    //For if it's a tie.
    if(tieCounter == 4 || 
        tieCounter == 3 && winCounter == 1 && lossCounter == 1||
        tieCounter == 2 && winCounter == 2 && lossCounter == 2){
        console.log(`Player Score = ${winCounter}`);
        console.log(`Computer Score = ${lossCounter}`);
        console.log(`Ties = ${tieCounter}`);
        console.log("And That's a Tie... >_<");
        }

    // For if player wins
    if (winCounter > lossCounter){
        console.log(`Player Score = ${winCounter}`);
        console.log(`Computer Score = ${lossCounter}`);
        console.log(`Ties = ${tieCounter}`);
        console.log("Congratulations! You Won the Game :D");
    }
    // For if player losses.
    if (lossCounter > winCounter){
        console.log(`Player Score = ${winCounter}`);
        console.log(`Computer Score = ${lossCounter}`);
        console.log(`Ties = ${tieCounter}`);
        console.log("Better Luck Next Time :(");
    }

    
}

game();