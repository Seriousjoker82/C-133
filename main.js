function setup(){
canvas=createCanvas(640,420)
canvas.center()
}

img=""
objects=[]
status=""
function preload(){
    img=loadImage("100.jpeg")
}
function draw(){
    image(img, 0, 0 ,640, 420)
    if(status != ""){
        for(i=0;i<objects.length;i++){
            fill(200,0,0)
            Percent=floor(objects[i].confidence*100)
            text(objects[i].label+" "+Percent+"%",objects[i].x+15,objects[i].y+20)
            noFill()
            stroke(200,0,0)
            rect(objects[i].x, objects[i].y,objects[i].width, objects[i].height)
            document.getElementById("status").innerHTML="Object Detected"
        }
    }

    mousex=mouseX;
    mousey=mouseY;
    text(mousex+ " , " + mousey, mouseX, mouseY )
}
objectDetection=ml5.objectDetector("cocossd", modelLoaded)
document.getElementById("status").innerHTML="detecting Object"
function modelLoaded(){
    console.log("model is loaded")
    status=true
    objectDetection.detect(img, gotResult)
}

function gotResult(error, results){
    if(error){
        console.error()
    } 
    else{
        console.log(results)
    objects=results
    }

}

