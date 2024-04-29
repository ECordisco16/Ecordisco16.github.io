let img1, img2, img3;
let song;
let iconCube;
var maxDiameter; 
var theta; 

//Images loading
function preload(){
  img1 = loadImage('AK1.jpeg');
  img2 = loadImage('AK2.jpeg');
  img3 = loadImage('AK3.png');
  
}

function setup() {
  song = loadSound('PlayersAudio.wav');
  createCanvas(400, 400, WEBGL);
  //img3.play();
  
// Pulsing cirlce variables  
  maxDiameter = 30; 
	theta = 200; 
  
}

function draw() {
  background(220);

image(img1, -200, -200, width, height);
//image(img2, 100, 100, width, height);
  img2.resize(220, 220);
  image(img2, 40, 40);

  //pulsing circle 
  noStroke();
  
var diam = 50 + sin(theta) * maxDiameter ;

fill(255, 200, 200)
ellipse(width/-3,height/-3, diam, diam); 

  
 theta += .02; 

// Flower 
  
   fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  translate(60, 60);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  
// rotating cube 
  
  
  //iconCube.setPosition(10,10,10)
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img3);
  box(width / 5);
  
}

//Play Song
function mousePressed() {
  if (song.isPlaying()) {

    song.stop();
   
  } else {
    song.play();
    
  }
}