const
  scoreUserElem = document.querySelector("span.score-user"),
  scoreComputerElem = document.querySelector("span.score-computer"),
  scoreTiesElem = document.querySelector("span.score-ties"),
  rockElem = document.getElementById("option-rock"),
  paperElem = document.getElementById("option-paper"),
  scissorElem = document.getElementById("option-scissors"),
  outputelem = document.getElementById("output");
;

var
  scoreUser = 0,
  scoreComputer = 0,
  scoreTies = 0;
;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function chooseMove(userChoice) {
  let computerChoice = getComputerChoice();
  let userWin = (
      (userChoice == "rock" && computerChoice == "scissors") ||
      (userChoice == "paper" && computerChoice == "rock") ||
      (userChoice == "scissors" && computerChoice == "paper")
    )
  let computerWin = (
    (computerChoice == "rock" && userChoice == "scissors") ||
    (computerChoice == "paper" && userChoice == "rock") ||
    (computerChoice == "scissors" && userChoice == "paper")
    )
  let result =
  (userWin)
    ? "User won"
    : (computerWin)
      ? "Computer won"
      : "It's a tie"
  return [userWin, computerWin, result];
}

function handleClick(move) {
  resetBorder();
  let elem = document.getElementById(`option-${move}`);
  elem.style.border = "1px solid #f0f0f0";
  [userWin, computerWin, result] = chooseMove(move);
  if (userWin){
    scoreUser++;
    outputelem.style.color = "aquamarine";
  } else
  if (computerWin) {
    scoreComputer++;
    outputelem.style.color = "yellow";
  } else {
    scoreTies++;
    outputelem.style.color = "white";
  }
  outputelem.innerHTML = result;
  updateScore(scoreUser, scoreComputer, scoreTies);
}

function resetBorder() {
  rockElem.style.border = "none";
  paperElem.style.border = "none";
  scissorElem.style.border = "none";
}

function updateScore(scoreUser, scoreComputer, scoreTies) {
  scoreUserElem.innerHTML = `${scoreUser}`;
  scoreComputerElem.innerHTML = `${scoreComputer}`;
  scoreTiesElem.innerHTML = `${scoreTies}`;
}