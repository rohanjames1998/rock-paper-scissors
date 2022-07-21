function getComputerChoice() {
    const rng = Math.floor(Math.random() * 3) + 1;
  
    if (rng == 1) {
      return "Rock";
    }
    if (rng == 2) {
      return "Paper";
    }
  
    return "Scissor";
  }



  function getPlayerChoice() {
    
  }