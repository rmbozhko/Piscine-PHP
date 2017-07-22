#!/usr/bin/php
<?php

function    print_both_arrs($arr1, $arr2)
{
    $counter1 = 0;
    $counter2 = 0;
    $range = range(1, count($arr1) - 1, 4);
    while ($counter1 < count($arr1) && $counter2 <= count($arr2))
    {
        if (in_array($counter1, $range))
        {
            echo $arr2[$counter2++];
            $counter1++;
        }
        else
            echo $arr1[$counter1++];
    }
}

function        bubble_sort($arr, $len)
{
    $counter = 0;
    $val = NULL;
    while ($counter < ($len - 1))
    {
        if (strcmp($arr[$counter], $arr[$counter + 1]) > 0)
        {
            $val = $arr[$counter];
            $arr[$counter] = $arr[$counter + 1];
            $arr[$counter + 1] = $val;
            $counter = 0;
        }
        else
            $counter += 1;
    }
    return ($arr);
}

if ($argc === 2 && !empty($argv[1]) && isset($argv[1]))
{
    $file = file($argv[1]);
    $counter = 0;
    $time[$counter++] = $file[1];
    $i = 5;
    while ($counter < (count($file) - 1) && $i < count($file))
    {
        $time[$counter++] = $file[$i];
        $i += 4;
    }
    $time = bubble_sort($time, count($time));
    print_both_arrs($file, $time);
}
?>
