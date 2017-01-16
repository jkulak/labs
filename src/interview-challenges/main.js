(function() {
    'use strict';

    function fizzBuzz1() {
        for (let i = 1; i <= 100; i++) {
            let val = "";
            if (i % 3 === 0) {
                val = "Fizz";
            }
            if (i % 5 === 0) {
                val = val + "Buzz";
            }
            console.log((val!==""?val:i) + ", ");
        }
    }

    function fizzBuzzFastLoop() {
        let result = "";
        for (var i=1; i <= 100; i++)
        {
            let val = "";
            if (i % 15 == 0)
                val = "FizzBuzz";
            else if (i % 3 == 0)
                val = "Fizz";
            else if (i % 5 == 0)
                val = "Buzz";
            else
                val = i;
            result = result + val + ", ";
        }
        console.log(result);
    }

    function fizzBuzzPaul() {
        for (let i = 1; i <=100; i++) {
            let f = i % 3 === 0, b = i % 5 === 0;
            console.log((f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i) + ", " );
        }
    }

    function fizzBuzzGolf() {
        for(let i=0;i<100;) console.log(++i%3===0?i%5===0?"FizzBuzz":"Fizz":i%5===0?"Buzz":i);
    }

    function fizzBuzzSmallest() {
        for(let i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
    }

    // fizzBuzz1();
    // fizzBuzzPaul();
    // fizzBuzzGolf();
    // fizzBuzzSmallest();
    fizzBuzzFastLoop();

})();
