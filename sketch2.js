function setup() {
  createCanvas(500, 420);
  background(0);
  stroke(255);
   noFill();
 // x1, y1, x2, y2
    ctx.fillStyle="rgb(200,0,0)"
    ctx.fillRect(60, 20, 120, 20); // x, y, width, height

    ctx.fillStyle="rgb(0,0,200,0.5)";
    ctx.fillRect(50,30,130,30);
    ctx.fillRect(50,40,130,40);

}