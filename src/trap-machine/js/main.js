(function () {
    'use strict';

    // play plays either sounds or loops depending on the pressed buttons
    function play(e) {

        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.sounds li[data-key="${e.keyCode}"]`);
        if (!audio) {
            return;
        } // stop the function from running altogether

        if (e.keyCode === 67 || e.keyCode === 88 || e.keyCode === 90) {
            // Stop currently playing loop (by stopping all)
            const loops = document.querySelectorAll("#loops audio");
            loops.forEach(loop => loop.pause());

            const keys = document.querySelectorAll(".loops li");
            keys.forEach(key => key.classList.remove('playing'));
        } else {
            setTimeout(function () {
                key.classList.remove('playing');
            }, 70);
        }
        audio.currentTime = 0; // rewind to the start
        audio.play();
        key.classList.add('playing');
    }

    window.addEventListener('keydown', play);
}());
