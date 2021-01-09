
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball,ball1,ball2,ball3;
var ground,ground2;
var balls=[];
var rope,rope1,rope2,rope3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	 ground =new Ground(400,600,800,20);
	 ball=new Ball(300,250,50);
	 ball1=new Ball(320,250,50);
	 ball2=new Ball(360,250,50);
	 ball3=new Ball(390,250,50);
	 ground2=new Ground(400,200,200,20)
	 rope=new Rope(ball.body,{x:325,y:200});
	 rope=new Rope(ball1.body,{x:350,y:200});
	 rope=new Rope(ball2.body,{x:425,y:200});
	 rope1=new Rope(ball3.body,{x:450,y:200});
	 rope2=new Rope(ball3.body,{x:450,y:200});
	 rope3=new Rope(ball3.body,{x:450,y:200}); 
	//Create the Bodies Here.
	 balls.push(ball);
	 balls.push(ball1);
	 balls.push(ball2);
	 balls.push(ball3);
    
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  
  
 
  rope1.display();
  
  ground2.display();
  rope.display();
  rope2.display();
  rope3.display();
  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  
  drawSprites();
 
}



