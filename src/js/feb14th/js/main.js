(function () {
    'use strict';

    // Const
    var MAX_ELEMS = 200;

    // User inteface
    var container = document.querySelector('.container');
    var stats = document.querySelector('.stats');

    // Other variables
    var mouseDown = false;
    var stamps = [];



    document.body.onmousedown = function (e) {

        mouseDown = e.button === 0;
    };

    document.body.onmouseup = function () {

        mouseDown = false;
    };

    function getStamp() {

        var span = document.createElement('span');
        span.setAttribute('class', 'heart');
        return span;
    }

    function updateStats(val) {

        stats.innerHTML = parseInt(stats.innerHTML) + val;
    }

    function stamp(x, y) {

        var stamp = getStamp();
        stamp.style.left = (x - stamp.style.width / 2) + "px";
        stamp.style.top = (y - stamp.style.height / 2) + "px";
        container.appendChild(stamp);
        //elem.parentNode.removeChild(elem);
        if (stamps.length > MAX_ELEMS) {
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

    function getRandomInt(vmax, vmin = 0) {
        const min = Math.ceil(vmin);
        const max = Math.floor(vmax);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    setInterval(function () {
        const x = getRandomInt(window.innerWidth);
        const y = getRandomInt(window.innerHeight);
        stamp(x, y);
    }, 450);

})();
