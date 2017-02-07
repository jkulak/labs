(function () {
    'use strict';

    const emoji = document.querySelector('.emoji');
    document.addEventListener('mousemove', function (e) {
        var emojis = ["💀", "😭", "😪", "😢", "😥", "😧", "😦", "🙁", "😑", "😐", "😏", "🙂", "☺️", "😊", "😄", "😅", "😍"];
        var elem = Math.floor(e.clientX / window.innerWidth * emojis.length);
        emoji.innerHTML = emojis[elem];
        var size = Math.floor(e.clientY / window.innerHeight * 100) + 26;
        emoji.style.fontSize = size + "px";
    });
})();
