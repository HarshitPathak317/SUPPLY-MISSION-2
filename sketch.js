var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800 , 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.8});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);



	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	 var box1_op={
		isStatic: true
	}
	box1 = createSprite(400,650,200,20,box1_op);
	box1.shapeColor="red";
	World.add(world,box1);

	var box2_op={
		isStatic: true
	}
	box2 = createSprite(490,600,20,100,box2_op);
	box2.shapeColor="red";
	World.add(world,box2);

	var box3_op={
		isStatic: true
	}
	box3 = createSprite(310,600,20,100,box3_op);
	box3.shapeColor="red";
	World.add(world,box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
 
 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	
  }
}