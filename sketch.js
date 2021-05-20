const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld,ball;

function setup(){
createCanvas(400,400)

myEngine=Engine.create();
myWorld=myEngine.world

ball_options={
restitution : 1.0
}
ball=Bodies.circle(200,200,20,ball_options)
World.add(myWorld,ball)

ground_options={
isStatic : true
}

ground=Bodies.rectangle(200,380,400,20,ground_options)
World.add(myWorld,ground)



}

function draw(){
background(0);

Engine.update(myEngine)

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);

rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)


}