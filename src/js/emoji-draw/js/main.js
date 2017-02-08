(function (was) {
    'use strict';

    // Const
    var MAX_EMOJI = 200;

    // User inteface
    var container = document.querySelector('.container');
    var stats = document.querySelector('.stats span');

    // Other variables
    var mouseDown = false;
    var stamps = [];



    document.body.onmousedown = function (e) {

        mouseDown = e.button === 0;
    };

    document.body.onmouseup = function () {

        mouseDown = false;
    };

    function getStamp(char) {

        var span = document.createElement('span');
        span.setAttribute('class', 'emoji');
        span.innerHTML = char;
        return span;
    }

    function updateStats(val) {

        stats.innerHTML = parseInt(stats.innerHTML) + val;
    }

    function stamp(x, y) {

        var stamp = getStamp(was.getRandomEmoji());
        stamp.style.left = (x - 30) + "px";
        stamp.style.top = (y - 30) + "px";
        container.appendChild(stamp);
        //elem.parentNode.removeChild(elem);
        if (stamps.length > MAX_EMOJI) {
            container.removeChild(stamps.shift());
        }
        stamps.push(stamp);

        updateStats(1);
    }

    document.addEventListener('mousemove', function (e) {

        if (mouseDown) {
            stamp(e.clientX, e.clientY);
        }
    });

})(was);
