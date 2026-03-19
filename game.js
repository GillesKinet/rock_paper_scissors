const winningScore = 5;
let computerScore = 0;
let humanScore = 0;
let roundCount = 0;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const body = document.querySelector("body");
const compScore = document.createElement("div");
const humScore = document.createElement("div");
body.appendChild(compScore);
body.appendChild(humScore);

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
  roundCount++;
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  const humanChoiceLower = humanChoice.toLowerCase();
  const humanWins = "You win, the computer loses!";
  const computerWins = "You lose, the computer wins!";
  const div = document.createElement("div");
  body.appendChild(div);
  let roundResult = `The result of round ${roundCount}: `;

  if (humanChoiceLower === computerChoice) {
    roundResult += `It's a tie, you both haven chosen ${humanChoice}!`;
  } else if (humanChoiceLower === rock) {
    if (computerChoice === scissors) {
      roundResult += humanWins;
      humanScore++;
    } else {
      roundResult += computerWins;
      computerScore++;
    }
  } else if (humanChoiceLower === paper) {
    if (computerChoice === scissors) {
      roundResult += computerWins;
      computerScore++;
    } else {
      roundResult += humanWins;
      humanScore++;
    }
  } else {
    if (computerChoice === rock) {
      roundResult += computerWins;
      computerScore++;
    } else {
      roundResult += humanWins;
      humanScore++;
    }
  }
  div.textContent = roundResult;
  compScore.textContent = `Computerscore: ${computerScore}`;
  humScore.textContent = `Humanscore: ${humanScore}`;
}

function playGame() {
  playRound();
  if (humanScore === winningScore || computerScore === winningScore) {
    const divFinalResult = document.createElement("div");
    body.appendChild(divFinalResult);
    let matchOutcome = "The outcome of this match: ";
    if (humanScore > computerScore) {
      matchOutcome += `You win with ${humanScore} vs ${computerScore} points :) !`;
    } else if (humanScore < computerScore) {
      matchOutcome += `You lose with ${humanScore} vs ${computerScore} points!`;
    } else {
      matchOutcome += `It's a tie`;
    }
    divFinalResult.textContent = matchOutcome;
  }
}

const playGameButton = document.getElementById("start-game");
playGameButton.addEventListener("click", playGame);
