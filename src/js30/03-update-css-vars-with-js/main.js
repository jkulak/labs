(function(){
'use strict';

// const inputs = document.getElementsByTagName('input');
const inputs = document.querySelectorAll('#controlpanel input');

function handleUpdate() {
    // this is the element on which the event was trigerred
    if ('checkbox' === this.type) {
        // Handle checkboxes
        const bw = (this.checked) ? 1 : 0 ;
        document.documentElement.style.setProperty(`--${this.name}`, bw);
    } else {
        const suffix = this.dataset.sizing || '';
        // Handle other inputs
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

})();
