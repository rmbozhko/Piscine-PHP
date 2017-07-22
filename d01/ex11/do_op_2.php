#!/usr/bin/php
<?php
if ($argc == 2)
{
    $res = NULL;
    $expr = preg_replace("/\s+/", "", trim($argv[1]));
    if (!empty($arr = explode("*", $expr, 2)))
    {
        if (!empty($arr[0]) && !empty($arr[1]))
        {
            if (is_numeric($arr[0]) && is_numeric($arr[1]))
                $res = intval($arr[0]) * intval($arr[1]);
        }
    }
    if (!empty($arr = explode("/", $expr, 2)))
    {
        if (!empty($arr[0]) && !empty($arr[1]))
        {
            if (is_numeric($arr[0]) && is_numeric($arr[1]))
                $res = intval($arr[0]) / intval($arr[1]);
        }
    }
    if (!empty($arr = explode("%", $expr, 2)))
    {
        if (!empty($arr[0]) && !empty($arr[1]))
        {
            if (is_numeric($arr[0]) && is_numeric($arr[1]))
                $res = intval($arr[0]) % intval($arr[1]);
        }
    }
    if (!empty($arr = explode("+", $expr, 2)))
    {
        if (!empty($arr[0]) && !empty($arr[1]))
        {
            if (is_numeric($arr[0]) && is_numeric($arr[1]))
                $res = intval($arr[0]) + intval($arr[1]);
        }
    }
    if (!empty($arr = explode("-", $expr, 2)))
    {
        if (!empty($arr[0]) && !empty($arr[1]))
        {
            if (is_numeric($arr[0]) && is_numeric($arr[1]))
                $res = intval($arr[0]) - intval($arr[1]);
        }
    }
    if (isset($res))
        echo $res, "\n";
    else
        echo "Syntax Error\n";
}
else
    echo "Incorrect Parameters\n";
?>
