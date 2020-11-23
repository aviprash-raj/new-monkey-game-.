
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score

var survivalTime = 0

var banana,obstacle

function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  //creating monkey
  monkey = createSprite(80,351,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  //creating ground
  ground = createSprite(400,390,900,10);
  console.log = (ground.x);

}


function draw() {
background("white")
  
  ground.velocityX = -4;
  //ground.x = ground.width/2;
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
     monkey.velocityY = -12;
     }
  
  monkey.velocityY = monkey.velocityY + 0.5

monkey.collide(ground);

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50);
  
  
  
  Banana();
  Obstacle();
  
  drawSprites();
  
}

function Banana(){
   if(frameCount%80===0){
  banana = createSprite(400,200,20,20);
  banana.y = Math.round(random(130,210)); 
  banana.addImage(bananaImage);
  banana.velocityX = -2
     banana.scale = 0.1
     banana.liftime = 300;
     
     bananaGroup.add(banana);
   }
   }

function Obstacle(){
   if(frameCount%300===0){
  obstacle = createSprite(400,360,20,20);
  obstacle.X = Math.round(random(10,10)); 
  obstacle.velocityX = -2;  
     obstacle.lifetime = 250;
     obstacle.addImage(obstacleImage);
  obstacle.scale = 0.15;    
 
   obstacleGroup.add(obstacle);
   }
}
  