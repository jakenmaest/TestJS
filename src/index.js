import "./styles.css";

// Init Game Environment
let canvas = document.getElementById("gameScreen");
var screenWidth = canvas.width;
var screenHeight = canvas.height;
let ctx = canvas.getContext("2d");
console.log(screenWidth, screenHeight);
class Card {
  constructor(x, y, width, height) {}
}
class Player {
  constructor(screenWidth, screenHeight, bigScreen) {
    if (bigScreen) {
      this.width = 100;
      this.height = 300;
    }
  }
  draw(ctx) {}
}

ctx.fillstyle = "#f23499";
ctx.clearRect(0, 0, screenWidth, screenHeight);
ctx.fillstyle = "#00ff99";
ctx.fillRect(200, 220, 200, 200);
