const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var stone, rubber, hammer;
function setup (){
    var canvas= createCanvas(1200,600);
    engine= Engine.create();
    world = engine.world;
    plane= new Plane(600,height,1200,20);
    Iron= new iron (300,350);
    stone= new stone(700,320,100,100);
    rubber = new rubber(900,450,70);
    hammer= new hammer(100,10);
}
function draw(){
    background("lightblue");
    Engine.update(engine);
    stone.display();
    plane.display();
    rubber.display();
    iron.display();
    hammer.display();
}