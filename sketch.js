var allMyBubles = [];
var numOfBubbles = prompt("How many blood cells you want to see?");
var sizeOfBubbles = 30;


function setup(){
    createCanvas(600,400);
    for(var i = 0; i < numOfBubbles; i++){
        allMyBubles[i] = new Bubble(random(0,600),random(0,400));

    }



    
}

function draw(){
    background(61, 222, 255);
    for(var i = 0; i < allMyBubles.length; i++){
    allMyBubles[i].display();
    allMyBubles[i].move();
    }
}

function Bubble(x,y){
    this.x = x;
    this.y = y;
    fill(0,0,0);
    this.display = function(){
        stroke(255);
        ellipse(this.x, this.y, sizeOfBubbles, sizeOfBubbles);
}
this.move = function(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
}
}