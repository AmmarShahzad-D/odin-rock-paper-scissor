const getComputerChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const result = Math.floor(Math.random() * options.length);
  const c_choose = options[result];
  console.log(c_choose);
  return c_choose;
};

const getPlayerChoice = () => {
  const playerChoice = window.prompt("Please enter  Rock Paper or Scissor");
  const p_choose = playerChoice.toLowerCase();
  console.log(p_choose);
  return p_choose;
};

const getPlayerSelection = (c_choose, p_choose) => {
  if (c_choose === p_choose) {
    console.log("Math tie");
  } else if (
    (c_choose === "rock" && p_choose === "scissor") ||
    (c_choose === "paper" && p_choose === "rock") ||
    (c_choose === "scissors" && p_choose === "paper")
  ) {
    // return "Computer Wins";
    console.log("Computer wins");
  } else {
    // return "You Wins";
    console.log("You Wins");
  }
};

const game = () => {
  let computerWins = 0;
  let playerWins = 0;
  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    const result = getPlayerSelection(computerChoice, playerChoice);
    if (result === "Computer wins") {
      computerWins++;
    } else if (result === "You Wins") {
      playerWins++;
    }
    console.log(`Round ${i + 1} : ${result} `);
  }

  if (playerWins > computerWins) {
    console.log("You Won the  game");
  } else if (computerWins > playerWins) {
    console.log("You lose the game , Computer Wins  ");
  } else {
    console.log("it's Tie!");
  }
};

game();
