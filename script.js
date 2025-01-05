let round = 1;
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const disableButtons = () => {
  buttons.forEach((button) => (button.disabled = true));
};

const resetGame = () => {
  round = 1;
  humanScore = 0;
  computerScore = 0;
  resultDiv.innerHTML = "";
  buttons.forEach((button) => (button.disabled = false));
};

const checkGame = () => {
  if (humanScore === 5 || computerScore === 5) {
    const hWinner = document.createElement("h2");

    if (humanScore === computerScore) {
      hWinner.innerText = `Game Finish, It's Draw!`;
    } else if (humanScore > computerScore) {
      hWinner.innerText = `Game Finish, Human Wins!`;
    } else {
      hWinner.innerText = `Game Finish, Computer Wins!`;
    }

    resultDiv.append(hWinner);
    disableButtons();
    const restartButton = document.createElement("button");
    restartButton.innerText = "Restart Game";
    restartButton.addEventListener("click", resetGame);
    resultDiv.append(restartButton);
  }
};

const playRound = ({ target: { innerText: humanChoice } }) => {
  humanChoice = humanChoice.toLowerCase();
  const computerChoice = getComputerChoice();

  const hElement = document.createElement("h3");
  const pElement = document.createElement("p");

  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    pElement.innerText = `Human: ${humanChoice}, Computer: ${computerChoice}, Draw!`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    pElement.innerText = `Human: ${humanChoice}, Computer: ${computerChoice}, Human Wins!`;
  } else {
    computerScore++;
    pElement.innerText = `Human: ${humanChoice}, Computer: ${computerChoice}, Computer Wins!`;
  }

  hElement.innerText = `Round ${round}`;
  pElement.innerText += `\n Human score: ${humanScore}, Computer Score: ${computerScore}`;
  resultDiv.append(hElement, pElement);
  round++;

  checkGame();
};

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playRound);
}

const resultDiv = document.querySelector(".result");
