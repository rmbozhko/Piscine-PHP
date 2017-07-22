#!usr/bin/php
<?php
function ft_split($str)
{
    $counter = 0;
    $i = 0;
    $arr = explode(" ", trim($str));
    while ($counter < count($arr))
    {
        if ((empty($arr[$counter])) == FALSE)
            $new_arr[$i++] = $arr[$counter];
        $counter++;
    }
    sort($new_arr);
    return ($new_arr);
}
?>
