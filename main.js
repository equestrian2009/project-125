
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function draw(){
    background('#B2AC88');
    document.getElementById("font_size").innerHTML="font size of the text will be"+difference+" px ";
    textSize(difference);
    fill('#aec6cf');
    text('coding',50,400);
    
}
function modelLoaded(){
    console.log('poseNet is initialised');
}
function gotPoses(results){
    if(results.length >0) {
        console.log(results);
       
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
