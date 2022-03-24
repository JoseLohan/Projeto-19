var astronaut, astronaut_Img, astronautUp_Img, astronautDown_Img;
var space, space_Img;
var asteroid, asteroid_Img;
var pandoraPalace_Sound;
var asteroidGp;
var gameOver, gameOver_Img;
var Restart, Restart_Img
var edges
var astronaut_inv

var Score = 0;
var Recorde = 0;

var PLAY = 1;
var END = 0;
gameState = PLAY;


function preload(){
  astronaut_Img = loadAnimation("astronaut.png");
  astronautUp_Img = loadAnimation("astronautUp.png");
  astronautDown_Img = loadAnimation("astronautDown.png");

  space_Img = loadImage("Space.png");

  asteroid_Img = loadAnimation("Obstacle.png");
  pandoraPalace_Sound = loadSound("Loop_Sound.m4a");


}

function setup() {
 createCanvas(800,300);

 space = createSprite(200,height/2,width,height);
 space.addImage(space_Img);

 edges = createEdgeSprites();

 asteroidGp = new Group()
 
 pandoraPalace_Sound.play();
}

function draw() {
 background(0);
 
 space.velocityX = 3
  if(space.x > 590){
  space.x = 200
  }

  astronaut.y = astronaut_inv.y
  astronaut_inv.debug = true

  if (keyDown("down")) {
    astronaut.changeAnimation("Down");
    astronaut_inv.velocityY = +5;
  }

  if (keyDown("up")) {
    astronaut.changeAnimation("Up");
    astronaut_inv.velocityY = -5;
  }

  astronaut_inv.collide(edges);

 spawnAsteroids();
 drawSprites();
}
function spawnAsteroids() {
  if (frameCount%95 === 0) {
    asteroid = createSprite (800,2,30,30);
    asteroid.velocityX = -2;
    asteroid.addImage (asteroid_Img);
    asteroid.y = random(50,250);
    space.depth = asteroid.depth-1;
    asteroid.scale = random(0.5,1);
    asteroid.lifetime = 410;
    asteroidGp.add(asteroid);
  }
}