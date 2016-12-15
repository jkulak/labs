(function () {
    'use strict';

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
        if (!audio) {
            return;
        } // stop the function from running altogether
        audio.currentTime = 0; // rewind to the start
        audio.play();
        key.classList.add('playing');
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') {
            return;
        } // skip it if it's not a transform
        this.classList.remove('playing');
    }
    const keys = document.querySelectorAll('li');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
}());



// https://www.youtube.com/watch?v=fw-_mvgoVcE
