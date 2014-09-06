function setup() {
  createCanvas(500, 420);
  background(0);
  stroke(255);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(10, 10, 55, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 55, 50);
}