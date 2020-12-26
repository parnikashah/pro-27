
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600, 700);
	engine = Engine.create();

	world = engine.world;
bob1=new Bob(150,550,30);
bob2=new Bob(210,550,30);
bob3=new Bob(270,550,30);
bob4=new Bob(330,550,30);
bob5=new Bob(390,550,30);

roof1=new Roof(300,110,550,50)

rope1=new Rope (bob1.body,roof1.body,-120,0)
rope2=new Rope (bob2.body,roof1.body,-60,0)
rope3=new Rope (bob3.body,roof1.body,0,0)
rope4=new Rope (bob4.body,roof1.body,+60,0)
rope5=new Rope (bob5.body,roof1.body,+120,0)

	



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  background("white");

 roof1.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-80});
	}  
 
}


