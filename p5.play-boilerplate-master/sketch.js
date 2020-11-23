var rectanle,rectangle1
var ob1,ob2
function setup() {

  createCanvas(800,400);
  rectangle=createSprite(50,250,50,50)
  rectangle1=createSprite(250,250,50,50)
  ob1=createSprite(100,200,50,50)
  ob2=createSprite(200,200,50,25)
  rectangle.shapeColor="green"
  rectangle1.shapeColor="green"
}


function draw() {
  background(255,255,255);  
  rectangle.x=mouseX
  rectangle.y=mouseY
  if( isTouching(rectangle,ob2)){
    rectangle.shapeColor="red"
    ob2.shapeColor="red"
  }
  else{
    rectangle.shapeColor="green"
    ob2.shapeColor="green"
  }

  drawSprites();
}
