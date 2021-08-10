const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob
var bob1
var bob2
var bob3
var bob4
var con

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.8
	  }

    var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
	bob = Bodies.circle(320,100,10,ball_options);
	World.add(world,bob);

    bob1 = Bodies.circle(370,100,10,ball_options);
	World.add(world,bob1); 

    bob2 = Bodies.circle(420,100,10,ball_options);
	World.add(world,bob2);

    bob3 = Bodies.circle(470,100,10,ball_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(505,100,10,ball_options);
	World.add(world,bob4);

	

//lines
con = Matter.Constraint.create({
	pointA:{x:320,y:110},
	bodyB:bob,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

  con2 = Matter.Constraint.create({
	pointA:{x:370,y:110},
	bodyB:bob1,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

  con3 = Matter.Constraint.create({
	pointA:{x:420,y:110},
	bodyB:bob2,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
  });

  con4 = Matter.Constraint.create({
	pointA:{x:470,y:110},
	bodyB:bob3,
	pointB:{x:0,y:0},
	length:100,
	stiffness:0.1
    
    });



	con5 = Matter.Constraint.create({
		pointA:{x:505,y:110},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
   
	});

}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  ellipse(bob.position.x,bob.position.y,40)
  ellipse(bob1.position.x,bob1.position.y,40)
  ellipse(bob2.position.x,bob2.position.y,40)
  ellipse(bob3.position.x,bob3.position.y,40)
  ellipse(bob4.position.x,bob4.position.y,40)
  

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

line(con.pointA.x,con.pointA.y,bob.position.x,bob.position.y);
line(con2.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
line(con3.pointA.x,con.pointA.y,bob2.position.x,bob2.position.y);  
line(con4.pointA.x,con.pointA.y,bob3.position.x,bob3.position.y);  
line(con5.pointA.x,con.pointA.y,bob4.position.x,bob4.position.y);



//create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Bob.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
    }
}