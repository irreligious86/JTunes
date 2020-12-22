export const videoPlayerInit = () => {
    console.log('video Player');
//     video-player
//     video-button__play
// video-button__stop
// video-time__passed
// video-progress
// video-time__total

const videoPlayer = document.querySelector('.video-player');
const videoButtonPlay = document.querySelector('.video-button__play');
const videoButtonStop = document.querySelector('.video-button__stop');
const videoTimePassed = document.querySelector('.video-time__passed');
const videoProgress = document.querySelector('.video-progress');
const videoTimeTotal = document.querySelector('.video-time__total');

videoPlayer.addEventListener('click', () => {
    if( videoPlayer.paused ) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
    
});






};