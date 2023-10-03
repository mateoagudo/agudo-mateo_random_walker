let w1, w2, w3, w4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w1 = new Walker(windowWidth / 2, windowHeight / 2);
  w2 = new Walker(windowWidth / 2, windowHeight / 2);
  w3 = new Walker(windowWidth / 2, windowHeight / 2);
  w4 = new Walker(windowWidth / 2, windowHeight / 2);
}

function draw() {
  w1.update();
  w1.display();
  w2.update();
  w2.display();
  w3.update();
  w3.display();
  w4.update();
  w4.display();
}

class Walker {
  constructor(_posX, _posY) {
    this.posX = _posX;
    this.posY = _posY;
    this.vel = random(1, 5);
    this.color = color(255, random(0, 50), random(0, 200));
    this.esCirculo = random() > 0.5 ? true : false;
    //this.r = random();
    //this.esCirculo;
    //if (r > 0.5) {
    //this.esCirculo = true;
    //} else {
    // this.esCirculo = false;
    //}
  }
  update() {
    this.posX += random(-this.vel, this.vel);
    this.posY += random(-this.vel, this.vel);
  }
  display() {
    fill(this.color);
    if (this.esCirculo > 0.5) {
      stroke(255, 50);
      strokeWeight(3);
      circle(this.posX, this.posY, 10);
    } else {
      stroke(255, 50);
      strokeWeight(3);
      rect(this.posX, this.posY, 10, 10);
    }
  }
}
