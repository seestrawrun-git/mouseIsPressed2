let balls = [];
let numBalls = 100;

function setup() {
  background(220, 60);
  createCanvas(400,400);
  
  for(let i = 0; i < numBalls; i++){
    balls.push(new Ball);
  }
}

function draw() {
  for(let i = 0; i < numBalls; i++) {
    if(mouseIsPressed){
      balls[i].show();
      balls[i].move();
    }
    // balls[i].show();
    // balls[i].move();
  }
}

function mousePressed() {
  for(let i =0; i<numBalls;i++) {
    
  }
}

class Ball {
  constructor(position, speed,  radius) {
    this.position = createVector(random(0, width), random(0, height));
    this.speed = createVector(random(3),random(3));
    this.radius = random(15,  30);
  }
  show() {
    fill(random(100,120), random(20,100), random(40,100));
    ellipse(this.position.x, this.position.y, this.radius);
  }
  move() {
    this.position.add(this.speed);
    if(this.position.x > width || this.position.x < 0) {
      this.speed.x*= -1;
    }
    if(this.position.y >height ||this.position.y<0) {
      this.speed.y*= -1;
    }
  }
}