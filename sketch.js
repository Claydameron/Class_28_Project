var paper,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	paper = new Paper(200,100);
	dustbin = new Dustbin(600,590);


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 sling = new Sling(paper.body,{x:200,y:100});
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");
  paper.display();
  dustbin.display();
  sling.display();




  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    sling.fly();
}



