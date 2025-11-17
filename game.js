let computerScore = 0;
let humanScore = 0;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
  let choice = "";
  const number = Math.random();
  choice = number <= 0.33 ? rock : number <= 0.66 ? paper : scissors;
  return choice;
}

function getHumanChoice() {
  const choice = prompt("Please select rock, paper or scissors");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  const humanChoiceLower = humanChoice.toLowerCase();
  const humanWins = "You win, the computer loses!";
  const computerWins = "You lose, the computer wins!";

  if (humanChoiceLower === computerChoice) {
    console.log(`It's a tie, you both haven chosen ${humanChoice}!`);
  } else if (humanChoiceLower === rock) {
    if (computerChoice === scissors) {
      console.log(humanWins);
      humanScore++;
    } else {
      console.log(computerWins);
      computerScore++;
    }
  } else if (humanChoiceLower === paper) {
    if (computerChoice === scissors) {
      console.log(computerWins);
      computerScore++;
    } else {
      console.log(humanWins);
      humanScore++;
    }
  } else {
    if (computerChoice === rock) {
      console.log(computerWins);
      computerScore++;
    } else {
      console.log(humanWins);
      humanScore++;
    }
  }
}
