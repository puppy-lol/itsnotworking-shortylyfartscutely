video="";

function preload() {

}

function setup() {
    canvas=createCanvas(380, 380);
    canvas.center();
}

function draw() {
}

function start() {
    objectDetect = ml5.objectDetect('cocosd', modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    video.loop();
    video.speed(1);
    video.volume(0);
}