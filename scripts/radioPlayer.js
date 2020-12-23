export const radioPlayerInit = () => {
    console.log('radio Player');

    const radio = document.querySelector('.radio');
    const radioCover__img = document.querySelector('.radio-cover');
    const radioHeader = document.querySelector('.radio-header');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    radioNavigation.addEventListener('change', (evt) => {
        radioStop.disabled = false;
        const target = evt.target;
        audio.src = target.dataset.radioStantion;
        console.log(audio.src);
        audio.play();
    });

    radioStop.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });


};