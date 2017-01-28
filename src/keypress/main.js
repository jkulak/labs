(function (d) {
    'use strict';

    // Almost 😜 reliable OS detection based on userAgent string
    const detectMeta = () => {
        const agent = window.navigator.userAgent;
        let meta = 'win';

        if (agent.indexOf("Mac") !== -1) {
            meta = "mac";
        } else if ((agent.indexOf("X11") !== -1) || (agent.indexOf("Linux") !== -1)) {
            meta = "linux";
        }
        return meta;
    };

    const toggleFooter = () => {
        footer.classList.toggle('fade');
    };

    const init = () => {
        metaKey.innerHTML = detectMeta();
        d.addEventListener('keydown', update);
        d.addEventListener('keyup', update);
        d.addEventListener('keypress', start);
        footer.addEventListener('mouseover', function () {
            toggleFooter();
        });
        footer.addEventListener('mouseout', () => {
            toggleFooter();
        });
    };

    const start = () => {
        setTimeout(() => {
            header.classList.add('fade');
            footer.classList.add('fade');
            d.removeEventListener('keypress', start);
        }, 500);
    };

    const update = (e) => {
        display.innerHTML = e.keyCode;

        if (e.code === 'CapsLock') {
            if (e.type === 'keydown') {
                capsKey.classList.remove('hidden');
            } else {
                capsKey.classList.add('hidden');
            }
        }

        if (e.altKey) {
            altKey.classList.remove('hidden');
        } else {
            altKey.classList.add('hidden');
        }

        if (e.ctrlKey) {
            ctrlKey.classList.remove('hidden');
        } else {
            ctrlKey.classList.add('hidden');
        }

        if (e.shiftKey) {
            shiftKey.classList.remove('hidden');
        } else {
            shiftKey.classList.add('hidden');
        }

        if (e.metaKey) {
            metaKey.classList.remove('hidden');
        } else {
            metaKey.classList.add('hidden');
        }
    };

    const display = d.getElementById('display');
    const capsKey = d.getElementById('capsKey');
    const altKey = d.getElementById('altKey');
    const ctrlKey = d.getElementById('ctrlKey');
    const shiftKey = d.getElementById('shiftKey');
    const metaKey = d.getElementById('metaKey');

    const header = d.querySelector('header');
    const footer = d.querySelector('footer');

    init();

})(document);
