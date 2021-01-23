const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var score = 0;

function preload(){
}

function setup() {
  createCanvas(1280, 689);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

  ground = new Ground(displayWidth/2, 670, displayWidth, 60);

  stand1 = new Ground(550, 500, 220, 10);
  stand2 = new Ground(950, 350, 190, 10);

//stand 1
  //level 1
  box1 = new Box(460, 480, 30, 30);
  box2 = new Box(490, 480, 30, 30);
  box3 = new Box(520, 480, 30, 30);
  box4 = new Box(550, 480, 30, 30);
  box5 = new Box(580, 480, 30, 30);
  box6 = new Box(610, 480, 30, 30);
  box7 = new Box(640, 480, 30, 30);

  //level 2
  box8 = new Box(475, 450, 30, 30);
  box9 = new Box(505, 450, 30, 30);
  box10 = new Box(535, 450, 30, 30);
  box11 = new Box(565, 450, 30, 30);
  box12 = new Box(595, 450, 30, 30);
  box13 = new Box(625, 450, 30, 30);

  //level 3
  box14 = new Box(490, 420, 30, 30);
  box15 = new Box(520, 420, 30, 30);
  box16 = new Box(550, 420, 30, 30);
  box17 = new Box(580, 420, 30, 30);
  box18 = new Box(610, 420, 30, 30);

  //level 4
  box19 = new Box(505, 390, 30, 30);
  box20 = new Box(535, 390, 30, 30);
  box21 = new Box(565, 390, 30, 30);
  box22 = new Box(595, 390, 30, 30);

  //level 5
  box23 = new Box(520, 360, 30, 30);
  box24 = new Box(550, 360, 30, 30);
  box25 = new Box(580, 360, 30, 30);

  //level 6
  box26 = new Box(535, 330, 30, 30);
  box27 = new Box(565, 330, 30, 30);

  //level 7/top
  box28 = new Box(550, 300, 30, 30);

//stand 2
  //level 1
  //950, 350, 205, 10
  block1 = new Box(875, 330, 30, 30);
  block2 = new Box(905, 330, 30, 30);
  block3 = new Box(935, 330, 30, 30);
  block4 = new Box(965, 330, 30, 30);
  block5 = new Box(995, 330, 30, 30);
  block6 = new Box(1025, 330, 30, 30);

  //level 2
  block7 = new Box(890, 300, 30, 30);
  block8 = new Box(920, 300, 30, 30);
  block9 = new Box(950, 300, 30, 30);
  block10 = new Box(980, 300, 30, 30);
  block11 = new Box(1010, 300, 30, 30);

  //level 3
  block12 = new Box(905, 270, 30, 30);
  block13 = new Box(935, 270, 30, 30);
  block14 = new Box(965, 270, 30, 30);
  block15 = new Box(995, 270, 30, 30);

  //level 4
  block16 = new Box(920, 240, 30, 30);
  block17 = new Box(950, 240, 30, 30);
  block18 = new Box(980, 240, 30, 30);

  //level 5
  block19 = new Box(935, 210, 30, 30);
  block20 = new Box(965, 210, 30, 30);

  //level 6/top
  block21 = new Box(950, 180, 30, 30);
  
  //ball = Bodies.circle(200, 350, 30);
  //World.add(world, ball);
  ball = new Ball(200, 350, 40, 40);

  slingShot = new SlingShot(ball.body, {x: 200, y: 350});
}

function draw() { 
  background("white");

  //texts
  textSize(20);
  textFont("Georgia");
  fill(136, 187, 228);
  text("Drag the Dark Blue Rectangular Stone and Release it, to launch it towards the blocks", 100, 600);

  textSize(30);
  textFont("Georgia");
  fill(200, 100, 500);
  text("Score: " + score, 100, 100);

  strokeWeight(1);
  fill(174, 198, 207);
  ground.display();

  fill(153, 138, 211);
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill(255, 154, 162);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill(255, 183, 178);
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  fill(255, 218, 193);
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  fill(226, 240, 203);
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  fill(181, 234, 215)
  box23.display();
  box24.display();
  box25.display();
  fill(198, 242, 255)
  box26.display();
  box27.display();
  fill(199, 206, 234);
  box28.display();

  fill(251, 185, 197);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  fill(253, 208, 177);
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  fill(249, 239, 199);
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  fill(195, 237, 191);
  block16.display();
  block17.display();
  block18.display();
  fill(184, 223, 230);
  block19.display();
  block20.display();
  fill(197, 187, 222);
  block21.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();

  fill(119, 158, 203);
  ball.display();

  slingShot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(ball.body);
  }
}