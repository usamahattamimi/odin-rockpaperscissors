// 1. get computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
};

// play per round
const playRound = ({ target: { innerText } }) => {
  const humanChoice = innerText.toLowerCase();
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    console.log(`Human: ${humanChoice}, Computer: ${computerChoice}, Draw!`);
    return "draw";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `Human: ${humanChoice}, Computer: ${computerChoice}, Human Wins!`
    );
    return "human";
  } else {
    console.log(
      `Human: ${humanChoice}, Computer: ${computerChoice}, Computer Wins!`
    );
    return "computer";
  }
};

// make selector for buttons and get the value when clicked
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playRound);
}

// // 4. declare how much round per game
// const playGame = () => {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let i = 0; i < totalRound; i++) {
//     const result = playRound(getHumanChoice(), getComputerChoice());

//     if (result === "human") humanScore++;
//     else if (result === "computer") computerScore++;
//   }

//   if (humanScore > computerScore)
//     console.log(
//       `Human Score: ${humanScore}, Computer Score: ${computerScore}, Human Wins!`
//     );
//   else if (humanScore < computerScore)
//     console.log(
//       `Human Score: ${humanScore}, Computer Score: ${computerScore}, Computer Wins!`
//     );
//   else
//     console.log(
//       `Human Score: ${humanScore}, Computer Score: ${computerScore}, It's Draw!`
//     );
// };
