#!/usr/bin/php
<?php

function    error_handling()
{
    echo "Wrong Format\n";
    return (1);
}

function    find_item($item, $arr)
{
    $counter = 0;
    while ($counter < count($arr))
    {
        if (strcmp($item, $arr[$counter]) == 0)
            return ($counter);
        $counter++;
    }
    return (0);
}

function    check_numer($num)
{
    if ((strlen($num) == 1 || strlen($num) == 2) && is_numeric($num))
        return (TRUE);
    return (FALSE);
}

if ($argc == 2)
{
    date_default_timezone_set('Europe/Paris');
    $str = preg_replace("/\s+/S", " ", trim($argv[1]));
    $arr = explode(" ", $str);
    if (find_item(lcfirst($arr[0]), array("lundi", "mardi", "mercredi", "juedi", "vendredi", "samedi", "dimanche")) == 0)
        return (error_handling());
    if (!check_numer($arr[1]))
        return (error_handling());
    if (($month = find_item(lcfirst($arr[2]), array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "september", "octobre", "novembre", "decembre"))) == 0)
        return (error_handling());
    if (!(strlen($arr[3]) == 4 && is_numeric($arr[3])))
        return (error_handling());
    if (count(explode(":", $arr[4])) != 3)
        return (error_handling());
    else
    {
        $arr[4] = preg_replace("/\s+/", "", trim($arr[4]));
        $time = explode(":", $arr[4]);
        if (!(check_numer($time[0]) && check_numer($time[1]) && check_numer($time[2])))
            return (error_handling());
        else
            echo mktime((int)$time[0], (int)$time[1], (int)$time[2], (((int)($month)) + 1), (int)$arr[1], (int)$arr[3]), "\n";
    }
}
?>
