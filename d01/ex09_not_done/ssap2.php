#!/usr/bin/php
<?php

function    sort_order($elem1, $elem2)
{
    if (ctype_upper($elem1))
    {
        if (ctype_lower($elem2))
            return (TRUE);
        else if (ctype_digit($elem2))
            return (TRUE);
        else
            return (TRUE);
    }
    else if (ctype_lower($elem1))
    {
        if (ctype_upper($elem2))
            return (FALSE);
        else if (ctype_digit($elem2))
            return (TRUE);
        else
            return (TRUE);
    }
    else if (ctype_digit($elem1))
    {
        if (ctype_upper($elem2))
            return (FALSE);
        else if (ctype_lower($elem2))
            return (FAlSE);
        else
            return (TRUE);
    }
    else
    {
        if (ctype_upper($elem2))
            return (FALSE);
        else if (ctype_lower($elem2))
            return (FAlSE);
        else if (ctype_digit($elem2))
            return (FALSE);
        else
            return (TRUE);
    }
}

if ($argc > 2)
{
    unset($argv[0]);
    $counter = 1;
    $i = 0;
    while ($counter < $argc)
    {
        if (($words = count(explode(" ", $argv[$counter]))) > 1)
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
    usort($arr);
    $counter = 0;
    while ($counter < count($arr))
        echo $arr[$counter++], "\n";
}
?>
