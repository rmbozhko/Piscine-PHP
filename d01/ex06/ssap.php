#!/usr/bin/php
<?php
if ($argc > 2)
{
    unset($argv[0]);
    $counter = 1;
    $i = 0;
    while ($counter < $argc)
    {
        if (($words = str_word_count($argv[$counter])) != 1)
        {
            $new_arr = explode(" ", $argv[$counter]);
            $a = 0;
            while ($words--)
               $arr[$i++] = $new_arr[$a++];
        }
        else
            $arr[$i++] = $argv[$counter];
        $counter++;
    }
    sort($arr);
    $counter = 0;
    while ($counter < count($arr))
        echo $arr[$counter++], "\n";
}
?>
