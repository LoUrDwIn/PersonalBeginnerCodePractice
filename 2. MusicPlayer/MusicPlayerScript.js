var x = document.getElementById("myAudio"); 

function playAudio() { 
  if(x.paused){
	  x.play();
  }else{
	  x.pause();
  }
} 

function stopAudio(){
	x.pause();
	x.currentTime = 0;
//	x.stop();
}


function NextAudio(){
//	x.src[1];
	console.log(x.source.src(1));
}

var playlist = $('#playlist'); 
var tracks = playlist.find('li a');
