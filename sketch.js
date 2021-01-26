
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,hammer,stone,rubber;
var s1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    plane=new Plane (400,695,800,10);
	hammer=new Hammer(200,200,70,30);
    stone=new Stone(500,200,70,70);
    rubber=new Rubber(200,200,5);
    s1=new Sand(200,400,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  hammer.x=World.mouseX;
  hammer.y=World.mouseY;
  
 

plane.display();
hammer.display();
stone.display();
rubber.display();
s1.display();

}



