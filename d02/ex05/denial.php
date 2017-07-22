#!/usr/bin/php
<?php

function        fill_arr($arr, $col, $key)
{
    $val_arr = array();
    $key_arr = array();
    $i = 0;
    $counter = 1;
    while ($counter < count($arr))
    {
        $temp = explode(";", $arr[$counter]);
        $val_arr[$i] = $temp[$col];
        $key_arr[$i] = $temp[$key];
        $i++;
        $counter++;
    }
    $counter = 0;
    while ($counter < count($val_arr))
    {
        $new_arr[$key_arr[$counter]] = $val_arr[$counter];
        $counter++;
    }
    return ($new_arr);
}

function        parse_data($file, $key)
{
    if (strpos(trim($file[0]), $key) === FALSE)
        return ;
    $indexs = explode(';', $file[0]);///*trim(*/$file[0]/*)*/);
    $counter = 0;
    $key = array_search($key, $indexs);
    echo $key."\n";
    while ($counter < count($indexs))
    {
        global $$indexs[$counter];
        $$indexs[$counter] = fill_arr($file, $counter, $key);
        $counter++;
    }
}

// There is a problem with last array $alias, use trim to fix it.

if ($argc === 3 && !empty($argv[1]) && isset($argv[1]) && !empty($argv[2]))
{
    parse_data(file($argv[1]), trim($argv[2]));
    echo "Enter your command: ";
    while ($answer = fgets(STDIN))
    {
       //$answer = trim($answer);
       eval($answer);
       echo "Enter your command: ";
    }
}
?>
