let img;
function preload() {
  img3 = loadImage('AK3.png');
}

function setup() {
  createCanvas(400, 400, WEBGL);

}

function draw() {
  background(0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(width / 2);
}