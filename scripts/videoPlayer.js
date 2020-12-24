import { addZero } from './supScript.js';

export const videoPlayerInit = () => {

const videoPlayer = document.querySelector('.video-player');
const videoButtonPlay = document.querySelector('.video-button__play');
const videoButtonStop = document.querySelector('.video-button__stop');
const videoTimePassed = document.querySelector('.video-time__passed');
const videoProgress = document.querySelector('.video-progress');
const videoTimeTotal = document.querySelector('.video-time__total');
const videoVolume = document.querySelector('.video-volume');
const videoVolMute = document.querySelector('.fa-times-circle');
const videoVolDownBtn = document.querySelector('.fa-volume-down');
const videoVolUpBtn = document.querySelector('.fa-volume-up');
const videoFullscreen = document.querySelector('.video-fullscreen');

videoFullscreen.addEventListener('click', () => {
    console.log(document.fullscreenElement);
    videoPlayer.requestFullscreen();
    videoPlayer.controls = true;
});

videoPlayer.addEventListener('fullscreenchange', () => {
    if(document.fullscreen) {
        videoPlayer.controls = true;
    } else {
        videoPlayer.controls = false;
    }
});

const toggleIcon = () => {
    if( videoPlayer.paused ) {
videoButtonPlay.classList.remove('fa-pause');
videoButtonPlay.classList.add('fa-play');
    } else {
videoButtonPlay.classList.remove('fa-play');
videoButtonPlay.classList.add('fa-pause');
    }
};

const togglePlay = () => {
    if( videoPlayer.paused ) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
    toggleIcon();
};

const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
};

const changeValue = () => {
    const valueVolume = videoVolume.value;
    videoPlayer.volume = valueVolume / 100 ;
};

videoPlayer.addEventListener('click', togglePlay);
videoButtonPlay.addEventListener('click', togglePlay);

// videoPlayer.addEventListener('fullscreenchange', () => {
//     if() {
//         videoPlayer.removeEventListener('click', togglePlay)
//     } else {
//         videoPlayer.addEventListener('click', togglePlay)
//     }
// });

videoPlayer.addEventListener('play', toggleIcon);
videoPlayer.addEventListener('pause', toggleIcon);

videoPlayer.addEventListener('timeupdate', () => {
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    
    videoProgress.value = (currentTime / duration) * 100 ;

    const minutePassed = Math.floor(currentTime / 60) || '0';
    const secondPassed = Math.floor(currentTime % 60) || '0';
    const minuteTotal = Math.floor(duration / 60) || '0';
    const secondTotal = Math.floor(duration % 60) || '0';
    
    videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondPassed);
    videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondTotal);
});

videoProgress.addEventListener('input', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;
    videoPlayer.currentTime = (value * duration) / 100;
});

videoVolume.addEventListener('input', changeValue);

videoPlayer.addEventListener('volumechange', () => {
    videoVolume.value = Math.round(videoPlayer.volume * 100)
});

videoButtonStop.addEventListener('click', stopPlay);

changeValue();

videoVolMute.addEventListener('click', () => {
videoVolume.value = 0;
changeValue();
});

videoVolDownBtn.addEventListener('click', () => {
if(videoVolume.value > +videoVolume.min) {
    videoVolume.value--;
    console.log(videoVolume.value);
}
changeValue();
});

videoVolDownBtn.addEventListener('dblclick', () => {
    let q;
if(!videoVolDownBtn.classList.contains('pressed')) {
    videoVolDownBtn.classList.add('pressed');
    q = videoVolume.value;
    videoVolume.value = videoVolume.min;
    } else {
    videoVolDownBtn.classList.remove('pressed');
    videoVolume.value = q;
    }
    changeValue();
});

videoVolUpBtn.addEventListener('click', () => {
if(videoVolume.value < +videoVolume.max) {
    videoVolume.value++;
    console.log(videoVolume.value);
}
changeValue();
});

videoVolUpBtn.addEventListener('dblclick', () => {
    let q;
    if(!videoVolUpBtn.classList.contains('pressed')) {
        videoVolUpBtn.classList.add('pressed');
        q = videoVolume.value;
        videoVolume.value = videoVolume.max;
        } else {
        videoVolUpBtn.classList.remove('pressed');
        videoVolume.value = q;
        }
        changeValue();
});

videoPlayerInit.stop = () => {
videoPlayer.pause();
toggleIcon();
};
};