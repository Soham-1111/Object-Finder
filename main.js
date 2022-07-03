function setup(){
    canvas= createCanvas(400,325);
    canvas.position(520,360); 
    video= createCapture(VIDEO); 
    video.hide(); 
}


status=""; 
objects=[]; 

 



function draw(){
    image(video, 0,0,500,400 );
    
        image(video, 0,0,500,400 );
        if( status!= ""){
         objectDetector.detect(video, gotResult); 
         for( i = 0; i < objects.length; i++){
             document.getElementById("status").innerHTML= "Detected Objects"; 
             document.getElementById("statusobject").innerHTML=
             percentage= floor(objects[i].confidence * 100); 
             fill(255, 0,0); 
             text(objects[i].label + " " + percentage + "%" , objects[i].x + 5, objects[i].y + 12); 
             noFill(); 
             stroke(255,0,0);
             rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
              
             
         }
    
        }
    
    
    function gotResult(error, results){
    if(error){
        console.log(error);
    }
    
    else{
        console.log(results); 
        objects = results; 
    }
    }
 
}

function start(){
    objectDetector= ml5.objectDetector("cocossd", modelLoaded); 
    document.getElementById("status").innerHTML= "Detecting Objects"; 

}

function modelLoaded(){
    status="true"; 
    console.log("Model Loaded!"); 
    video.loop(); 
    video.speed(1); 
    video.volume(0); 
}



