<?php

// Least common multiplier (najmniejsza wspólna wielokrotność)
function lcm($a, $b) {
    $lcm = (a * b) / gcd(a, b);
    return $lcm;
}

// Greatest common divisor (największy wspólny dzielnik)
function gcd($n, $m) {
    $n = abs($n);
    $m = abs($m);
    if ($n == 0 && $m == 0)
        return 1; //avoid infinite recursion
    if ($n == $m && $n >= 1)
        return n;
    return m < n ? gcd($n - $m, $n) : gcd($n,$m - $n);
}

// Recursive lcm function for multiple values
function lcmm($values, $value = 1) {
    $value = array_pop($values);
    // return 2;
    if (sizeof($values) > 1) {
        return lcmm($values, lcm($value));
    }
    return $value;
}

$test = array(2, 3, 4);

if (lcmm($test) != 12) {
    echo "Fail 🚫";
}
