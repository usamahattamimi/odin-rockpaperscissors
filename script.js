// // # SESUAI SCRIPT DARI TUGAS
// // 1. get computer choice
// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 10);
//   if (randomNumber < 3) return "rock";
//   else if (randomNumber > 3 && randomNumber <= 7) return "paper";
//   else return "scissors";
// };

// // 2. get human choice
// const getHumanChoice = () => {
//   const value = prompt("Choice between: Rock, Paper, Scissors");
//   if (value) return value.toLowerCase();
//   else return;
// };

// const playGame = () => {
//   // 3. Declare Players Score
//   let computerScore = 0;
//   let humanScore = 0;

//   // 4. Game Play
//   const playRound = (humanChoice, computerChoice) => {
//     if (humanChoice === "rock" && computerChoice === "rock") {
//       console.log("Draw");
//       humanScore++;
//       computerScore++;
//     } else if (humanChoice === "paper" && computerChoice === "paper") {
//       console.log("Draw");
//       humanScore++;
//       computerScore++;
//     } else if (humanChoice === "scissors" && computerChoice === "scissors") {
//       console.log("Draw");
//       humanScore++;
//       computerScore++;
//     } else if (humanChoice === "rock" && computerChoice === "paper") {
//       console.log("Computer Wins! Paper beats Rock");
//       computerScore++;
//     } else if (humanChoice === "paper" && computerChoice === "scissors") {
//       console.log("Computer Wins! Scissors beats Paper");
//       computerScore++;
//     } else if (humanChoice === "scissors" && computerChoice === "rock") {
//       console.log("Computer Wins! Rock beats Scissors");
//       computerScore++;
//     } else if (computerChoice === "rock" && humanChoice === "paper") {
//       console.log("Human Wins! Paper beats Rock");
//       humanScore++;
//     } else if (computerChoice === "paper" && humanChoice === "scissors") {
//       console.log("Human Wins! Scissors beats Paper");
//       humanScore++;
//     } else if (computerChoice === "scissors" && humanChoice === "rock") {
//       console.log("Human Wins! Rock beats Scissors");
//       humanScore++;
//     } else {
//       console.log("error");
//     }
//   };

//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());
//   playRound(getHumanChoice(), getComputerChoice());

//   if (humanScore > computerScore)
//     console.log(
//       `Human Score: ${humanScore}, Computer Score: ${computerScore}, Human Wins!`
//     );
//   else if (humanScore < computerScore)
//     console.log(
//       `Human Score: ${humanScore}, Computer Score: ${computerScore}, Computer Wins!`
//     );
//   else if (humanScore === computerScore)
//     console.log(
//       `Human Score: ${humanScore}, Computer Score: ${computerScore}, Draw!`
//     );
//   else console.log("Error!");
// };

// if (getHumanChoice()) playGame();

// 1. get computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "paper";
  else return "scissors";
};

// 2. get human choice
const getHumanChoice = () => {
  let value;

  do {
    value = prompt("Select between: Rock, Paper, Scissors");
    if (value) value = value.toLowerCase();
  } while (value !== "rock" && value !== "paper" && value !== "scissors");

  return value;
};

// 3. play per round
const playRound = (humanChoice, computerChoice) => {
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

// 4. declare how much round per game
const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  const totalRound = 5;

  for (let i = 0; i < totalRound; i++) {
    const result = playRound(getHumanChoice(), getComputerChoice());

    if (result === "human") humanScore++;
    else if (result === "computer") computerScore++;
  }

  if (humanScore > computerScore)
    console.log(
      `Human Score: ${humanScore}, Computer Score: ${computerScore}, Human Wins!`
    );
  else if (humanScore < computerScore)
    console.log(
      `Human Score: ${humanScore}, Computer Score: ${computerScore}, Computer Wins!`
    );
  else
    console.log(
      `Human Score: ${humanScore}, Computer Score: ${computerScore}, It's Draw!`
    );
};

playGame();
