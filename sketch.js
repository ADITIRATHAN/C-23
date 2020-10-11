const Engine=Matter.Engine; //create the physics engine
const World= Matter.World; // create the physical world
const Bodies = Matter.Bodies  //create the physical objects




function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world=engine.world;

 box1 = new Box(200,300,50,50);
box2 = new Box(240,100,50,100);
  
ground = new Ground(200,390,400,20);

}

function draw() {
  background(0,0,0);
  Engine.update(engine) ; 
  box1.display();
  box2.display();
  ground.display();
}