let off = 0;
let speed = .025;
let xrate = 1/1000;

let wave1 = n => sin(n);
let wave2 = n => sin(n*((1+5**.5)/2));

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(230);
  translate(0, height/2);
  noFill();

  //stroke(255,0,0,mouseX/width*255);
  stroke(255,0,0);
  beginShape();
  for(let x = 0; x < width; x += 1) {
    let y = wave1(off-x*xrate) * 200;
    if (off-x*xrate > 0 || true) vertex(x, y);
  }
  endShape();

  //stroke(0,0,255,mouseX/width*255);
  stroke(0,0,255);
  beginShape();
  for(let x = 0; x < width; x += 1) {
    let y = wave2(off-x*xrate) * 200;
    if (off-x*xrate > 0 || true) vertex(x, y);
  }
  endShape();

  stroke(0,255,0);
  beginShape();
  for(let x = 0; x < width; x += 1) {
    let y = (wave1(off-x*xrate) + wave2(off-x*xrate)) * 100;
    if (off-x*xrate > 0 || true) vertex(x, y);
  }
  endShape();

  //speed = (height - mouseY) / height / 10;
  //xrate = (height - mouseY) / height / 50;
  off += speed;
}

function mousePressed() {
  //off = 0;
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}
