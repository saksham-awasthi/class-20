var fixedRect,movingRect,rect1,rect2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect1 = createSprite(300,100,50,50);
  rect2 = createSprite(300,300,50,50);
  rect1.velocityY = 4;
  rect2.velocityY = -4;

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";

  }

  if(rect1.y-rect2.y<rect1.height/2+rect2.height/2 &&
    rect2.y-rect1.y<rect1.height/2+rect2.height/2 ){
      rect1.velocityY = rect1.velocityY * (-1);
      rect2.velocityY = rect2.velocityY * (-1);

    }
  drawSprites();
}
