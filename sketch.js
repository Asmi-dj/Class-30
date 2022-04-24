const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var fruitImg;
var rabbit, rabbitImg;

function preload()
{
  bg_img = loadImage('background.png');
  fruitImg = loadImage('melon.png');
  rabbitImg = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20,{restitution: 1});
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rabbit = createSprite(310, 600, 50, 100);
  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.25;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  cutButton = createImg("cut_button.png");
  cutButton.position(230, 30);
  cutButton.size(30, 30)
  cutButton.mouseClicked(drop);

  imageMode(CENTER);
  
}

function draw() 
{
 
  background(51);
 

  image(bg_img,width/2,height/2,490,690);
  drawSprites();

  image(fruitImg,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 
   
}

function drop()
{
  rope.break();
  fruit_con.detach();
  fruit_con = null;

}
