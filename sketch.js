let img1, img2, img3, img4, img5, img6;
let song;
let iconCube;
var maxDiameter; 
var theta; 

//Images loading
function preload(){
  img1 = loadImage('AK1.jpeg');
  img2 = loadImage('AK2.jpeg');
  img3 = loadImage('AK3.png');
  img4 = loadImage('A.png');
  img5 = loadImage('K.png');
  img6 = loadImage('Mirror.png');
  
}

function setup() {
  song = loadSound('PlayersAudio.wav');
  createCanvas(400, 400, WEBGL);
  //img3.play();
  
// Pulsing cirlce variables  
  maxDiameter = 30; 
	theta = 200; 

   //maxDiameter = 30; 
	//theta = 100; 
  
}

function draw() {
  //background(220);
  
  //flower 
  ellipse(-200,-200,4000,4000);
  //ellipse(100,115,30,30);
 // ellipse(100,83,30,30);
  //ellipse(80,100,30,30);
  //fill(255, 230, 51);
  //fill (225, random(225), random(225));
  //ellipse(100,100,22,22); 
  
  

  //anna 
image(img1, -200, -200, width, height);
//image(img2, 100, 100, width, height);
  img2.resize(220, 220);
  image(img2, 40, 40);
  
// Letters 

image(img4, 55, -200,);
  img4.resize(70, 70);
image(img5, 120, -190,);
  img5.resize(65, 65);
  
  //image(img5, 40, 40);
  
image(img6,-280,-0);
  img6.resize(300,250)
  

  //pulsing circle 
  noStroke();
  
var diam = 50 + sin(theta) * maxDiameter ;

fill(255, 200, 200)
ellipse(width/-3,height/-3, diam, diam); 

 theta += .01; 
  
  
  
  noStroke();
  
var diam = 30 + sin(theta) * maxDiameter ;

fill(195, 200, 200)
ellipse(width/-2, height/-2.5, diam, diam); 

 theta += .01; 

  
  noStroke();
  
var diam = 40 + sin(theta) * maxDiameter ;

fill(225, 200, 200)
ellipse(width/-3, height/-2, diam, diam); 

 theta += .01; 


// Flower 
  
   fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  translate(80, 40);
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