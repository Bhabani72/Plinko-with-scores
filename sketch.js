const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var Ground,particle;
var score=0;
var count = 0;
var gameState ="start"
var pinko = [];
var particles = [];
var divisions = [];

function setup() {

  createCanvas(1400,630);
  engine = Engine.create();
  world = engine.world;
  
  Ground = new ground(700,630,1400,10);

  for(var d =0;d<=width;d = d+80){
    divisions.push(new line(d,550,5,200));
    
  }  
  
  for(var p = 0;p<=width;p=p+40){
    pinko.push(new fixballs(p,100));
  }
  for(var p = 0;p<=width;p=p+50){
    pinko.push(new fixballs(p,150));
  }
  for(var p = 0;p<=width;p=p+40){
    pinko.push(new fixballs(p,200));
  }
  for(var p = 0;p<=width;p=p+50){
    pinko.push(new fixballs(p,250));
  }
  //console.log(frameCount); 
  Engine.run(engine);
  }

  function draw() {
    background("cyan");

    textSize(20);
  fill("yellow");
  text("Score : "+score,150,50);


    textSize(15);
    fill("red");
    text(" 500 ", 25, 470);
    text(" 500 ", 105, 470);
    text(" 500 ", 185, 470);
    text(" 500 ", 265, 470);
    text(" 500 ", 345, 470);

    text(" 100 ", 425, 470);
    text(" 100 ", 505, 470);
    text(" 100 ", 585, 470);
    text(" 100 ", 665, 470);
    text(" 100 ", 745, 470);

    text(" 200 ", 825, 470);
    text(" 200 ", 905, 470);
    text(" 200 ", 985, 470);
    text(" 200 ", 1065,470);
    text(" 200 ", 1145,470);

    text(" 1000 ", 1225, 470);
    text(" 1000 ", 1305, 470);

    Ground.display();

    if ( gameState ==="end") {
    
      textSize(100);
      text("GameOver", 150, 250);
      //return
    }

    if(frameCount%20 === 0){
      particles.push(new balls(random(width/2-10,width/2+10),5,5));
    }

    for (var k = 0; k < divisions.length; k++) 
    {
      divisions[k].display();
    }

    for (var i = 0; i < pinko.length; i++) {
      pinko[i].display();  
   }
  
if(particle!=null) {
  particle.display();        
  if (particle.body.position.y>0){
  if (particle.body.position.x < 399)  {
    score=score+500;      
particle=null;
if ( count>= 5) gameState ="end";                          
  }
}
  else if (particle.body.position.x > 401 && particle.body.position.x < 799 ) {
score = score + 100;
particle=null;
if ( count>= 5) gameState ="end";
   } 
   else if (particle.body.position.x > 801 && particle.body.position.x < 1199 ) {
 score = score + 200;
 particle=null;
if ( count>= 5)  gameState ="end";
  } 
  else if (particle.body.position.x > 1201 && particle.body.position.x < 1400 ){
 score = score + 1000;
particle=null;
 if ( count>= 5)  gameState ="end";
 }             
   }
    drawSprites();
  }

  function mousePressed(){
  if(gameState!=="end"){
      count++;
     particle=new balls(mouseX, 10, 10, 10); 
     }   
    }
  