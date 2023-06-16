//span elements
document.addEventListener("DOMContentLoaded", function() {
  const humanOutput = document.querySelector("#human");
  const computerOutput = document.querySelector("#computer");
  const resultOutput = document.querySelector("#result");
  const roundsOutput = document.querySelector("#roundsOutput");
  const highscoreOutput = document.querySelector("#highscoreOutput");
  const allTimeHighscoreValue = document.querySelector("#allTimeHighscoreValue");
  const resetButton = document.querySelector("#resetButton");
  
// Zet de standaard woorden op nul
  let highscore = 0;
  let allTimeHighscore = 0;
  let rounds = 0;

  // Eventlistener voor de keuze steen
  document.querySelector("#rock").addEventListener("click", function() {
    playGame("steen");
  });

  // Eventlistener voor de keuze papier
  document.querySelector("#paper").addEventListener("click", function() {
    playGame("papier");
  });

  // Eventlistener voor de keuze schaar
  document.querySelector("#scissors").addEventListener("click", function() {
    playGame("schaar");
  });

  // Eventlistener voor de resetknop
  resetButton.addEventListener("click", function() {
    resetGame();
  });

  // Eventlistener voor het afspelen van resetgeluid bij het hoveren over de resetknop
  resetButton.addEventListener("mouseenter", function() {
    playResetSound();
  });

  // Functie om het spel te spelen
  function playGame(humanChoice) {
    humanOutput.textContent = `${humanChoice}`;
    humanOutput.classList.add("choice");

    const computerChoice = getRandomChoice();
    computerOutput.textContent = `${computerChoice}`;
    computerOutput.classList.add("choice");

    const result = determineWinner(humanChoice, computerChoice);
    resultOutput.textContent = result;

    resultOutput.classList.remove("win", "loss");

    // Geeft het resultaat weer
    if (result === "Jij wint!") {
      resultOutput.classList.add("win");
    } else if (result === "Computer wint!") {
      resultOutput.classList.add("loss");
    }
  }

  // Functie om een willekeurige keuze voor de computer te genereren
  function getRandomChoice() {
    const choices = ["steen", "papier", "schaar"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  // Functie om te bepalen wie er wint
  function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "Gelijkspel! Speel opnieuw.";
    } else if (
      (humanChoice === "steen" && computerChoice === "schaar") ||
      (humanChoice === "schaar" && computerChoice === "papier") ||
      (humanChoice === "papier" && computerChoice === "steen")
    ) {
      return "Jij wint!";
    } else {
      return "Computer wint!";
    }
  }

  // Functie om de score bij te werken
  function updateScore(result) {
    if (result === "Jij wint!") {
      highscore++;
      if (highscore > allTimeHighscore) {
        allTimeHighscore = highscore;
      }
    } else if (result === "Computer wint!") {
      highscore = 0;
    }

    highscoreOutput.textContent = `Highscore: ${highscore}`;
    allTimeHighscoreValue.textContent = allTimeHighscore;
  }

  // Functie om het aantal rondes bij te werken
  function updateRounds() {
    rounds++;
    roundsOutput.textContent = `Rondes: ${rounds}`;
  }

  // Functie om het spel te resetten
  function resetGame() {
    highscore = 0;
    rounds = 0;
    highscoreOutput.textContent = `Highscore: ${highscore}`;
    roundsOutput.textContent = `Rondes: ${rounds}`;
    resultOutput.textContent = "";
    humanOutput.textContent = "";
    computerOutput.textContent = "";
    resultOutput.classList.remove("win", "loss");
  }
});

//reset geluidje
var resetButton = document.getElementById("resetButton");
var resetSound = document.getElementById("resetSound");

resetButton.addEventListener("mouseover", function() {
  resetSound.play();
});
