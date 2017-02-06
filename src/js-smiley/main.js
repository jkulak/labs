(function () {
    'use strict';

    var emojis = ["💀", "😭", "😪", "😢", "😥", "😧", "😦", "🙁", "😑", "😐", "😏", "🙂", "☺️", "😊", "😄", "😅", "😍"];

    function mouseMove(e) {
        var elem = Math.floor(e.clientX / window.innerWidth * emojis.length);
        emoji.innerHTML = emojis[elem];
        var size = Math.floor(e.clientY / window.innerHeight * 100) + 26;
        emoji.style.fontSize = size + "px";
        // console.log(e.clientX, e.clientY);
    }

    const emoji = document.querySelector('.emoji');
    document.addEventListener('mousemove', mouseMove);

})();
