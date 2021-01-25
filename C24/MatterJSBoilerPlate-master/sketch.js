
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var HAMMER;
var PLANE;
var STONE;
var RUBBER;
var SAND_1, SAND_2, SAND_3, SAND_4, SAND_5;
var IRON;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	HAMMER = new Hammer(100, 100);
	PLANE = new Plane(800, 650, 1800, 20);
	STONE = new Stone(1080, 625, 70, 70);
	RUBBER = new Rubber(480, 625, 50);
	SAND_1 = new Sand(100, 649.5, 15);
	SAND_2 = new Sand(400, 649.5, 15);
	SAND_3 = new Sand(700, 649.5, 15);
	SAND_4 = new Sand(1000, 619.5, 15);
	SAND_5 = new Sand(1300, 649.5, 15);
	IRON = new Iron(200, 625, 70, 40);
	
}	

function draw() {
  background("cyan");
  Engine.update(engine);
  HAMMER.display();
  PLANE.display();
  STONE.display();
  RUBBER.display();
  SAND_1.display();
  SAND_2.display();
  SAND_3.display();
  SAND_4.display();
  SAND_5.display();
  IRON.display();
 
}

//Hammer- YELLOW
//Plane- RED
//Stone- BLACK
//Rubber- BLUE
//Sand- PURPLE
//Iron- GREY
