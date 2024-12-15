// // 1. dapatkan pilihan komputer
// let result = "";
// let computerChoice = "";

// const getComputerChoice = () => {
//   const randomNumber = Math.floor(Math.random() * 10);
//   if (randomNumber < 3) computerChoice = "Rock";
//   else if (randomNumber > 3 && randomNumber <= 7) computerChoice = "Paper";
//   else computerChoice = "Scissors";
// };

// getComputerChoice();

// // 2. dapatkan pilihan user
// const userChoice = prompt("Pilih salah satu antara: 'Rock, Paper, Scissors'");

// // 3. jalankan permainan
// const gameStart = (user, computer) => {
//   if (user.toLowerCase() === "rock" && computer.toLowerCase() === "rock")
//     result = "Draw";
//   else if (user.toLowerCase() === "paper" && computer.toLowerCase() === "paper")
//     result = "Draw";
//   else if (
//     user.toLowerCase() === "scissors" &&
//     computer.toLowerCase() === "scissors"
//   )
//     result = "Draw";
//   else if (user.toLowerCase() === "rock" && computer.toLowerCase() === "paper")
//     result = "Computer Win";
//   else if (
//     user.toLowerCase() === "paper" &&
//     computer.toLowerCase() === "scissors"
//   )
//     result = "Computer Win";
//   else if (
//     user.toLowerCase() === "scissors" &&
//     computer.toLowerCase() === "rock"
//   )
//     result = "Computer Win";
//   else if (computer.toLowerCase() === "rock" && user.toLowerCase() === "paper")
//     result = "User Win";
//   else if (
//     computer.toLowerCase() === "paper" &&
//     user.toLowerCase() === "scissors"
//   )
//     result = "User Win";
//   else if (
//     computer.toLowerCase() === "scissors" &&
//     user.toLowerCase() === "rock"
//   )
//     result = "User Win";
//   else result = "diluar prediksi bmkg";
// };

// gameStart(userChoice, computerChoice);

// console.log(
//   `user memilih ${userChoice.toLowerCase()}, computer memilih ${computerChoice.toLowerCase()}, maka hasilnya ${result}!`
// );

// # SESUAI SCRIPT DARI TUGAS
// 1. get computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber < 3) return "rock";
  else if (randomNumber > 3 && randomNumber <= 7) return "paper";
  else return "scissors";
};

// 2. get human choice
const getHumanChoice = () => {
  return prompt("Choice between: Rock, Paper, Scissors").toLowerCase();
};

const playGame = () => {
  // 3. Declare Players Score
  let computerScore = 0;
  let humanScore = 0;

  // 4. Game Play
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("Draw");
      humanScore++;
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("Draw");
      humanScore++;
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("Draw");
      humanScore++;
      computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("Computer Wins! Paper beats Rock");
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("Computer Wins! Scissors beats Paper");
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("Computer Wins! Rock beats Scissors");
      computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
      console.log("Human Wins! Paper beats Rock");
      humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      console.log("Human Wins! Scissors beats Paper");
      humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      console.log("Human Wins! Rock beats Scissors");
      humanScore++;
    } else {
      console.log("error");
    }
  };

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore)
    console.log(
      `Human Score: ${humanScore}, Computer Score: ${computerScore}, Human Wins!`
    );
  else if (humanScore < computerScore)
    console.log(
      `Human Score: ${humanScore}, Computer Score: ${computerScore}, Computer Wins!`
    );
  else if (humanScore === computerScore)
    console.log(
      `Human Score: ${humanScore}, Computer Score: ${computerScore}, Draw!`
    );
  else console.log("Error!");
};

playGame();
