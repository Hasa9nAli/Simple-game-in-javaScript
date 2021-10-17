let secrtNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Number! ";
  } else if (secrtNumber === guess) {
    document.querySelector(".number").textContent = secrtNumber;
    document.querySelector(".message").textContent = "✔ Number Correct ";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".score").textContent = score;
    let highScore = 0;
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (secrtNumber < guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO HIGH 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = score - 1;
    }
  } else if (secrtNumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = "TOO LOW 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = score - 1;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secrtNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guess ...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15%";
});
