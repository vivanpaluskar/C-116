upperlipX = 0;
upperlipY = 0;
function preload(){
    mustache = loadImage('https://i.postimg.cc/tJ9SjjYV/mustache.png')
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialise');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        upperlipX = results[0].pose.nose.x-40;
        upperlipY = results[0].pose.nose.y;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, upperlipX, upperlipY, 80, 35);
}
function take_snapshot(){
    save('yourimage.png');
}