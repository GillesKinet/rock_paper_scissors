let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let choice = "";
  const number = Math.random();
  choice = number <= 0.33 ? "rock" : number <= 0.66 ? "paper" : "scissors";
  return choice;
}

function getHumanChoice() {
  const choice = prompt("Please select rock, paper or scissors");
  return choice;
}
