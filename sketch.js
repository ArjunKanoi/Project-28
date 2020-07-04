var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	ground = new Ground(600,height,1200,20)
	paper = new Paper(100,320,20,20);
	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
	 box1 = new Box(700,680,100,20);
	 box2 = new Box(650,600,20,140);
	 box3 = new Box(750,600,20,140);
	 dustbin = new Bin(700,640,100,140);
	 slingshot = new Slingshot(paper.body, {x:100, y:200});
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  paper.display();
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  dustbin.display();

 

  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:420})
	}
}

function mouseDragged(){
	Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
	}
	
	function mouseReleased(){
		slingshot.fly();
		}
	