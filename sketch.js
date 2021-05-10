const Constraint= Matter.Constraint
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground1, stand1,stand2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9;
var polygon, polygonImg
var slingShot1
var backgroundImg


function preload(){
polygonImg=loadImage("polygon.png")
 getBackgroundImg()
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  Engine.run(engine)
  ground1=new ground(400, 200, 50, 50);
  stand1=new ground(390,300,230,10)
  block1=new box(300,275,30,40)
  block2=new box(330,275,30,40)
  block3=new box(360,275,30,40)
  block4=new box(390,275,30,40)
  block5=new box(420,275,30,40)
  block6=new box(450,275,30,40)
  block7=new box(480,275,30,40)
  block8=new box(330,235,30,40)
  block9=new box(360,235,30,40)
  block10=new box(390,235,30,40)
  block11=new box(420,235,30,40)
  block12=new box(450,235,30,40)
  block13=new box(360,195,30,40)
  block14=new box(390,195,30,40)
  block15=new box(420,195,30,40)
  block16=new box(390,155,30,40)
  polygon=Bodies.circle(50,200,40)
  stand2=new ground(640,165,180,10)
  Block1=new box(580,140,30,40)
  Block2=new box(610,140,30,40)
  Block3=new box(640,140,30,40)
  Block4=new box(670,140,30,40)
  Block5=new box(700,140,30,40)
  Block6=new box(610,100,30,40)
  Block7=new box(640,100,30,40)
  Block8=new box(670,100,30,40)
  Block9=new box(640,60,30,40)

  World.add(world,polygon);
  slingShot1=new slingShot(this.polygon,{x:100,y:200});

 

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);  
  ground1.display()
  stand1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  slingShot1.display()
  stand2.display()
  Block1.display()
  Block2.display()
  Block3.display()
  Block4.display()
  Block5.display()
  Block6.display()
  Block7.display()
  Block8.display()
  Block9.display()

  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,40,40)
  drawSprites();
 }
 function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
 }


 function mouseReleased(){
  slingShot1.fly();
 }

 function keyPressed(){
   if(keyCode===32){
     slingShot1.attach(this.polygon)
   }
 }

 async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour>=06 && hour<=18){
    bg="blue0517.jpg"
  }else{
    bg="download.jpg"
  }
  backgroundImg = loadImage(bg);
    console.log(backgroundImg);
 }
