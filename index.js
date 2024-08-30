const video = document.querySelector("#video");
const btn = document.querySelector("#btn");
const canvas = document.querySelector("#canvas");
const img = document.querySelector("#img");


async function startVideo(){
    try{
      const stream = await navigator.mediaDevices.getUserMedia({video: true});
      video.srcObject = stream;
      video.play();
    
    }catch(err){
        console.log(err,"error starting video");
    }
}

btn.addEventListener("click", ()=>{
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    img.src= canvas.toDataURL("image/png");
    img.style.display= "block";

})


startVideo();
