function setup(){
    canvas= createCanvas(400,325);
    canvas.position(520,360); 
    video= createCapture(VIDEO); 
    video.hide(); 
}


status=""; 
 



function draw(){
    image(video, 0,0,500,400 );
 
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


function pause(){
    video.pause();
}

function stop(){
    video.stop(); 
}
