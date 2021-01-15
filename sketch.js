
var a;
var b;

function setup() {
 createCanvas(800,400);

a=createSprite(200,300,60,60);
a.shapeColor="green";

b=createSprite(400,300,100,100);
b.shapeColor="blue";

a.debug=true;
b.debug=true;



}



function draw() {
 

  b.x=World.mouseX;
  b.y=World.mouseY;
  
  
  background(255,255,255);  
  drawSprites();

if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 && 
   b.y-a.y<a.height/2+b.height/2 && a.y-b.y<a.height/2+b.height/2){
  b.shapeColor="red";
}
else{
  b.shapeColor="blue";
}
}