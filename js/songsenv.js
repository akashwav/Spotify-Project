console.log('Welcome To Spotify');


let songsCount = 0;
let audio = new Audio('music/Shake It Off - Taylor Swift.mp3');
let playBtn = document.getElementById('playbtn');
let progressBar = document.getElementById('progressBar');
let currentTime = document.getElementById('currentTime');
let duration = document.getElementById('duration');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songs = [
	{ songName: "Shake It Off - Taylor Swift", songPath: "music/Shake It Off - Taylor Swift.mp3", albumPath: "img/artists/taylor_swift.jpg" }
];


playBtn.addEventListener('click', ()=> {
	if (audio.paused || audio.currentTime <= 0) {
		audio.play();
		playBtn.innerText = 'pause';
	} else {
		audio.pause();
		playBtn.innerText = 'play_arrow';
	}
});

audio.addEventListener('timeupdate', ()=> {
	progress = parseInt((audio.currentTime/audio.duration) * 100);
	progressBar.value = progress;
	if (progressBar.value >= 100) {
		playBtn.innerText = 'play_arrow';
		progressBar.value = 0;
	}
})

progressBar.addEventListener('change', ()=> {
	audio.currentTime = (progressBar.value * audio.duration) / 100;
})


// Mobile Play 

let playbtnm = document.getElementById('playm')
let audiom = new Audio('music/Olivia Rodrigo - drivers license.mp3')
let progressBarM = document.getElementById('progressbartotal');


playbtnm.addEventListener('click', ()=> {
	if (audiom.paused || audiom.currentTime <= 0) {
		audiom.play();
		playbtnm.innerText = 'pause';
	}
	else {
		audiom.pause();
		playbtnm.innerText = 'play_arrow';
		
	}
})

audiom.addEventListener('timeupdate', ()=> {
	progressm = parseInt((audiom.currentTime/audiom.duration) * 100);
	progressBarM.value = progressm;
	if (progressBarM.value >= 100) {
		playbtnm.innerText = 'play_arrow';
		progressBarM.value = 0;
	}
})

progressBarM.addEventListener('change', ()=> {
	audiom.currentTime = (progressBarM.value * audiom.duration) / 100;
})