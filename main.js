
function preload(){
  customFont = loadFont("flappy.ttf");
    img2 =loadImage("yellowbird-downflap.png")
    up =loadImage("up.png")
    down =loadImage("down.jpeg")
  background= loadImage("background.png")
}

function setup() {
  var cnv = createCanvas(900, 1600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
}


var y=0;
var yv=0;
var pipex=1000;
var pipeY=400;
var score=0;

function draw() {

image(background,0,0,1000,550);
    yv=yv+0.225;
    y=y+yv;
    pipex=pipex-5;
    image(img2,100,y,50,30);
    image(down,pipex,pipeY,109,400);
    image(up,pipex,pipeY-200,109,-400);
      textFont(customFont);
    textSize(50);
    text(score,20,40);
    if(pipex>100&&pipex<140&& y>pipeY) {
lost();
    }
    
    if(pipex==100) {score=score+1;}
    
        if(pipex>100&&pipex<140&&y<(pipeY-200)) {
lost();
    }
    
    if(y>500) {
lost();
    }
    
    if(pipex<0) {pipex=1000; pipeY=random(400, 100);}
    
}

    function keyPressed() {
 yv=-6;
}

function lost() {
  window.alert('you lost with '+score+'!');
  window.close();
}

    function mousePressed() {
 yv=-6;
}
