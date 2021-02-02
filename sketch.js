
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane,hammer,stone,rubber,iron;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;
var engine,world;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    plane=new Plane (400,695,800,10);
	hammer=new Hammer(200,200,70,30);
    stone=new Stone(500,200,70,70);
    rubber=new Rubber(200,200,70,70);
    iron=new Iron(400,200,50,60);
    s1=new Sand(100,600,10,10);
    s2=new Sand(200,650,10,10);
    s3=new Sand(360,450,10,10);
    s4=new Sand(400,410,10,10);
    s5=new Sand(500,450,10,10);
    s6=new Sand(650,420,10,10);
    s7=new Sand(250,490,10,10);
    s8=new Sand(100,150,10,10);
    s9=new Sand(600,300,10,10);
    s10=new Sand(600,500,10,10);

	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  
 

plane.display();
hammer.display();
stone.display();
rubber.display();
iron.display();
s1.display();
s2.display();
s3.display();
s4.display();
s5.display();
s6.display();
s7.display();
s8.display();
s9.display();
s10.display();
}



