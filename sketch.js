var PLAY = 1;
var END = 0;
var gameState = PLAY;
var food,foodCollectSound;
var fox, fox_running, fox_collided;
var ground, invisibleGround, groundImage;
var coin1,coin2,coin3,coin4;
var coin1Group,coin2Group,coin3Group,coin4Group;
var cactusGroup,cactus1,cactus2,cactus3;

var score=0;
var gameOverImg,restartImg
var jumpSound , checkPointSound, dieSound

var eagle, eagle_flying;
var bg;
function preload(){
  fox_running = loadAnimation("fox images/fox2.png","fox images/selected 1.png")
  fox_collided = loadImage("fox images/death.png");
  food=loadImage("Chicken.png");
  eagle_flying=loadAnimation("eagle img/eagle1.png","eagle img/eagle2.png","eagle img/eagle3.png");

  groundImage = loadImage("ground2.png");
  foodCollectSound=loadSound("coincollect.wav")
 cactus1=loadImage("Cactus/Cactus1.png")
 cactus2=loadImage("Cactus/Cactus2.png")
 cactus3=loadImage("Cactus/Cactus3.png")
  bg=loadImage("background.jfif")
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
}

function setup() {
  createCanvas(600, 200);

  
  
  fox = createSprite(50,160,20,50);
  fox.addAnimation("running", fox_running);
  fox.addAnimation("collided", fox_collided);
  

  fox.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
 cactusGroup=new Group();
 coinGroup=new Group();
  
  
  
 
 
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
}

function draw() {
  
  background(bg);
  spawnObstacles();
  spawnEagle();
  spawnFood(); 
  if(coinGroup.isTouching(fox)){
score=score+2;
coinGroup.destroyEach();
 }
 if(fox.isTouching(cactusGroup)){
   fox.
 }
  drawSprites();

  textSize(20);
  fill("blue");
  text("score:"+score,500,50);
  if(keyDown ("space")){
    fox.velocityY=-2;
    
  }
  fox.velocityY=fox.velocityY+0.1;
  fox.collide(invisibleGround)
  
}






function spawnEagle(){
  if(frameCount%700===0){
    eagle=createSprite(600,50,35,90);
    eagle.addAnimation("flying", eagle_flying);
    eagle.scale=0.2;
    eagle.velocityX=-4;
  }
}
function spawnFood(){
if(frameCount%250===0){
var coin1=createSprite(600,160,10,10);
coin1.addImage(food);
coin1.scale=0.1;
coin1.velocityX=-4;
coin1.debug="true"
coin2=createSprite(620,160,10,10);
coin2.addImage(food);
coin2.scale=0.1;
coin2.velocityX=-4;
coin3=createSprite(640,160,10,10);
coin3.addImage(food);
coin3.scale=0.1;
coin3.velocityX=-4;
coin4=createSprite(660,160,10,10);
coin4.addImage(food);
coin4.scale=0.1;
coin4.velocityX=-4;
coinGroup.add(coin1)
coinGroup.add(coin2)
coinGroup.add(coin3)
coinGroup.add(coin4);

}



}

function spawnObstacles(){
var rand=Math.round(random(1,3));
if(frameCount%400===0){
cactus=createSprite(600,150,10,10);
cactus.velocityX=-4
cactus.scale=0.5;
switch(rand){
  case 1: cactus.addImage(cactus1)
  break;
  case 2: cactus.addImage(cactus2)
  break;
  case 3: cactus.addImage(cactus3)
  break;

}
cactusGroup.add(cactus);
}
}