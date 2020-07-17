var ball1, target1 , ground , target2, target3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);
 
	engine = Engine.create();
	world = engine.world;

var ground_options={
  isStatic:true
}
ground = createSprite(600,400,1200,20)

target1 = createSprite(900,380,150,15);
target1.shapeColor = "white";
target1.scale = 1;
target2 = createSprite(819,337,15,100);
target2.shapeColor = "white";
target2.scale = 1;
target3 = createSprite(980,337,15,100);
target3.shapeColor = "white";
target3.scale = 1;

var ball_options ={
  restitution:true
}

ball1=  new Bodies.circle(450,450,50,ball_options);
ball1.shapeColor = "white";
ball1.scale = 1;
World.add(world,ball1);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  ellipse(300,320,30,35);

  if(keyDown(RIGHT_ARROW)){
    ball1.velocityX = 3;
  }

  
    
  drawSprites();
 
}


function keyDown(){
  if( keyDown=== RIGHT_ARROW){
      ball1.velocityX = 3;
     // ball1.velocityY = 3;
      }

}


