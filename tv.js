img="";
status="";
objects=[];
function preload(){
img=loadImage('tc.jpg')
}
function setup(){
canvas=createCanvas(380,380);
canvas.position(400,230);
objectdetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("Modelloaded!");
    status=true;
    objectdetector.detect(img,gotResult)
}
function gotResult(error,results){
 if (error) {
    console.log(error);
}
console.log(results);
objects=results;
}
function draw(){
 image(img,0,0,380,380);
 if (status!="") {
    r=random(255);
    g=random(255);
    b=random(255);
objectdetector.detect(img,gotResult)
for (i = 0;i < objects.length;i++) {
  document.getElementById("status") .innerHTML="status:objects detected" ;
  document.getElementById("number_of_object").innerHTML="number of objects detected are"+objects.length;
  fill(r,g,b);
  percent=floor(objects[i].confidence*100);
  text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
  noFill();
  stroke(r,g,b);
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
} 
}
