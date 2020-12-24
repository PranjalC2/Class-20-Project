var speed,weight;
var car,wall;

function setup() {
  createCanvas(1600,400);
  console.log("hello");
  //creating sprites
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,200);
  console.log("wall" + wall);

  //adding color to the wall
  wall.shapeColor=(80,80,80);

  //random values
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  

  //giving the car velocity
  car.velocityX=speed;

  //assigning a color when colliding
  if(wall.x-car.x < car.width/2+ wall.width/2){
    car.velocityX=0;

    var deformation= 0.5*weight*speed*speed/22509;

    if(deformation<100){
      car.shapeColor="green";

    }
    if(deformation>=100 && deformation<=180){
      car.shapeColor="blue";

    }

    if(deformation>180){
      car.shapeColor="red";

    }
    
  }
  drawSprites();
}