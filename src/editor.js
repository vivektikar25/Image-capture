var height = 0;
var width = 320;
var streaming = false;
var video = null;
var canvas = null;
var photo = null;
var startbutton = null;

function initialize(){
	video = document.getElementById('video');
	canvas = document.getElementById('canvas');
	startbutton = document.getElementById('startbutton');

	navigator.webkitGetUserMedia({video: true},
	  	function(stream) {
	    document.getElementById('video').src = URL.createObjectURL(stream);
	  	},
		  function() {
		    alert('could not connect stream');
		  }
	);

	video.addEventListener('canplay', function(ev){
      if (1 || !streaming) {
        height = video.videoHeight / (video.videoWidth/width);
      	video.setAttribute('width', video.videoWidth);
        video.setAttribute('height', height);
        canvas.setAttribute('width', video.videoWidth);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', function(ev){
      takePicture();
    }, false);
}
initialize();

function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
}

function takePicture(){
	var context = canvas.getContext('2d');
	if(width && height){
		canvas.width = width;
		canvas.height = height;
		context.drawImage(video,0,0,width,height);
		var data = canvas.toDataURL('image/png');
	}
	else{
		clearphoto();
	}

}

function downloadImage(){
document.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
}
