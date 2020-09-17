const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var obj, ground1, ball;
var engine, world;
var box1;
function setup()
{
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world;

 

  box1=new box (200,300,50,50);
 box2=new box  (220,100,50,50);
  ground1= new ground(200,390,400,20);
  

}

function draw()
{
  background("black");
  Engine.update(engine);

box1.display()
box2.display()
ground1.display()

}