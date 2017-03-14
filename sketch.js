//Hello Markov. Welcome to Nightvale 

var mytext;
var loveFrame;
var rm;
var textVoice;
var song;

function preload() {

    loveFrame = loadImage('assets/frame.png');
    mytext = loadStrings('assets/mytext.txt');
    song = loadSound('assets/song.mp3');
}

function setup() {
    
    createCanvas(windowWidth, windowHeight);
    fill(255);
    textAlign(CENTER);
    textFont("Georgia");
    background(7); //smokey black
    rm = new RiMarkov(10);
    rm.loadText(mytext.join(' '));
    song.setVolume(0.4);
    song.play();
    console.log("Hello Old Ones");
}
    
function draw() {
    textSize(24);
    text("Modern Weird Fiction", width/2, height/3);
    imageMode(CENTER);
    image(loveFrame, width/2, height/2, width/1.01, height/1.01);
    
}

function drawText() {
    
    textVoice = new p5.Speech();
    background(7); //smokey black
    fill(255);
    textFont("Georgia");
    textSize(16);
    text(lines, width/2, height/2);
    textVoice.speak(lines);
}

function mousePressed() {
    
    lines = rm.generateSentences(1);
    drawText();
}

function windowResized() {
    
    resizeCanvas(windowWidth, windowHeight);
    background(7);
    imageMode(CENTER);
    image(loveFrame, width/2, height/2, width/1.01, height/1.01);
    
    
}
