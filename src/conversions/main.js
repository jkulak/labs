(function () {

    var binary = document.getElementById('binary'),
        hex = document.getElementById('hex'),
        decimal = document.getElementById('decimal'),
        ascii = document.getElementById('ascii'),
        win1250 = document.getElementById('win1250'),
        utf8 = document.getElementById('utf8');

    var binary_val = document.getElementById('binary_val'),
        hex_val = document.getElementById('hex_val'),
        decimal_val = document.getElementById('decimal_val'),
        ascii_val = document.getElementById('ascii_val'),
        win1250_val = document.getElementById('win1250_val'),
        utf8_val = document.getElementById('utf8_val');

    var inputs = [binary, hex, win1250, utf8, ascii];

    // inputs.forEach(function(e) {
    //     e.addEventListener('key', function( e ) {
    //         convert( e );
    //     }, false);
    // });

    binary.addEventListener('keyup', function( e ) {
        fromBinary( e );
        console.log(e);
    }, false);

})();

function fromBinary(e) {

    view(binary.value);
}

function view(value) {
    var val = value.replace(/ /g,'');
    binary_val.textContent = formatBinary(parseInt(val, 2).toString(2));
    hex_val.textContent = chunk(parseInt(val, 2).toString(16), 2).join(' - ');
    decimal_val.textContent = parseInt(val, 2).toString(10);
    ascii_val.textContent = binaryAgent3(val);
}

function binaryAgent3(str) {

  return str.split(" ").map(function(elem) {
    return String.fromCharCode(parseInt(elem, 2));
    }).join("");
}

function formatBinary(value) {

    return chunk(pad(value), 8).join(' - ');
}

function pad(num) {

    var missing = 8 - (num.length % 8);
    var padding = '';
    for (var i = 0; i < missing; i++) {
        padding += '0';
    }
    return padding + num;
}

function chunk(str, n) {
    var ret = [];
    var i;
    var len;

    for(i = 0, len = str.length; i < len; i += n) {
        ret.push(str.substr(i, n));
    }

    return ret;
}
