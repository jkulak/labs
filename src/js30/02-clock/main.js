
(function(){
'use strict';

const secondHand = document.querySelector('.hand-second');
const minuteHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDeg = ((seconds / 60) * 360) + 90;
        const minutesDeg = ((minutes / 60) * 360) + 90;
        const hoursDeg = ((hours / 12) * 360) + 90 + minutesDeg/12;

        secondHand.style.transform = `rotate(${secondsDeg}deg)`;
        minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    }

    setInterval(setDate, 1000);
})();
