<?php
//
// function fib($n) {
//     if ($n < 2) return $n;
//     return fib($n-1) + fib($n-2);
// }
//
// for ($i=0; $i < 11; $i++) {
//     echo fib($i) . ' ';
// }
//
// function factorial($num) {
//     if ( 0 == $num ) return 1;
//     return $num * factorial($num - 1);
// }
// echo "\n";
// echo factorial(5);
// echo "\n";
// echo factorial(10);
//

function countDownToZero($number, $val = "") {
    return ( $number > 0 )?countDownToZero($number - 1, $val . " " . $number):$val;
}

// echo "\n";
// $val = countDownToZero(10);
// echo $val;


function sum($n, $val) {
	$val += $n;
	if ( $n == 1 ) return $val;
  return sum($n-1, $val);
}
//
//
// echo "\n";
// $n = 2;
// $val = sum($n - 1, 0)*2 + 1;
// // echo $val;
//
// echo "\n";
// // $sum = sumOdds($val, $n - 1);
// $sum = $n * $val + sum($n-1, 0) * 2;
// echo $sum;



function going($n) {
    $val = bcmul(bcdiv(1, bcfact($n), 1000000), factSum($n), 1000000);
    return substr($val, 0, 8);
}

function bcfact($n){
    $factorial=$n;
    while (--$n>1) $factorial=bcmul($factorial,$n);
    return $factorial;
}

function factSum($n) {
	if ($n == 1) return 1;
    return bcadd(bcfact($n), factSum($n-1));
}


var_dump(going(5)); echo '<br>';
// var_dump(factSum(2)); echo '<br>';
