function setup() {
  createCanvas(640, 480);
  background(0);
  stroke(255);


context.fillStyle= "#ffffff"; // sets color

context.fillRect(10,10,100,50); // sets top left location points x,y and then width and height
  line(10, 10, 90, 10); // x1, y1, x2, y2
    rect(20, 20, 80, 50); // x, y, width, height
    ellipse(50, 50, 50, 50); // centerX, centerY, width, height
}