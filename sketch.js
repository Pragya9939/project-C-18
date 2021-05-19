var road,youngster,money,preciousStone,jewels,swrod;
var roadImg,youngsterImg,moneyImg,preciousStoneImg,jewelsImg,swrodImg;
var treasuryCollection = 0;
var moneyG,preciousStoneG,jewelsG,swrodGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload()
{
  roadImg          =  loadImage("Road.png");
  youngsterImg     = loadAnimation("Runner-1.png","Runner-2.png");
  moneyImg         = loadImage("money.png");
  preciousStoneImg = loadImage("preciousStone.png");
  jewelsImg        = loadImage("jewels.png");
  swrodImg         = loadImage("swrod.png");
  endImg           =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);

road=createSprite(width/2,200);
road.addImage(roadImg);
road.velocityY = 5;

youngster = createSprite(width/2,height-20,20,20);
youngster.addAnimation("SahilRunning",youngsterImg);
youngster.scale=0.09;
  
moneyG        = new Group();
preciousStoneG= new Group();
jewelsG       = new Group();
swrodGroup    = new Group();
}

function draw() {

  if(gameState===PLAY){
  background(0);
  youngster.x = World.mouseX;
  
  edges= createEdgeSprites();
  youngster.collide(edges);
  
  if(road.y > height ){
    road.y = height/2;
  }
    createmoney();
    createpreciousStone();
    createjewels();
    createswrod();

    if (moneyG.isTouching(youngster)) {
      moneyG.destroyEach();
      treasuryCollection=treasuryCollection + 50;
    }
    else if (preciousStoneG.isTouching(youngster)) {
      preciousStoneG.destroyEach();
      treasuryCollection=treasuryCollection + 100;
      
    }else if(jewelsG.isTouching(youngster)) {
      jewelsG.destroyEach();
      treasuryCollection= treasuryCollection + 150;
      
    }else{
      if(swrodGroup.isTouching(youngster)) {
        gameState=END;
        
        youngster.addAnimation("SahilRunning",endImg);
        youngster.x=width/2;
        youngster.y=height/2;
        youngster.scale=0.6;
        
        moneyG.destroyEach();
        preciousStoneG.destroyEach();
        jewelsG.destroyEach();
        swrodGroup.destroyEach();
        
        moneyG.setVelocityYEach(0);
        preciousStoneG.setVelocityYEach(0);
        jewelsG.setVelocityYEach(0);
        swrodGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(30);
  fill("orange");
  text("Treasury -  "+ treasuryCollection,width-230,40);
  }

}

function createmoney() {
  if (World.frameCount % 200 == 0) {
  var money = createSprite(Math.round(random(50, width-50),40, 10, 10));
  money.addImage(moneyImg);
  money.scale=0.12;
  money.velocityY = 5;
  money.lifetime = 200;
  moneyG.add(money);
  }
}

function createpreciousStone() {
  if (World.frameCount % 320 == 0) {
  var preciousStone = createSprite(Math.round(random(50, width-50),40, 10, 10));
  preciousStone.addImage(preciousStoneImg);
  preciousStone.scale=0.03;
  preciousStone.velocityY = 5;
  preciousStone.lifetime = 200;
  preciousStoneG.add(preciousStone);
}
}

function createjewels() {
  if (World.frameCount % 410 == 0) {
  var jewels = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jewels.addImage(jewelsImg);
  jewels.scale=0.13;
  jewels.velocityY = 5;
  jewels.lifetime = 200;
  jewelsG.add(jewels);
  }
}

function createswrod(){
  if (World.frameCount % 530 == 0) {
  var swrod = createSprite(Math.round(random(50, width-50),40, 10, 10));
  swrod.addImage(swrodImg);
  swrod.scale=0.1;
  swrod.velocityY = 4;
  swrod.lifetime = 200;
  swrodGroup.add(swrod);
  }
}