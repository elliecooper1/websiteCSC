const bankButton = document.getElementById("BankP");
const gameButton = document.getElementById("GameP");
const regExpButton = document.getElementById("RegExp");
const tttButton = document.getElementById("TTT");

bankButton.addEventListener("click", function() {
  window.open("BankProject.html", "_blank");
});

gameButton.addEventListener("click", function() {
  window.open("GameProject.html", "_blank");
});

regExpButton.addEventListener("click", function() {
  window.open("RegulatingExpression.html", "_blank");
});

tttButton.addEventListener("click", function() {
  window.open("TikTacToe.html", "_blank");
});

