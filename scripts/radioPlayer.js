export const radioPlayerInit = () => {

    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');
    const radioMute = document.querySelector('.radio-mute');


    const audio = new Audio();
    audio.type = 'audio/aac';
    let prevVolume = audio.volume;

    const changeIconPlay = () => {
        if(audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.remove('fa-stop');
            radioStop.classList.add('fa-play');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    };

    radioStop.disabled = true;

    const selectItem = elem => {
        radioItem.forEach( item => item.classList.remove('select'));
        elem.classList.add('select'); 
    };  

    radioNavigation.addEventListener('change', (evt) => {
        const target = evt.target;
        const parrent = target.closest('.radio-item');
        const imgUrl = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = imgUrl;
        selectItem(parrent);
        const title = parrent.querySelector('.radio-name').textContent ;
        console.log(title);
        radioHeaderBig.innerText = title;

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;
        // console.log(audio.src);
        audio.play();
        changeIconPlay();
    });

    radioStop.addEventListener('click', () => {
        if(audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        changeIconPlay();
    });

    radioVolume.addEventListener('input', () => {
        audio.volume = radioVolume.value / 100;   
        audio.muted = false;
    });

    radioMute.addEventListener('click', () => {
        if(audio.volume) {
            prevVolume = audio.volume;
            audio.muted = !audio.muted;
        }
    });

    radioPlayerInit.stop = () => {
        audio.pause();
        changeIconPlay();
    };
};