var bullet, wall;
var thickness, speed, weight; 

function setup() {
  createCanvas(1600,400);
  speed = random (200, 250);
  weight = random(25,30);
  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200,60,200);

  bullet.velocityX = 10;

  thickness = random(22,83);


}

function draw() {
  background("black");
  
   if (hascollided (bullet,wall))
   {
     bullet.velocityx = 0;
     var damage = 0.5 * weight * speed*speed/(thickness * thickness* thickness);
     
     if(damage>10)
     {
       wall.shapeColor = color("red");
     }

     if(damage<10)
     {
       wall.shapeColor = color("green");
     }
    }

  hascollided(bullet,wall);

  drawSprites();
}

function hascollided(bullet,wall)
{
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}