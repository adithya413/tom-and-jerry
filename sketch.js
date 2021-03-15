var cat,mouse,garden;
var catImg,mouseImg,gardenImg,catImg2,mouseImg2


function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg=loadAnimation("images/cat1.png");
   catImg2=loadAnimation("images/cat2.png","images/cat3.png");
 mouseImg=loadAnimation("images/mouse1.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
catImg3=loadAnimation("images/cat4.png")
mouseImg4=loadAnimation("images/mouse4.png")    
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(500,400);
garden.addImage(gardenImg);
cat=createSprite(850,600);
cat.addAnimation("sleeping",catImg);
cat.scale=0.1
mouse=createSprite(200,600);
mouse.addAnimation("standing",mouseImg);
mouse.scale=0.07
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x -mouse.x <(cat.width+mouse.width)/2) {
    cat.velocityX=0;
    cat.addAnimation("stopping",catImg3);
    cat.changeAnimation("stopping");
mouse.addAnimation("scared",mouseImg4);
mouse.changeAnimation("scared")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("running",catImg2);
    cat.changeAnimation("running");
    mouse.addAnimation("teasing",mouseImg2);
    mouse.changeAnimation("teasing")
}

}
