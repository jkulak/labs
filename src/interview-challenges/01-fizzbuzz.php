<?php

/*

"Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for
the multiples of five print “Buzz”. For numbers which are multiples
of both three and five print “FizzBuzz”.

*/

const MAX_VALUE = 100;

// for ($i=1; $i < MAX_VALUE+1; $i++) {
//     if ($i % 3 == 0 && $i % 5 == 0) {
//         $val = "FizzBuzz";
//     } else if ($i % 3 == 0) {
//         $val = "Fizz";
//     } else if ($i % 5 == 0) {
//         $val = "Buzz";
//     } else {
//         $val = $i;
//     }
//     print($val . ",");
// }

for ($i=1; $i < MAX_VALUE+1; $i++) {
    $val = "";
    if ($i % 3 == 0) {
        $val = "Fizz";
    } else if ($i % 5 == 0) {
        $val += "Buzz";
    }
    print(($val?$val:$i) . ", ");
}
