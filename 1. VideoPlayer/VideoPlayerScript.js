var myVideo = document.getElementById("myVideo");

function playPause(){
	if(myVideo.paused){
		myVideo.play();
	}else{
		myVideo.pause();
	}
}
function forwardRewind(time){
	myVideo.currentTime += time;
}
function stopVideo(){
	myVideo.pause();
	myVideo.currentTime = 0;
}


function makeBig(){
	document.getElementById("myVideo").width = 900;
}
function makeSmall(){
	myVideo.width = 200;
}
function makeNormal(){
	myVideo.width = 400;
}
