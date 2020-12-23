
function spawnDoors()
{
  if (World.frameCount%250===0)
  {
     
    door=createSprite(Math.round(random(100,600)),100,20,20);
    door.addImage(door_Img);
    door.velocityY=3;
    door.scale=1.5;

      door.depth= ghost.depth-1;
    
     climber=createSprite(door.x,door.y+100,20,20)
     climber.addImage(climber_Img);
     climber.velocityY=3;
       climber.depth= ghost.depth-1;

     invisClimber=createSprite(climber.x,door.y+105,20,20);
      invisClimber.debug=true;
      invisClimber.velocityY=3;
      invisClimber.setCollider("rectangle",0,0,100,10);

     invisClimber.depth=ghost.depth-1;
      
  }
}