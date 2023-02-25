
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

 ground =new Ground(width/2,670,width,20);
  right = new Ground(1350,600,20,120);
  left = new Ground(1100,600,20,120);

  var ball_options= {
	restitution:.2, friction: 0, density: 1.2
	
  }

  ball= Bodies.circle(200,100,20 , ball_options)
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20)

  ground.show();
  left.show();
  right.show();
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 
		Matter.Body.applyForce( ball, ball.position, {x:80, y:-80})
		
		
	}
}
