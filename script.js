let video = document.querySelector("video");

let recoder;
let constraints = {
    video : true,
    audio : true
}

navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
    video.srcObject = stream;
    
});