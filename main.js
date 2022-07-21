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

  const buttons = document.querySelectorAll(".game-button");
  buttons.forEach(item => addEventListener("click", e => {
    const selection = e.target.value;
    selectionMade(selection);
}));



