const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
  
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  

}


function draw() {
  background(51);
  Engine.update(engine);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

