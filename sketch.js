
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;  
const Body = Matter.Body;
var engine,world;



function setup() {
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    



    ellipseMode(RADIUS)
    rectMode(CENTER)
    imageMode(CENTER)
    
}

function draw() 
{
  background(0);
  Engine.update(engine);

  

}

