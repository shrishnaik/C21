var a,b,c
function setup() {
  createCanvas(800,400);
 A=createSprite(400, 200, 50, 50);
 A.shapeColor="red"
 B=createSprite(20,200,50,50);
 B.shapeColor="red"
 B.velocityX=4
 D=createSprite(350,200,50,50);
 D.shapeColor="red"
 D.velocityX=-4
 C=createSprite(200,350,50,50);
 C.shapeColor="red"
}

function draw() {
  background("yellow");
  if(collided(A,C)){
    A.shapeColor="orange"
    C.shapeColor="orange"

  }
  else{
    A.shapeColor="red"
    C.shapeColor="red"

  }
  A.x=mouseX
  A.y=mouseY  
  bounce(B,D)
  
  drawSprites();
}



