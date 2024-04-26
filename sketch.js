

let img1, img2, img3;
let song;
var maxDiameter; 
var theta; 

//Images loading
function preload(){
  img1 = loadImage('AK1.jpeg');
  img2 = loadImage('AK2.jpeg');
  //img3 = loadImage('AK3.png');
  
}

function setup() {
  song = loadSound('PlayersAudio.wav');
  createCanvas(400, 400);
  
// Pulsing cirlce variables  
  maxDiameter = 30; 
	theta = 200; 
  
}

function draw() {
  background(220);

image(img1, 0, 0, width, height);
//image(img2, 100, 100, width, height);
  img2.resize(220, 220);
  image(img2, 250, 250);

  //pulsing circle 
  noStroke();
  
var diam = 50 + sin(theta) * maxDiameter ;

fill(255, 200, 200)
ellipse(width/1.6,height/1.6, diam, diam); 

  
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
  
}

function mousePressed() {
  if (song.isPlaying()) {

    song.stop();
   
  } else {
    song.play();
    
  }
}