song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function preload(){
song1=loadSound("song.mp3");
song2=loadSound("peter.mp3");
}

function setup(){
canvas=createCanvas(500,600);
canvas.center();

video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,500,600);
}

function play_song(){
    song.play();
}
function stop_song(){
    song.stop();
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("Left Wrist x ="+leftWristX+"left wrist y ="+leftWristY);
    console.log("right wrist x="+rightWristX+"right wrist y="+rightWristY);
}
}