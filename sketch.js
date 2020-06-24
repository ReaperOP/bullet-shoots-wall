var bullet1, wall1;
var bullet2,wall2;
var thickness, speed, weight



function setup() {
  createCanvas(1200,400);

thickness= random(22,83)
speed = random(223,321)
weight = random(30,52)


bullet1 = createSprite(100, 200, 20, 10);
bullet1.shapeColor = "white"
 wall1 = createSprite(500,200,thickness,height/2)
 wall1.shapeColor = "blue"

bullet2 = createSprite(200,100,20,10);
bullet2.shapeColor = "white"
wall2 = createSprite(500,100,10,50);
wall2.shapeColor = "blue"
}

function draw() {
  background(200,255,255); 

if(bullet1.collide(wall1)){
  wall1.shapeColor = "red"
}
if(bullet2.collide(wall2)){
  wall2.shapeColor = "green"

  bullet1.velocityX = 60;

  bullet2.velocityX = 50;

  if(hasColiided1(bullet1,wall1)){
    bullet1.velocityX = 0
    var damage = 0.5*32*223*223/(70*70*70);
    if(damage = 3.68){
      wall1.shapeColor = "green"
    }
    if(damage>10){
      wall1.shapeColor = "red"
    }
  }
  if(hasColiided2(bullet2,wall2)){
    bullet2.velocityX = 0
    var damage = 0.5*32*223*223/(70*70*70);
    if(damage = 3.68){
      wall2.shapeColor = "green"
    }
    if(damage>10){
      wall2.shapeColor = "red"
    }
  }

  drawSprites();
}

function hasCollided1(bullet1, wall1){
  bullet1RightEdge = bullet1.x +bullet1.width;
  wall1LeftEdge = wall1.x
  if(bullet1RightEdge>=wall1LeftEdge){
    return true
  }
return false
}
s}
function hasCollided2(bullet2, wall2){
  bullet2RightEdge = bullet2.x+bullet2.width;
  wall2LeftEdge = wall2.x
  if(bullet2RightEdge>=wall2LeftEdge){
    return true
  }
return false
}
