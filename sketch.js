var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune;
var sun_image,mercury_image,venus_image,earth_image,mars_image,jupiter_image,saturn_image,uranus_image,neptune_image;
var angle = 0;
var anglespeed = 0.2;
var sunRadius;

function preload(){
sun_image = "u.png";
mercury_image = "m.png";
venus_image = "ve.png";
earth_image = "e.png";
mars_image = "m.png";
jupiter_image = "ju.png";
saturn_image = "s.jpg";
uranus_image = "u.png";
neptune_image = "n.jpg"; 
}
function setup() {
  createCanvas(800,800);
 //creating the sun
  sun = createSprite(0,0);
  sun.addImage("sun", sun_image);
  sun.scale = 0.3;
  sun.setCollider("circle",-85,-60,140);
  
  //creating mercury
  mercury = createSprite(70,50);
  mercury.addImage("mercury",mercury_image);
  mercury.scale = 0.1;
  mercury.setCollider("circle", 0, 0, 300);
  

  //creating venus
  venus = createSprite(210,60);
  venus.addImage("venus",venus_image);
  venus.scale = 0.15;

  
  //creating earth
  earth = createSprite(150,-18);
  earth.addImage("earth",earth_image);
  earth.scale = 0.22;

  //creating mars
  mars = createSprite(30,220);
  mars.addImage("mars", mars_image);
  mars.scale = 0.2;

  //creating jupiter
  jupiter = createSprite(-180,210);
  jupiter.addImage("jupiter", jupeter_image);
  jupiter.scale = 0.3;

  //creating saturn
  saturn = createSprite(340,-30);
  saturn.addImage("saturn", saturn_image);
  saturn.scale = 0.3;

  //creating uranus
  uranus = createSprite(220,350);
  uranus.addImage("uranus", uranus_image);
  uranus.scale = 0.2;

  //creating neptune
  neptune = createSprite(-340,-320);
  neptune.addImage("neptune", neptune_image);
  neptune.scale = 0.1;
}

function draw() {
  background(0);  

  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(angle);

  if(World.frameCount%10===0){
    sun.scale = sun.scale+0.1;
  }
  if (isTouching(sun,mercury)){
    console.log("insideisTouching");
    mercury.destroy();   
  }
  

  //console.log(frameCount);
  drawSprites();
}