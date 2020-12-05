
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5
var roof1

var rope1,rope2,rope3,rope4,rope5


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	roof1 = new Roof(360,100,250,18);

	bobObj1 = new Bob(275,300,20);
	bobObj2 = new Bob(315,300,20);
	bobObj3 = new Bob(355,300,20);
	bobObj4 = new Bob(395,300,20);
	bobObj5 = new Bob(435,300,20);
	
	rope1 = new Rope(bobObj1.body, {x: 280, y: 100});
	rope2 = new Rope(bobObj2.body, {x: 320, y: 100});
	rope3 = new Rope(bobObj3.body,{x: 360, y: 100});
	rope4 = new Rope(bobObj4.body,{x:400,y:100});
	rope5 = new Rope(bobObj5.body,{x:440,y:100});
	
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  roof1.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x: -100,y: -100});
	}
}



