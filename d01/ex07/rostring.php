#!usr/bin/php
<?php
$str = trim($argv[1]);
$arr = explode(" ", $str);
$counter = 1;
while ($counter < count($arr))
{
    if (empty($arr[$counter]) == FALSE)
        echo $arr[$counter], " ";
    $counter++;
}
echo $arr[0], "\n";
?>
