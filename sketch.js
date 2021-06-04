var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here

    

}


function setup(){
    canvas = createCanvas(800,600);
    edges=createEdgeSprites();

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(505,580,200,30);
    block3.shapeColor = "green";

    block4 = createSprite(769,580,300,30);
    block4.shapeColor = "red";


    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

    ball.velocityX = 5;
    ball.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    ball.bounceOff(edges);

    

    

    
    //write code to bounce off ball from the block1 
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "red";
    }

    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX = 0;
        ball.velocityY = 0;

    }
    

    //write code to bounce off ball from the block3
     if (block3.isTouching(ball) && (ball.bounceOff(block3))) {
         ball.shapeColor = "green";
         
     }


    //write code to bounce off ball from the block4

    if (block1.isTouching(ball) && (ball.bounceOff(block1))) {
        ball.shapeColor = "blue";
        
    } 

    drawSprites();
}
