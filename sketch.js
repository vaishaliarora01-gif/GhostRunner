var ghost, climber, door, tower, invisClimber;
var ghost_Jumping, ghost_standing, climber_Img, tower_img, door_Img;



function preload()
{
ghost_Jumping=loadImage("ghost-jumping.png");
climber_Img=loadImage("climber.png")
ghost_standing=loadImage("ghost-standing.png");
tower_img=loadImage("tower.png");
door_Img=loadImage("door.png");
}

function setup()
{
createCanvas(801,925);

console.log(windowHeight);  

tower=createSprite(400,50,801,925);
tower.addImage(tower_img);
tower.scale=1.5;
tower.velocityY=3;

ghost=createSprite(400,400,50,50);
ghost.addImage(ghost_standing);
ghost.scale=0.5
ghost.velocityY=-2;


}

function draw() 
{
background("white");

if(tower.y>height)
{
 tower.y=150;
}


if (keyDown("space"))
{
    ghost.velocityY=-3;
    
}
ghost.velocityY=ghost.velocityY+0.5;

if (keyDown("right"))
{
//ghost.velocityX=ghost.velocityX+0.1;
  ghost.x=ghost.x+1;  
    
}
if(keyDown("left"))
{
   //ghost.velocityX=ghost.velocityX-0.1;
   ghost.x=ghost.x-1;
}
console.log(mouseX);

drawSprites();
 spawnDoors();

/*if (ghost.isTouching(climber ))
{
 ghost.velocityY=0;
}*/
}





  
   
   
  










