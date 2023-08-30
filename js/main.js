// Rock, Paper, Scissors: Refactored with funtions

const initGame = () => {
  const startGame = confirm("Shall we play rock, paper, scissors?");
  startGame ? playGame() : alert("ok, may be next time");
};

// Game flow function

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const invalidChoice = () => {
  alert("You didn't enter rock, paper or scissors");
};

const getPlayerChoice = () => {
  return prompt("Please enter rock, paper or scissors.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind, may be next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const rps = ["rock", "paper", "scissors"];
  return rps[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? "Tie game!"
      : player === "rock" && computer === "paper"
      ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "paper" && computer === "scissors"
      ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
      : player === "scissors" && computer === "rock"
      ? `Player: ${player}\nComputer: ${computer}\nComputer Wins!`
      : `Player: ${player}\nComputer: ${computer}\nPlayer Wins!`;

  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play Again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};

initGame();
