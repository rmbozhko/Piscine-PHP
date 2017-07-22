<?php
include("ft_is_sort.php");
$arr[] = "Hello World!";
$arr = array("!/@#;^", "42", "Hello World", "hi", "zZzZzZz");
if (ft_is_sort($arr))
    echo "SORTED";
else
    echo "NOT SORTED";
echo "\n";
?>
