var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var img1 = "images/dice" + num1 + ".png";
var img2 = "images/dice" + num2 + ".png";

document.querySelector(".img1").src = img1;
document.querySelector(".img2").src = img2;

var title = document.querySelector("h1");

if (num1 > num2) {
  title.textContent = "Player 1 Wins!";
} else if (num2 > num1) {
  title.textContent = "Player 2 Wins!";
} else {
  title.textContent = "Draw!";
}