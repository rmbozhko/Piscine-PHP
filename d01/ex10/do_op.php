#!/usr/bin/php
<?php
if ($argc == 4)
{
    $i = 0;
    if (is_numeric(trim($argv[1])) && is_numeric(trim($argv[3])))
    {
        if (trim($argv[2]) == '*')
            $res = intval(trim($argv[1])) * intval(trim($argv[3]));
        else if (trim($argv[2]) == '+')
            $res = intval(trim($argv[1])) + intval(trim($argv[3]));
        else if (trim($argv[2]) == '-')
            $res = intval(trim($argv[1])) - intval(trim($argv[3]));
        else if (trim($argv[2]) == '/')
            $res = intval(trim($argv[1])) / intval(trim($argv[3]));
        else if (trim($argv[2]) == '%')
            $res = intval(trim($argv[1])) % intval(trim($argv[3]));
        if (empty($res) == FALSE)
            echo $res,"\n";
        return ;
    }
}
echo "Incorrect Parameters\n";
?>
