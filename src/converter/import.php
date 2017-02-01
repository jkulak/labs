<?php

// $connection = mysql_connect('localhost', 'www', 'www');
// mysql_select_db('zgadu', $connection);
// mysql_query('TRUNCATE TABLE `data`');

$data = file_get_contents('dictionary.txt');
$data = str_replace("\n","",$data);
$data = preg_replace('!\s+!', ' ', $data);
$data = str_replace("<br> ","\n",$data);
$data = explode("\n", $data);

// var_dump($data);

$d = array();

foreach ($data as $value) {
    // INSERT INTO tbl_name (a,b,c) VALUES(1,2,3),(4,5,6),(7,8,9);
    $tmp = explode(' ', $value, 2);
    // var_dump($tmp);
    // print_r($tmp);
    // break;
    $d[$tmp[0]] = $tmp[1];

    // $sql = 'INSERT INTO `data` (`dat_val`, `dat_description`) VALUES ("' . $tmp[0] . '", "' . $tmp[1] . '")';
    // mysql_query($sql);
    // echo mysql_error();
    // echo mysql_insert_id();
}

$json = json_encode($d);

var_dump($json);
file_put_contents('new.txt', $json);
