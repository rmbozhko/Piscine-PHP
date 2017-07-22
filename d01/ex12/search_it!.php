#!/usr/bin/php
<?php
if ($argc > 2)
{
    $key = trim($argv[1]);
    $counter = 2;
    while ($counter < $argc)
    {
        $arr = explode(":", $argv[$counter]);
        if (strcmp($key, trim($arr[0])) == 0)
            $res = trim($arr[1])."\n";
        $counter++;
    }
    if (!empty($res))
        echo $res;
}
?>
